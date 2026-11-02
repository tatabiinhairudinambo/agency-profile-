import * as React from "react"

const FRAME_W = 380
const FRAME_H = 830
const SCREEN_X = 9
const SCREEN_Y = 14
const SCREEN_W = 360
const SCREEN_H = 800
const SCREEN_RX = 33
const SCREEN_RY = 25

const pct = (value: number, total: number) => (value / total) * 100

export interface AndroidProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  videoSrc?: string
  children?: React.ReactNode
}

/**
 * Android frame. Pass `src` / `videoSrc` for a screenshot, or `children` to
 * render a live screen (mirrors the Iphone component's API).
 */
export function Android({ src, videoSrc, children, className = "", style, ...props }: AndroidProps) {
  const reactId = React.useId().replace(/[^a-zA-Z0-9]/g, "")
  const maskId = "androidPunch" + reactId

  return (
    <div
      className={`relative inline-block w-full align-middle leading-none ${className}`}
      style={{ aspectRatio: `${FRAME_W}/${FRAME_H}`, ...style }}
      {...props}
    >
      <div
        className="pointer-events-none absolute z-0 overflow-hidden bg-[#f4f6f0]"
        style={{
          left: `${pct(SCREEN_X, FRAME_W)}%`,
          top: `${pct(SCREEN_Y, FRAME_H)}%`,
          width: `${pct(SCREEN_W, FRAME_W)}%`,
          height: `${pct(SCREEN_H, FRAME_H)}%`,
          borderRadius: `${pct(SCREEN_RX, SCREEN_W)}% / ${pct(SCREEN_RY, SCREEN_H)}%`,
        }}
      >
        {videoSrc ? (
          <video
            className="block size-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        ) : src ? (
          <img src={src} alt="" className="block size-full object-cover object-top" />
        ) : (
          children
        )}
      </div>

      <svg
        viewBox={`0 0 ${FRAME_W} ${FRAME_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 size-full"
        style={{ transform: "translateZ(0)" }}
        aria-hidden="true"
      >
        <g mask={`url(#${maskId})`}>
          <path
            d="M376 153H378C379.105 153 380 153.895 380 155V249C380 250.105 379.105 251 378 251H376V153Z"
            className="fill-[#E5E5E5]"
          />
          <path
            d="M376 301H378C379.105 301 380 301.895 380 303V351C380 352.105 379.105 353 378 353H376V301Z"
            className="fill-[#E5E5E5]"
          />
          <path
            d="M0 42C0 18.8041 18.804 0 42 0H336C359.196 0 378 18.804 378 42V788C378 811.196 359.196 830 336 830H42C18.804 830 0 811.196 0 788V42Z"
            className="fill-[#E5E5E5]"
          />
          <path
            d="M2 43C2 22.0132 19.0132 5 40 5H338C358.987 5 376 22.0132 376 43V787C376 807.987 358.987 825 338 825H40C19.0132 825 2 807.987 2 787V43Z"
            className="fill-white"
          />
          <path
            d="M9.25 48C9.25 29.3604 24.3604 14.25 43 14.25H335C353.64 14.25 368.75 29.3604 368.75 48V780C368.75 798.64 353.64 813.75 335 813.75H43C24.3604 813.75 9.25 798.64 9.25 780V48Z"
            className="fill-[#E5E5E5] stroke-[#E5E5E5] stroke-[0.5]"
          />
        </g>

        <circle cx="189" cy="28" r="9" className="fill-white" />
        <circle cx="189" cy="28" r="4" className="fill-[#E5E5E5]" />

        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <rect width={FRAME_W} height={FRAME_H} fill="white" />
            <rect
              x={SCREEN_X}
              y={SCREEN_Y}
              width={SCREEN_W}
              height={SCREEN_H}
              rx={SCREEN_RX}
              ry={SCREEN_RY}
              fill="black"
            />
          </mask>
        </defs>
      </svg>
    </div>
  )
}
