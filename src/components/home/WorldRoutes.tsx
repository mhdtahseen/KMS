import { MAP_DOTS, MAP_HEIGHT, MAP_PINS, MAP_WIDTH } from './worldMapData';

type Destination = {
  slug: string;
  label: string;
};

type WorldRoutesProps = {
  originLabel: string;
  destinations: Destination[];
  className?: string;
};

// Where each label sits relative to its pin (map units).
const LABEL_OFFSET: Record<string, { dx: number; dy: number; anchor: 'start' | 'end' | 'middle' }> = {
  canada: { dx: 0, dy: -2.1, anchor: 'middle' },
  usa: { dx: 0, dy: 3.1, anchor: 'middle' },
  'united-kingdom': { dx: 1.3, dy: -1.7, anchor: 'start' },
  'european-union': { dx: -1.3, dy: 3.2, anchor: 'end' },
  australia: { dx: -1.6, dy: 0.5, anchor: 'end' },
};

/** A shallow arc from the origin to a pin, bowed towards the top of the map. */
function arcPath([x1, y1]: [number, number], [x2, y2]: [number, number]) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  const lift = Math.min(15, dist * 0.3);
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 - lift;
  return `M${x1} ${y1}Q${cx.toFixed(2)} ${cy.toFixed(2)} ${x2} ${y2}`;
}

/**
 * Dotted world map with routes drawn from Doha to every destination KMS
 * serves. Pure SVG + CSS: no client JavaScript, scales to any width.
 */
export function WorldRoutes({ originLabel, destinations, className }: WorldRoutesProps) {
  const origin = MAP_PINS.doha;
  const routes = destinations
    .filter((d) => MAP_PINS[d.slug])
    .map((d, i) => ({ ...d, pin: MAP_PINS[d.slug], path: arcPath(origin, MAP_PINS[d.slug]), delay: 0.9 + i * 0.28 }));

  return (
    <svg
      viewBox={`-2 -3 ${MAP_WIDTH + 4} ${MAP_HEIGHT + 6}`}
      className={className}
      role="img"
      aria-label={`${originLabel} → ${routes.map((r) => r.label).join(', ')}`}
      direction="ltr"
    >
      <defs>
        <linearGradient id="kms-arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7f5e15" />
          <stop offset="0.5" stopColor="#ead9a8" />
          <stop offset="1" stopColor="#c49a30" />
        </linearGradient>
        <radialGradient id="kms-origin" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#c49a30" stopOpacity="0.55" />
          <stop offset="1" stopColor="#c49a30" stopOpacity="0" />
        </radialGradient>
        <filter id="kms-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.35" />
        </filter>
      </defs>

      {/* land */}
      <path d={MAP_DOTS} fill="none" stroke="#f2ede3" strokeOpacity="0.2" strokeWidth="0.3" strokeLinecap="round" />

      {/* warm light around the origin */}
      <circle cx={origin[0]} cy={origin[1]} r="13" fill="url(#kms-origin)" />

      {/* routes */}
      {routes.map((r) => (
        <g key={r.slug}>
          <path
            d={r.path}
            pathLength={1}
            fill="none"
            stroke="url(#kms-arc)"
            strokeWidth="0.55"
            strokeLinecap="round"
            opacity="0.35"
            filter="url(#kms-soft)"
            className="route-arc"
            style={{ '--d': `${r.delay}s` } as React.CSSProperties}
          />
          <path
            d={r.path}
            pathLength={1}
            fill="none"
            stroke="url(#kms-arc)"
            strokeWidth="0.16"
            strokeLinecap="round"
            className="route-arc"
            style={{ '--d': `${r.delay}s` } as React.CSSProperties}
          />
          {/* a point of light travelling the route */}
          <circle r="0.32" fill="#fff6dc" className="route-spark">
            <animateMotion dur="5.5s" begin={`${r.delay + 2.2}s`} repeatCount="indefinite" path={r.path} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
            <animate attributeName="opacity" dur="5.5s" begin={`${r.delay + 2.2}s`} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.12;0.85;1" />
          </circle>
        </g>
      ))}

      {/* destinations */}
      {routes.map((r) => {
        const o = LABEL_OFFSET[r.slug] ?? { dx: 0, dy: -2, anchor: 'middle' as const };
        return (
          <g key={r.slug} className="route-end" style={{ '--d': `${r.delay + 1.5}s` } as React.CSSProperties}>
            <circle cx={r.pin[0]} cy={r.pin[1]} r="1.15" fill="#c49a30" opacity="0.18" />
            <circle cx={r.pin[0]} cy={r.pin[1]} r="0.42" fill="#ead9a8" />
            <text
              x={r.pin[0] + o.dx}
              y={r.pin[1] + o.dy}
              textAnchor={o.anchor}
              className="map-label"
              fill="#f2ede3"
              fillOpacity="0.82"
              fontSize="1.3"
            >
              {r.label}
            </text>
          </g>
        );
      })}

      {/* origin: Doha */}
      <g>
        <circle cx={origin[0]} cy={origin[1]} r="0.9" fill="none" stroke="#c49a30" strokeWidth="0.12" className="pulse-ring" />
        <circle cx={origin[0]} cy={origin[1]} r="0.9" fill="none" stroke="#c49a30" strokeWidth="0.12" className="pulse-ring" style={{ animationDelay: '1.5s' }} />
        <circle cx={origin[0]} cy={origin[1]} r="1.3" fill="#c49a30" opacity="0.25" />
        <circle cx={origin[0]} cy={origin[1]} r="0.62" fill="#ead9a8" />
        <text
          x={origin[0] + 1.8}
          y={origin[1] + 2.6}
          className="map-label map-label-origin"
          fill="#c49a30"
          fontSize="1.45"
        >
          {originLabel}
        </text>
      </g>
    </svg>
  );
}
