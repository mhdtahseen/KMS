'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { type ImageProps } from 'next/image';

type SmartImageProps = ImageProps & {
  /** Rendered instead of the image when it is missing or fails to load. */
  fallback?: React.ReactNode;
};

/**
 * next/image that degrades gracefully: if the source is missing or the
 * request fails, the designed fallback is shown instead of an empty frame.
 */
export function SmartImage({ fallback = null, alt, ...props }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // An image can fail before React hydrates, in which case onError never fires.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed || !props.src) return <>{fallback}</>;
  return <Image ref={ref} alt={alt} {...props} onError={() => setFailed(true)} />;
}
