import * as React from "react"
import {
  Bell,
  Carrot,
  Check,
  ChevronDown,
  ChevronRight,
  CloudSun,
  House,
  Leaf,
  ListChecks,
  MapPin,
  Sparkles,
  Sprout,
  Store,
  UserRound,
  Wheat,
} from "lucide-react"

const SCREEN_W = 390
const SCREEN_H = 844

const TANI_CSS = `
.tani-screen-wrap{position:relative;width:100%;height:100%;overflow:hidden;background:#f4f6f0}
.tani-screen{position:relative;width:${SCREEN_W}px;height:${SCREEN_H}px;transform-origin:top left;display:flex;flex-direction:column;overflow:hidden;background:#f4f6f0;color:#10150d;font-family:var(--ovs-sans,"Inter","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);-webkit-font-smoothing:antialiased}
.tani-screen *{box-sizing:border-box}
.tani-hero{position:relative;flex:none;height:300px;padding:54px 20px 22px;border-radius:0 0 28px 28px;overflow:hidden;color:#edf1e6;background:radial-gradient(120% 85% at 88% 0%,rgba(196,220,82,.2),rgba(196,220,82,0) 56%),linear-gradient(158deg,#0e1a10 0%,#172a1a 100%)}
.tani-hero::after{content:"";position:absolute;left:-60px;bottom:-110px;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle,rgba(196,220,82,.13),rgba(196,220,82,0) 68%);pointer-events:none}
.tani-hero-photo{position:absolute;inset:0;z-index:0;background-size:cover;background-position:center 38%;opacity:.27;filter:saturate(.78) contrast(1.06);pointer-events:none}
.tani-hero-veil{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(14,26,16,.34) 0%,rgba(14,26,16,.8) 54%,#0e1a10 100%);pointer-events:none}
.tani-status{position:absolute;top:14px;left:24px;right:24px;display:flex;align-items:center;justify-content:space-between;font-size:11.5px;font-weight:600;letter-spacing:.02em;color:#f4f6f0;z-index:4}
.tani-status-icons{display:flex;align-items:center;gap:5px;opacity:.95}
.tani-top{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.tani-brand{display:flex;align-items:center;gap:7px;font-size:13px;font-weight:600;letter-spacing:-.02em}
.tani-brand-mark{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:#c4dc52;color:#10150d;flex:none}
.tani-bell{position:relative;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#edf1e6}
.tani-bell i{position:absolute;top:6px;right:7px;width:6px;height:6px;border-radius:50%;background:#c4dc52;border:1.5px solid #172a1a}
.tani-loc{position:relative;z-index:2;display:flex;align-items:center;gap:4px;margin-top:12px;font-size:10.5px;font-weight:500;color:#c4dc52}
.tani-hero h1{position:relative;z-index:2;margin:12px 0 0;font-size:23px;line-height:1.1;letter-spacing:-.04em;font-weight:500}
.tani-sub{position:relative;z-index:2;margin:4px 0 0;max-width:24em;font-size:11px;line-height:1.35;color:rgba(237,241,230,.62)}
.tani-weather{position:relative;z-index:2;display:flex;align-items:center;gap:14px;margin-top:16px;padding:12px 14px;border-radius:18px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.tani-weather-main{display:flex;align-items:center;gap:10px;min-width:0}
.tani-weather-icon{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;background:rgba(196,220,82,.16);color:#c4dc52;flex:none}
.tani-weather-main b{display:block;font-size:22px;line-height:1;letter-spacing:-.04em;font-weight:500}
.tani-weather-main span{display:block;margin-top:3px;font-size:9px;color:rgba(237,241,230,.55)}
.tani-weather-line{width:1px;height:38px;background:rgba(255,255,255,.12);flex:none}
.tani-moist{display:flex;align-items:center;gap:8px;min-width:0}
.tani-ring{position:relative;width:42px;height:42px;flex:none}
.tani-ring svg{display:block;width:100%;height:100%}
.tani-ring b{position:absolute;inset:0;display:grid;place-items:center;font-size:10px;font-weight:600}
.tani-moist>span{max-width:5.5em;font-size:9px;line-height:1.25;color:rgba(237,241,230,.55)}
.tani-body{flex:1;min-height:0;display:flex;flex-direction:column;gap:13px;padding:16px 20px 0;background:#f4f6f0}
.tani-sec{display:flex;align-items:center;justify-content:space-between;gap:10px}
.tani-sec b{font-size:12.5px;font-weight:600;letter-spacing:-.02em}
.tani-sec span{display:flex;align-items:center;gap:2px;font-size:9.5px;font-weight:500;color:#6b7565}
.tani-fields{display:flex;gap:10px}
.tani-field{flex:1;min-width:0;padding:10px 11px 11px;border-radius:15px;background:#fff;border:1px solid rgba(16,21,13,.07);box-shadow:0 8px 20px -16px rgba(10,20,8,.25)}
.tani-field-top{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:8px}
.tani-field-icon{width:27px;height:27px;border-radius:9px;display:grid;place-items:center;flex:none}
.tani-field-icon.rice{background:#e9f0d2;color:#5f8a3a}
.tani-field-icon.veg{background:#f7e9d8;color:#c9702a}
.tani-pill{font-size:7.5px;font-weight:600;padding:3px 6px;border-radius:999px;white-space:nowrap}
.tani-pill.healthy{background:#e9f0d2;color:#4c6e22}
.tani-pill.warn{background:#f9ead9;color:#a85a1f}
.tani-field b{display:block;font-size:10.5px;font-weight:600;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tani-field>span{display:block;margin-top:2px;font-size:8.5px;color:#6b7565}
.tani-bar{height:3px;margin-top:8px;border-radius:3px;overflow:hidden;background:#e7ebe0}
.tani-bar i{display:block;height:100%;border-radius:3px;background:#aec643}
.tani-tasks{padding:3px 11px;border-radius:15px;background:#fff;border:1px solid rgba(16,21,13,.07);box-shadow:0 8px 20px -16px rgba(10,20,8,.25)}
.tani-task{display:flex;align-items:center;gap:9px;padding:8px 0;border-top:1px solid rgba(16,21,13,.06)}
.tani-task:first-child{border-top:0}
.tani-check{width:18px;height:18px;border-radius:50%;border:1.5px solid #c9d0c2;display:grid;place-items:center;flex:none;color:#fff}
.tani-task.done .tani-check{background:#aec643;border-color:#aec643}
.tani-task>div{flex:1;min-width:0}
.tani-task b{display:block;font-size:10px;font-weight:600;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tani-task>div span{display:block;margin-top:1px;font-size:8.5px;color:#6b7565}
.tani-task em{flex:none;font-style:normal;font-size:8px;font-weight:500;color:#8a9484}
.tani-task.done b{color:#8a9484;text-decoration:line-through}
.tani-task.done em{color:#6f9a2a}
.tani-market{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 11px;border-radius:14px;background:#fff;border:1px solid rgba(16,21,13,.07);box-shadow:0 8px 20px -16px rgba(10,20,8,.25)}
.tani-market-copy span{display:block;font-size:8.5px;color:#6b7565}
.tani-market-copy b{display:block;margin-top:2px;font-size:13px;font-weight:600;letter-spacing:-.02em}
.tani-market-copy em{font-style:normal;font-size:8px;font-weight:500;color:#6b7565}
.tani-market-right{display:flex;align-items:center;gap:8px}
.tani-up{font-size:8.5px;font-weight:600;color:#4c6e22;background:#e9f0d2;padding:3px 6px;border-radius:999px}
.tani-spark{display:block;width:62px;height:24px}
.tani-insight{display:flex;align-items:center;gap:9px;padding:9px 11px;border-radius:14px;background:linear-gradient(135deg,#eef3dd,#e5edcc);border:1px solid #d8e3bd}
.tani-insight-icon{width:26px;height:26px;border-radius:9px;display:grid;place-items:center;flex:none;background:#fff;color:#6f9a2a;box-shadow:0 2px 8px rgba(95,138,58,.1)}
.tani-insight>div{flex:1;min-width:0}
.tani-insight b{display:block;font-size:9px;font-weight:600;color:#10150d;letter-spacing:-.01em}
.tani-insight p{margin:1px 0 0;font-size:8.5px;line-height:1.3;color:#4b5546}
.tani-insight-arrow{flex:none;color:#8a9484}
.tani-nav{position:relative;flex:none;height:82px;display:flex;align-items:flex-start;justify-content:space-between;padding:10px 18px 0;background:#fff;border-top:1px solid rgba(16,21,13,.08);z-index:3}
.tani-nav-item{display:flex;flex-direction:column;align-items:center;gap:4px;min-width:44px;font-size:8px;font-weight:500;color:#8a9484}
.tani-nav-item.active{color:#10150d}
.tani-nav-item.active svg{color:#6f9a2a;background:#eef3dd;border-radius:9px;padding:3px;box-sizing:content-box}
.tani-home{position:absolute;left:50%;bottom:7px;transform:translateX(-50%);width:102px;height:4px;border-radius:3px;background:#10150d;opacity:.82}
`

