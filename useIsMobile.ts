import { useEffect, useState } from 'react';

/** Breakpoint for dedicated mobile layout (matches Tailwind `md`). */
export const MOBILE_MQ = '(max-width: 768px)';

export function useIsMobile(query: string = MOBILE_MQ): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const apply = (event: MediaQueryList | MediaQueryListEvent) => {
      setIsMobile('matches' in event ? event.matches : mq.matches);
    };
    apply(mq);
    if (mq.addEventListener) mq.addEventListener('change', apply);
    else (mq as MediaQueryList & { addListener: typeof mq.addEventListener }).addListener(apply);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', apply);
      else (mq as MediaQueryList & { removeListener: typeof mq.removeEventListener }).removeListener(apply);
    };
  }, [query]);

  return isMobile;
}
