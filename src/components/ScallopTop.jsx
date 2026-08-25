// A single repeating scallop strip, sized by its container's width via
// viewBox. Used as the decorative valance above each archway — the one
// place on this screen that carries the haveli's carved-arch detailing.
export default function ScallopTop({ count = 7, className = '' }) {
  const scallops = Array.from({ length: count });
  const width = 100 / count;

  return (
    <svg
      className={`scallop-top ${className}`}
      viewBox={`0 0 ${count * 40} 24`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {scallops.map((_, i) => (
        <path
          key={i}
          d={`M${i * 40},0 a20,20 0 0 0 40,0 z`}
          className="scallop-top__unit"
        />
      ))}
    </svg>
  );
}
