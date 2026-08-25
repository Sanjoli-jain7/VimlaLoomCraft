import { useState } from 'react';
import '../styles/editorial-image.css';

// Real Vimla photography hasn't been dropped into /public/images yet —
// this renders a quiet ivory/teak placeholder instead of a broken-image
// icon whenever a path 404s, so the layout still looks intentional
// until real photos are added.
export default function EditorialImage({ src, alt, className = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`editorial-image editorial-image--fallback ${className}`} role="img" aria-label={alt} />
    );
  }

  return (
    <img
      className={`editorial-image ${className}`}
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}
