# Overstory — Studio Landing (standalone)

Salinan mandiri dari komponen **Overstory Studio Landing** yang tampil di
`http://localhost:5173/#overstory-studio-landing`, dipisahkan dari repo
authoring `21stdev-my-components` supaya bisa dijalankan, diedit, dan di-deploy
sendiri.

- Asal: `21stdev-my-components/components/overstory-studio-landing/`
- Penulis asli: [@kedhareswer](https://21st.dev/@kedhareswer) — https://21st.dev/@kedhareswer
- Branch GitHub upstream: https://github.com/Kedhareswer/21stdev-my-components

## Jalan cepat

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # dist/ siap deploy
npm run preview  # cek hasil build
npm run check    # TypeScript saja
```

Dependency hanya **react**, **react-dom**, dan **gsap** (GSAP + ScrollTrigger).
Tidak butuh Tailwind, tidak ada aset yang di-fetch saat runtime.

## Struktur

```
index.html
vite.config.ts
tsconfig.json
src/
  main.tsx                  # React root
  App.tsx                   # cara pakai komponen (edit di sini)
  index.css                 # reset minimal, jangan tambah gaya global
  OverstoryStudioLanding.tsx  # komponen asli, tidak diubah (2.881 baris)
```

`OverstoryStudioLanding.tsx` sengaja **tidak** dimodifikasi supaya gampang
di-update kalau upstream berubah. Semua kustomisasi lewat props di `App.tsx`.

## Ringkasan props

| Prop | Default | Keterangan |
|---|---|---|
| `brand` | `"Overstory"` | Nama di nav & footer |
| `email` | `"hello@overstory.studio"` | Alamat di footer/CTA |
| `currency` | `"$"` | Simbol harga |
| `links` | Work, Services, Process, Pricing, FAQ | `{ label, href }[]`; `#work`, `#services`, `#process`, `#pricing`, `#faq`, `#contact` scroll in-page |
| `status` | `null` | Pill kecil di atas headline; `null` menyembunyikan |
| `hero` | lihat `DEFAULT_HERO` | `{ lead, words, tail, trusted, cue }` — `words` berganti otomatis |
| `logos` | 5 logo | `{ name, mark?, type? }` |
| `manifesto` | teks bawaan | `{ kicker, text }`; `null` menghapus section |
| `stats` | 4 angka | `{ value, prefix?, suffix?, decimals?, label }[]`; `null` menghapus |
| `services` | 5 layanan | `{ kicker, title, text, items }`; tiap item `{ title, text, tags, time, art? }` |
| `work` | 4 case study | `{ kicker, title, items, next }`; item `{ client, mark, kind, title, metric, metricLabel, year, mock, tint }` |
| `process` | 4 tahap | `{ kicker, title, steps }`; step `{ name, when, title, text }` |
| `quotes` | 3 kutipan | `{ quote, name, role, mark? }[]` |
| `pricing` | 3 paket | `{ kicker, title, text, plans, quarterlyNote }` |
| `faq` | daftar bawaan | `{ kicker, title, text, items: { q, a }[] }` |
| `cta` | bawaan | `{ title, text, button }` |
| `footer` | bawaan | `{ columns, city, timeZone, note }` |
| `season` | `"summer"` | `"summer" \| "autumn" \| "blossom"` — warna daun |
| `seed` | `7` | Seed kanopi hasil generate; ganti untuk bentuk pohon lain |
| `photo` | foto ter-embed | URL/data-URI foto langit; `null` = pakai kanopi generate |
| `theme` | `"auto"` | `"auto"` ikut class `.dark` di `<html>`, atau paksa `"light"`/`"dark"` |
| `themeToggle` | `true` | Tampilkan tombol siang/senja di nav |
| `height` | `"100svh"` | Tinggi stage hero & finale — harus panjang pasti |
| `onBook` | — | `(from: string) => void`, dipanggil semua tombol "book a call" |
| `onSubscribe` | — | `(email) => unknown`; `return false`/throw untuk state error |
| `className` | `""` | Ditambahkan ke root komponen |

Semua section bisa dihapus dengan mengirim `null` (mis. `pricing={null}`).

## Contoh: versi autumn

```tsx
<OverstoryStudioLanding
  brand="Understory"
  season="autumn"
  seed={23}
  status="Two seats left for the winter cohort"
  hero={{ lead: "Design and Eng For", words: ["Seed", "Series A", "B2B", "AI"], tail: "Startups." }}
  email="hello@understory.studio"
  footer={{ city: "Montreal", timeZone: "America/Toronto", note: "Made under falling leaves." }}
/>
```

## Catatan teknis

- **416 KB** file komponen hampir seluruhnya foto kanopi yang di-embed sebagai
  base64 (`OVS_PHOTO`). Kalau mau bundle kecil, kirim `photo="/canopy.jpg"`
  (taruh di `public/`) atau `photo={null}` untuk kanopi yang digambar di canvas.
- Scroll memakai **GSAP ScrollTrigger** di atas CSS `sticky` — tidak ada
  `position: fixed` atau re-parent DOM, jadi aman di dalam layout apa pun.
  Sediakan satu scroll container normal (body).
- `height` wajib berupa panjang pasti (`100svh`, `900px`), bukan persentase.
- Mode gelap: tambahkan/lepaskan class `dark` di `<html>`; komponen membacanya
  saat `theme="auto"`.
- Semua teks dan ilustrasi digambar di dalam file; tidak ada request jaringan.

## Lisensi & atribusi

Kode aslinya dipublikasikan bebas dipakai di 21st.dev, tetapi repo upstream
**tidak menyertakan file LICENSE**. Perlakukan sebagai "gratis dengan atribusi":
boleh dipakai & dimodifikasi, jangan diklaim sebagai karya sendiri atau dijual
ulang sebagai komponen berlisensi. Cantumkan tautan ke
https://21st.dev/@kedhareswer.
