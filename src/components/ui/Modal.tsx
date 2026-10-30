import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

export default function Modal({ title, description, trigger, children, wide = false }: { title: string; description: string; trigger: ReactNode; children: ReactNode; wide?: boolean }) {
  return <Dialog.Root>
    <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
    <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/45" />
      <Dialog.Content className={`fixed left-1/2 top-1/2 z-50 max-h-[90dvh] w-[calc(100%-2rem)] ${wide ? 'max-w-5xl' : 'max-w-lg'} -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-white p-5 sm:p-7 shadow-lg`}>
        <Dialog.Title className="pr-8 text-xl font-bold">{title}</Dialog.Title>
        <Dialog.Description className="mb-6 mt-2 text-sm leading-relaxed text-muted">{description}</Dialog.Description>
        {children}
        <Dialog.Close className="absolute right-3 top-3 grid size-11 place-items-center rounded-lg hover:bg-surface" aria-label="Tutup dialog"><X /></Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
