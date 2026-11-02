import * as React from "react"
import {
  ChevronRight,
  House,
  Leaf,
  ListChecks,
  Search,
  ShoppingBag,
  Sprout,
  Store,
  UserRound,
} from "lucide-react"

const SCREEN_W = 390
const SCREEN_H = 844

const CATEGORIES = ["Semua", "Benih", "Pupuk", "Alat", "Panen"]

const PRODUCTS = [
  { name: "Benih Padi IR64", meta: "5 kg · bersertifikat", price: "Rp 32.000", rating: "4.9", tag: "Benih", image: "/images/farming/crop-management.jpg" },
  { name: "Pupuk Organik", meta: "10 kg · kompos", price: "Rp 45.000", rating: "4.8", tag: "Pupuk", image: "/images/farming/crop-protection.jpg" },
  { name: "Bibit Cabai Rawit", meta: "1 pack · 50 bibit", price: "Rp 18.000", rating: "4.7", tag: "Benih", image: "/images/farming/farmer-support.jpg" },
  { name: "Sayur Segar Pakcoy", meta: "1 kg · panen pagi", price: "Rp 12.500", rating: "5.0", tag: "Panen", image: "/images/farming/soil-health.jpg" },
]

const TPROD_CSS = `
.tprod-wrap{position:relative;width:100%;height:100%;overflow:hidden;background:#eef3dd}
.tprod-screen{position:relative;width:${SCREEN_W}px;height:${SCREEN_H}px;transform-origin:top left;display:flex;flex-direction:column;overflow:hidden;background:#f1f5e3;color:#10150d;font-family:var(--ovs-sans,"Inter","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);-webkit-font-smoothing:antialiased}
.tprod-screen *{box-sizing:border-box}
.tprod-hero{position:relative;flex:none;padding:40px 20px 20px;background:radial-gradient(110% 80% at 88% 0%,rgba(196,220,82,.22),rgba(196,220,82,0) 58%),linear-gradient(160deg,#0f2213 0%,#1b3a1c 62%,#204a1e 100%);color:#f2f6e7;border-radius:0 0 26px 26px;overflow:hidden}
.tprod-hero::after{content:"";position:absolute;left:-70px;bottom:-120px;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,rgba(196,220,82,.12),rgba(196,220,82,0) 70%);pointer-events:none}
.tprod-status{position:relative;display:flex;align-items:center;justify-content:space-between;font-size:11.5px;font-weight:600;letter-spacing:.02em;color:#f2f6e7}
.tprod-status-icons{display:flex;align-items:center;gap:5px;opacity:.95}
.tprod-head{position:relative;display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-top:16px}
.tprod-eyebrow{display:block;font-size:9px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#c4dc52}
.tprod-head h1{position:relative;margin:4px 0 0;font-size:21px;line-height:1.1;letter-spacing:-.035em;font-weight:500;color:#f4f6f0}
.tprod-cart{position:relative;width:34px;height:34px;border-radius:12px;display:grid;place-items:center;flex:none;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.14);color:#eef3dd}
.tprod-cart i{position:absolute;top:-3px;right:-3px;min-width:15px;height:15px;padding:0 3px;border-radius:999px;display:grid;place-items:center;background:#c4dc52;color:#10150d;font-size:8px;font-weight:700;font-style:normal;border:1.5px solid #172a1a}
.tprod-search{position:relative;display:flex;align-items:center;gap:8px;margin-top:16px;padding:10px 12px;border-radius:13px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.13);color:rgba(244,246,240,.62);font-size:10px}
.tprod-chips{flex:none;display:flex;gap:7px;padding:14px 20px 0;overflow:hidden}
.tprod-chip{font-size:9.5px;font-weight:600;letter-spacing:-.01em;padding:6px 11px;border-radius:999px;background:#e6ecd2;border:1px solid #d6e0bb;color:#4b5546;white-space:nowrap}
.tprod-chip.active{background:#2f6a25;border-color:#2f6a25;color:#f2f6e7}
.tprod-body{flex:1;min-height:0;display:flex;flex-direction:column;gap:12px;padding:14px 20px 0;overflow:hidden}
.tprod-promo{position:relative;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:13px 14px;border-radius:17px;background:linear-gradient(120deg,#dbe9b4 0%,#c8dc95 100%);border:1px solid #bcd584;overflow:hidden}
.tprod-promo::after{content:"";position:absolute;right:-24px;top:-30px;width:110px;height:110px;border-radius:50%;background:rgba(47,106,37,.09)}
.tprod-promo b{position:relative;display:block;font-size:11.5px;font-weight:600;letter-spacing:-.02em;color:#1e3a14}
.tprod-promo p{position:relative;margin:2px 0 0;font-size:9px;color:#3f5a2a}
.tprod-promo-cta{position:relative;display:flex;align-items:center;gap:2px;flex:none;padding:6px 9px;border-radius:999px;background:#2f6a25;color:#f2f6e7;font-size:8.5px;font-weight:600}
.tprod-sec{display:flex;align-items:center;justify-content:space-between;gap:10px}
.tprod-sec b{font-size:12.5px;font-weight:600;letter-spacing:-.02em}
.tprod-sec span{display:flex;align-items:center;gap:2px;font-size:9.5px;font-weight:500;color:#5f7a4a}
.tprod-grid{display:grid;grid-template-columns:1fr 1fr;gap:11px}
.tprod-card{padding:9px 10px 10px;border-radius:16px;background:#fff;border:1px solid rgba(47,106,37,.1);box-shadow:0 10px 22px -18px rgba(10,32,8,.45)}
.tprod-thumb{position:relative;height:80px;border-radius:12px;margin-bottom:8px;overflow:hidden;background:linear-gradient(140deg,#dce9bd,#c3d996)}
.tprod-thumb img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.tprod-thumb::after{content:"";position:absolute;inset:0;background:linear-gradient(165deg,rgba(47,106,37,.18) 0%,rgba(47,106,37,.04) 48%,rgba(20,48,14,.34) 100%);pointer-events:none}
.tprod-tag{position:absolute;left:7px;top:7px;z-index:1;padding:2.5px 6px;border-radius:999px;background:rgba(255,255,255,.9);color:#2f6a25;font-size:7.5px;font-weight:700;letter-spacing:.02em}
.tprod-card b{display:block;font-size:10.5px;font-weight:600;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tprod-card>span{display:block;margin-top:2px;font-size:8.5px;color:#6b7565}
.tprod-foot{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:7px}
.tprod-foot strong{font-size:10.5px;font-weight:700;letter-spacing:-.02em;color:#2f6a25}
.tprod-foot em{font-style:normal;font-size:8px;font-weight:600;color:#5f7a4a;background:#eef3dd;padding:2.5px 5px;border-radius:999px}
.tprod-ship{display:flex;align-items:center;gap:9px;padding:10px 12px;border-radius:14px;background:#e5eecd;border:1px solid #d2e0b0}
.tprod-ship-icon{width:26px;height:26px;border-radius:9px;display:grid;place-items:center;flex:none;background:#fff;color:#2f6a25;box-shadow:0 2px 8px rgba(47,106,37,.12)}
.tprod-ship b{display:block;font-size:9.5px;font-weight:600;letter-spacing:-.01em;color:#1e3a14}
.tprod-ship p{margin:1px 0 0;font-size:8.5px;line-height:1.3;color:#4b5546}
.tprod-nav{position:relative;flex:none;height:82px;display:flex;align-items:flex-start;justify-content:space-between;padding:10px 18px 0;background:#fff;border-top:1px solid rgba(16,21,13,.08);z-index:3}
.tprod-nav-item{display:flex;flex-direction:column;align-items:center;gap:4px;min-width:44px;font-size:8px;font-weight:500;color:#8a9484}
.tprod-nav-item.active{color:#10150d}
.tprod-nav-item.active svg{color:#2f6a25;background:#e6efca;border-radius:9px;padding:3px;box-sizing:content-box}
.tprod-home{position:absolute;left:50%;bottom:7px;transform:translateX(-50%);width:102px;height:4px;border-radius:3px;background:#10150d;opacity:.82}
`

