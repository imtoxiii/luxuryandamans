export type EffectiveConnectionType = 'slow-2g' | '2g' | '3g' | '4g' | 'unknown';

export interface NetworkInfo {
  saveData: boolean;
  effectiveType: EffectiveConnectionType;
  downlinkMbps: number | null;
  isSlow: boolean;
}

/**
 * Reads the Network Information API if available, with sensible fallbacks.
 * This does not subscribe to changes; we only need a snapshot at load time
 * for prefetch strategy decisions.
 */
export function getNetworkInfo(): NetworkInfo {
  const nav = navigator as any;
  const connection = nav?.connection || nav?.mozConnection || nav?.webkitConnection;

  const saveData: boolean = Boolean(connection?.saveData);
  const effectiveType: EffectiveConnectionType = connection?.effectiveType ?? 'unknown';
  const downlinkMbps: number | null = typeof connection?.downlink === 'number' ? connection.downlink : null;

  // Consider 2g/slow-2g or Save-Data as slow. Also treat < 1.5 Mbps as slow.
  const isSlow = saveData || effectiveType === 'slow-2g' || effectiveType === '2g' || (downlinkMbps !== null && downlinkMbps < 1.5);

  return { saveData, effectiveType, downlinkMbps, isSlow };
}
























