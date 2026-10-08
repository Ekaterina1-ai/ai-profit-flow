import React, { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

type NotifyKind = 'success' | 'error' | 'info';

type NotifyPayload = {
  message: string;
  kind: NotifyKind;
};

type NotifyHandler = (message: string, kind?: NotifyKind) => void;

let notifyHandler: NotifyHandler | null = null;

/** Show a branded popup instead of window.alert */
export function notify(message: string, kind: NotifyKind = 'info') {
  if (notifyHandler) {
    notifyHandler(message, kind);
    return;
  }
  // Fallback before host mounts
  window.alert(message);
}

export const NotifyHost: React.FC = () => {
  const [payload, setPayload] = useState<NotifyPayload | null>(null);

  useEffect(() => {
    notifyHandler = (message, kind = 'info') => {
      setPayload({ message, kind });
    };
    return () => {
      notifyHandler = null;
    };
  }, []);

  if (!payload) return null;

  const accent =
    payload.kind === 'success'
      ? {
          ring: 'border-cyan-500/40',
          glow: 'shadow-[0_0_60px_rgba(34,211,238,0.18)]',
          iconWrap: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
          button: 'bg-cyan-500 hover:bg-cyan-400 text-black',
          Icon: CheckCircle,
        }
      : payload.kind === 'error'
        ? {
            ring: 'border-rose-500/40',
            glow: 'shadow-[0_0_60px_rgba(244,63,94,0.16)]',
            iconWrap: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
            button: 'bg-rose-500 hover:bg-rose-400 text-white',
            Icon: AlertTriangle,
          }
        : {
            ring: 'border-blue-500/40',
            glow: 'shadow-[0_0_60px_rgba(59,130,246,0.16)]',
            iconWrap: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
            button: 'bg-blue-500 hover:bg-blue-400 text-white',
            Icon: Info,
          };

  const title =
    payload.kind === 'success'
      ? 'Готово'
      : payload.kind === 'error'
        ? 'Ошибка'
        : 'Внимание';

  const close = () => setPayload(null);

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 modal-backdrop animate-in fade-in duration-300"
      onClick={close}
      role="presentation"
    >
      <div
        className={`glass-card relative w-full max-w-md rounded-[2rem] border ${accent.ring} ${accent.glow} bg-[#0a0f18]/95 p-8 sm:p-10`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-notify-title"
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-5 top-5 text-gray-500 transition-colors hover:text-white"
          aria-label="Закрыть"
        >
          <X size={22} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div
            className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border ${accent.iconWrap}`}
          >
            <accent.Icon size={30} />
          </div>
          <h3
            id="site-notify-title"
            className="mb-3 font-heading text-2xl font-bold tracking-wide text-white"
          >
            {title}
          </h3>
          <p className="mb-8 whitespace-pre-line text-sm leading-relaxed text-gray-300 sm:text-base">
            {payload.message}
          </p>
          <button
            type="button"
            onClick={close}
            className={`rounded-full px-10 py-3 text-sm font-black uppercase tracking-[0.18em] transition-colors ${accent.button}`}
          >
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
};