export function TaniProductsScreen() {
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
    <div className="tprod-wrap" ref={wrap} aria-hidden="true">
      <div className="tprod-screen" style={{ transform: `scale(${scale})` }}>
        <div className="tprod-hero">
          <div className="tprod-status">
            <span>9:41</span>
            <span className="tprod-status-icons">
              <svg width="15" height="10" viewBox="0 0 15 10" fill="currentColor">
                <rect x="0" y="6" width="2.4" height="4" rx=".7" />
                <rect x="3.4" y="4.4" width="2.4" height="5.6" rx=".7" />
                <rect x="6.8" y="2.8" width="2.4" height="7.2" rx=".7" />
                <rect x="10.2" y="1.2" width="2.4" height="8.8" rx=".7" />
              </svg>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <rect x=".6" y=".6" width="16.2" height="8.8" rx="2.4" stroke="currentColor" strokeWidth="1.2" opacity=".55" />
                <rect x="2.2" y="2.2" width="12.4" height="5.6" rx="1.4" fill="currentColor" />
                <path d="M18.2 3.4v3.2a1.7 1.7 0 0 0 0-3.2Z" fill="currentColor" opacity=".55" />
              </svg>
            </span>
          </div>

          <div className="tprod-head">
            <div>
              <span className="tprod-eyebrow">Toko Tani</span>
              <h1>Produk pertanian</h1>
            </div>
            <span className="tprod-cart"><ShoppingBag size={15} strokeWidth={1.8} /><i>3</i></span>
          </div>

          <div className="tprod-search">
            <Search size={13} strokeWidth={2} />
            <span>Cari benih, pupuk, hasil panen…</span>
          </div>
        </div>

        <div className="tprod-chips">
          {CATEGORIES.map((c, i) => (
            <span key={c} className={"tprod-chip" + (i === 0 ? " active" : "")}>{c}</span>
          ))}
        </div>

        <div className="tprod-body">
          <div className="tprod-promo">
            <div>
              <b>Panen raya</b>
              <p>Diskon 20% untuk benih padi pilihan</p>
            </div>
            <span className="tprod-promo-cta">Belanja <ChevronRight size={10} strokeWidth={2.5} /></span>
          </div>

          <div className="tprod-sec">
            <b>Produk populer</b>
            <span>Lihat semua <ChevronRight size={10} strokeWidth={2.2} /></span>
          </div>

          <div className="tprod-grid">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="tprod-card">
                <div className="tprod-thumb">
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <span className="tprod-tag">{p.tag}</span>
                </div>
                <b>{p.name}</b>
                <span>{p.meta}</span>
                <div className="tprod-foot">
                  <strong>{p.price}</strong>
                  <em>{p.rating} ★</em>
                </div>
              </div>
            ))}
          </div>

          <div className="tprod-ship">
            <span className="tprod-ship-icon"><Leaf size={13} strokeWidth={1.9} /></span>
            <div>
              <b>Gratis ongkir</b>
              <p>Pesanan di atas Rp 150.000 · area Sleman</p>
            </div>
          </div>
        </div>

        <div className="tprod-nav">
          <div className="tprod-nav-item"><House size={18} strokeWidth={1.8} /><span>Home</span></div>
          <div className="tprod-nav-item"><Sprout size={18} strokeWidth={1.8} /><span>Fields</span></div>
          <div className="tprod-nav-item"><ListChecks size={18} strokeWidth={1.8} /><span>Tasks</span></div>
          <div className="tprod-nav-item active"><Store size={18} strokeWidth={1.8} /><span>Market</span></div>
          <div className="tprod-nav-item"><UserRound size={18} strokeWidth={1.8} /><span>Profile</span></div>
          <i className="tprod-home" />
        </div>
      </div>
      <style>{TPROD_CSS}</style>
    </div>
  )
}