export function TaniAppScreen() {
  const wrap = React.useRef<HTMLDivElement | null>(null)
  const [scale, setScale] = React.useState(1)

  React.useLayoutEffect(() => {
    const el = wrap.current
    if (!el) return
    const update = () => setScale(el.clientWidth / SCREEN_W)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="tani-screen-wrap" ref={wrap} aria-hidden="true">
      <div className="tani-screen" style={{ transform: `scale(${scale})` }}>
        <div className="tani-hero">
          <div className="tani-hero-photo" style={{ backgroundImage: "url(/images/farming/crop-management.jpg)" }} />
          <div className="tani-hero-veil" />
          <div className="tani-status">
            <span>9:41</span>
            <span className="tani-status-icons">
              <svg width="15" height="10" viewBox="0 0 15 10" fill="currentColor">
                <rect x="0" y="6" width="2.4" height="4" rx=".7" />
                <rect x="3.4" y="4.4" width="2.4" height="5.6" rx=".7" />
                <rect x="6.8" y="2.8" width="2.4" height="7.2" rx=".7" />
                <rect x="10.2" y="1.2" width="2.4" height="8.8" rx=".7" />
              </svg>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M1.2 3.3a8.2 8.2 0 0 1 11.6 0" />
                <path d="M3.5 5.7a5 5 0 0 1 7 0" />
                <path d="M5.8 8a1.8 1.8 0 0 1 2.4 0" />
              </svg>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <rect x=".6" y=".6" width="16.2" height="8.8" rx="2.4" stroke="currentColor" strokeWidth="1.2" opacity=".55" />
                <rect x="2.2" y="2.2" width="12.4" height="5.6" rx="1.4" fill="currentColor" />
                <path d="M18.2 3.4v3.2a1.7 1.7 0 0 0 0-3.2Z" fill="currentColor" opacity=".55" />
              </svg>
            </span>
          </div>

          <div className="tani-top">
            <div className="tani-brand">
              <span className="tani-brand-mark"><Leaf size={13} strokeWidth={2.2} /></span>
              Tani Pintar
            </div>
            <span className="tani-bell"><Bell size={15} strokeWidth={1.8} /><i /></span>
          </div>

          <div className="tani-loc">
            <MapPin size={11} strokeWidth={2} />
            Sleman, Yogyakarta
            <ChevronDown size={11} strokeWidth={2} />
          </div>

          <h1>Good morning, Budi</h1>
          <p className="tani-sub">Your rice field is looking healthy today.</p>

          <div className="tani-weather">
            <div className="tani-weather-main">
              <span className="tani-weather-icon"><CloudSun size={20} strokeWidth={1.7} /></span>
              <div>
                <b>28°</b>
                <span>Partly cloudy</span>
              </div>
            </div>
            <span className="tani-weather-line" />
            <div className="tani-moist">
              <div className="tani-ring">
                <svg viewBox="0 0 44 44">
                  <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="4" />
                  <circle cx="22" cy="22" r="18" fill="none" stroke="#c4dc52" strokeWidth="4" strokeLinecap="round" strokeDasharray="113" strokeDashoffset="43" transform="rotate(-90 22 22)" />
                </svg>
                <b>62%</b>
              </div>
              <span>Soil moisture</span>
            </div>
          </div>
        </div>

        <div className="tani-body">
          <div className="tani-sec">
            <b>My fields</b>
            <span>See all <ChevronRight size={10} strokeWidth={2.2} /></span>
          </div>
          <div className="tani-fields">
            <div className="tani-field">
              <div className="tani-field-top">
                <span className="tani-field-icon rice"><Wheat size={15} strokeWidth={1.8} /></span>
                <span className="tani-pill healthy">Healthy</span>
              </div>
              <b>Rice Field A</b>
              <span>2.4 ha · IR64</span>
              <div className="tani-bar"><i style={{ width: "78%" }} /></div>
            </div>
            <div className="tani-field">
              <div className="tani-field-top">
                <span className="tani-field-icon veg"><Carrot size={15} strokeWidth={1.8} /></span>
                <span className="tani-pill warn">Needs water</span>
              </div>
              <b>Vegetable Plot</b>
              <span>0.8 ha · Chili</span>
              <div className="tani-bar"><i style={{ width: "42%" }} /></div>
            </div>
          </div>

          <div className="tani-sec">
            <b>Tasks today</b>
            <span>2 left</span>
          </div>
          <div className="tani-tasks">
            <div className="tani-task done">
              <span className="tani-check"><Check size={10} strokeWidth={3} /></span>
              <div><b>Irrigate Block B</b><span>06:00 · Rice Field A</span></div>
              <em>Done</em>
            </div>
            <div className="tani-task">
              <span className="tani-check" />
              <div><b>Check pest traps</b><span>09:00 · Vegetable Plot</span></div>
              <em>09:00</em>
            </div>
            <div className="tani-task">
              <span className="tani-check" />
              <div><b>Fertilize seedlings</b><span>15:00 · Nursery</span></div>
              <em>15:00</em>
            </div>
          </div>

          <div className="tani-market">
            <div className="tani-market-copy">
              <span>Rice price today</span>
              <b>Rp 12.400 <em>/kg</em></b>
            </div>
            <div className="tani-market-right">
              <span className="tani-up">+3.2%</span>
              <svg className="tani-spark" viewBox="0 0 70 26" preserveAspectRatio="none">
                <path d="M0 20 L10 17 L20 18 L30 12 L40 14 L50 8 L60 10 L70 4 V26 H0Z" fill="rgba(174,198,67,.18)" />
                <path d="M0 20 L10 17 L20 18 L30 12 L40 14 L50 8 L60 10 L70 4" fill="none" stroke="#6f9a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="tani-insight">
            <span className="tani-insight-icon"><Sparkles size={13} strokeWidth={1.9} /></span>
            <div>
              <b>Smart insight</b>
              <p>Rain expected Thursday. Delay fertilizing by one day.</p>
            </div>
            <ChevronRight className="tani-insight-arrow" size={12} strokeWidth={2} />
          </div>
        </div>

        <div className="tani-nav">
          <div className="tani-nav-item active"><House size={18} strokeWidth={1.8} /><span>Home</span></div>
          <div className="tani-nav-item"><Sprout size={18} strokeWidth={1.8} /><span>Fields</span></div>
          <div className="tani-nav-item"><ListChecks size={18} strokeWidth={1.8} /><span>Tasks</span></div>
          <div className="tani-nav-item"><Store size={18} strokeWidth={1.8} /><span>Market</span></div>
          <div className="tani-nav-item"><UserRound size={18} strokeWidth={1.8} /><span>Profile</span></div>
          <i className="tani-home" />
        </div>
      </div>
      <style>{TANI_CSS}</style>
    </div>
  )
}
