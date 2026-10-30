-- Rancangan PostgreSQL 16+. Belum terhubung ke frontend demo.
BEGIN;
CREATE TABLE regions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(120) NOT NULL UNIQUE
);
CREATE TABLE campuses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  region_id uuid NOT NULL REFERENCES regions(id),
  name varchar(200) NOT NULL,
  city varchar(100) NOT NULL,
  UNIQUE (region_id, name)
);
CREATE TABLE ldks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  campus_id uuid NOT NULL UNIQUE REFERENCES campuses(id),
  name varchar(160) NOT NULL,
  slug varchar(180) NOT NULL UNIQUE,
  member_count integer NOT NULL DEFAULT 0 CHECK (member_count >= 0),
  activity_status varchar(16) NOT NULL DEFAULT 'pending'
    CHECK (activity_status IN ('active', 'inactive', 'pending')),
  last_verified_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(120) NOT NULL,
  email varchar(254) NOT NULL,
  password_hash text NOT NULL,
  role varchar(16) NOT NULL CHECK (role IN ('admin', 'ldk')),
  ldk_id uuid REFERENCES ldks(id),
  disabled_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK ((role = 'admin' AND ldk_id IS NULL) OR (role = 'ldk' AND ldk_id IS NOT NULL))
);
CREATE UNIQUE INDEX users_email_unique ON users(lower(email));
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ldk_id uuid NOT NULL REFERENCES ldks(id),
  created_by uuid NOT NULL REFERENCES users(id),
  title varchar(160) NOT NULL CHECK (length(trim(title)) > 0),
  slug varchar(180) NOT NULL UNIQUE,
  category varchar(16) NOT NULL CHECK (category IN ('kajian', 'training', 'musda')),
  summary text NOT NULL,
  location varchar(250) NOT NULL,
  starts_at timestamptz NOT NULL,
  ends_at timestamptz NOT NULL,
  capacity integer CHECK (capacity > 0),
  registration_closes_at timestamptz,
  status varchar(16) NOT NULL DEFAULT 'planned'
    CHECK (status IN ('planned', 'ongoing', 'completed', 'cancelled')),
  publication_status varchar(16) NOT NULL DEFAULT 'draft'
    CHECK (publication_status IN ('draft', 'pending', 'published', 'rejected')),
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (ends_at > starts_at),
  CHECK (registration_closes_at IS NULL OR registration_closes_at <= starts_at),
  CHECK (publication_status <> 'published' OR published_at IS NOT NULL)
);
CREATE INDEX events_public_schedule ON events(starts_at) WHERE publication_status = 'published';
CREATE INDEX events_ldk_status ON events(ldk_id, status, starts_at);
CREATE TABLE event_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid NOT NULL UNIQUE REFERENCES events(id),
  submitted_by uuid NOT NULL REFERENCES users(id),
  summary text NOT NULL CHECK (length(trim(summary)) > 0),
  participant_count integer NOT NULL CHECK (participant_count >= 0),
  submitted_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE report_attachments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id uuid NOT NULL REFERENCES event_reports(id),
  object_key text NOT NULL UNIQUE,
  mime_type varchar(100) NOT NULL,
  byte_size bigint NOT NULL CHECK (byte_size > 0),
  caption varchar(250)
);
CREATE TABLE registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid NOT NULL REFERENCES events(id),
  name varchar(120) NOT NULL,
  email varchar(254) NOT NULL,
  campus varchar(200) NOT NULL,
  status varchar(16) NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled')),
  consent_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX registrations_event_email ON registrations(event_id, lower(email));
CREATE TABLE issues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid NOT NULL REFERENCES users(id),
  approved_by uuid REFERENCES users(id),
  title varchar(200) NOT NULL,
  slug varchar(220) NOT NULL UNIQUE,
  category varchar(24) NOT NULL CHECK (category IN ('strategic', 'opinion', 'release')),
  excerpt varchar(500) NOT NULL,
  body_markdown text NOT NULL,
  status varchar(16) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'pending', 'published', 'rejected')),
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (status <> 'published' OR (approved_by IS NOT NULL AND published_at IS NOT NULL))
);
CREATE INDEX issues_published ON issues(published_at DESC) WHERE status = 'published';
CREATE TABLE feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(120) NOT NULL,
  email varchar(254) NOT NULL,
  topic varchar(24) NOT NULL CHECK (topic IN ('collaboration', 'question', 'complaint')),
  message text NOT NULL,
  status varchar(16) NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_review', 'resolved')),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id uuid REFERENCES users(id),
  action varchar(80) NOT NULL,
  entity_type varchar(40) NOT NULL,
  entity_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE FUNCTION touch_updated_at() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;
CREATE TRIGGER touch_ldks BEFORE UPDATE ON ldks FOR EACH ROW EXECUTE FUNCTION touch_updated_at();
CREATE TRIGGER touch_events BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION touch_updated_at();
CREATE TRIGGER touch_issues BEFORE UPDATE ON issues FOR EACH ROW EXECUTE FUNCTION touch_updated_at();
COMMIT;
