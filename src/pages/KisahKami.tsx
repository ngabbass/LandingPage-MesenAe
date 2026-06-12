import React from 'react';
import { Compass, Users, CheckCircle2 } from 'lucide-react';
import PageHeader from './components/PageHeader';

export default function KisahKami({ theme, toggleTheme }: { theme: 'dark' | 'light'; toggleTheme: () => void }) {
  const waLink = `https://wa.me/${import.meta.env.VITE_WA_NUMBER}?text=Halo%2C%20saya%20tertarik%20dengan%20Mesen.Ae%21`;

  return (
    <div className="min-h-screen bg-bg-base text-text-primary transition-colors duration-300 font-sans pb-16 pt-24">
      <PageHeader theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section - Compact */}
      <section className="relative py-12 border-b border-border bg-gradient-to-b from-bg-card/20 to-transparent overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-brand-amber/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[60px] -z-10 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-[11px] font-bold tracking-widest uppercase mb-6 text-brand-blue">
            Kisah Kami
          </div>
          <h1 className="font-display text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.1] tracking-tight mb-4">
            Menjembatani UMKM <br className="hidden sm:block"/> dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-emerald">Teknologi Modern</span>
          </h1>
          <p className="text-[17px] sm:text-[19px] text-text-secondary leading-relaxed max-w-[600px] mx-auto">
            Sebuah dedikasi dari pemuda daerah untuk mendigitalisasi bisnis kuliner lokal melalui sistem operasi yang praktis, cepat, dan terjangkau.
          </p>
        </div>
      </section>

      {/* Main Content - Reduced Spacing */}
      <main className="max-w-5xl mx-auto px-6 pt-12">
        
        {/* Cerita Awal - Split Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-7 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Dari Trenggalek Berkarya di Ponorogo</h2>
            <p className="text-[17px] text-text-secondary leading-relaxed mb-4">
              Perkenalkan, saya Ahmad Basith. Seorang pria asal Trenggalek yang menempuh pendidikan di bidang pemerintahan, namun kini merajut karya dan pengabdian di Ponorogo. 
            </p>
            <p className="text-[17px] text-text-secondary leading-relaxed mb-4">
              Dunia teknologi bukanlah hal yang baru bagi saya. Sejak duduk di bangku SMA, ketertarikan saya pada dunia pemrograman sudah tumbuh dengan mulai mempelajari logika <strong>JavaScript sederhana</strong>. Meskipun jalur pendidikan formal mengarahkan saya pada ilmu pemerintahan, <em>passion</em> saya terhadap dunia <em>software engineering</em> tetap menyala dan terus saya pelajari secara otodidak.
            </p>
            <p className="text-[17px] text-text-secondary leading-relaxed">
              Tinggal di Ponorogo membuka mata saya melihat realita UMKM lokal. Saya sering melihat restoran, kedai kopi, dan usaha kuliner yang masih terjebak dengan <strong>sistem kasir konvensional dan pendataan manual</strong>. Mereka belum mengadopsi sistem <em>self-order</em> modern yang sebenarnya dapat sangat memudahkan pekerjaan kasir dan mencegah antrean panjang. Dari keresahan itulah, <strong>Mesen.Ae</strong> lahir.
            </p>
          </div>
          
          {/* Highlight Box */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Compass className="text-brand-amber w-5 h-5" /> Misi Kebermanfaatan
              </h3>
              <p className="text-[16px] text-text-secondary leading-relaxed">
                Berangkat dari membantu UMKM di Ponorogo, saya memiliki visi besar agar platform ini bisa diadopsi secara luas. Membawa manfaat seluas-luasnya untuk kemajuan efisiensi bisnis lokal di seluruh Indonesia.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Users className="text-brand-blue w-5 h-5" /> Siap Berkolaborasi
              </h3>
              <p className="text-[16px] text-text-secondary leading-relaxed">
                Platform ini dibangun bukan hanya sebagai produk, tapi juga sebagai ruang kolaborasi. Saya selalu terbuka untuk berdiskusi, belajar, dan bersinergi dengan para praktisi untuk memajukan ekosistem ini.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section (Minimalist, Authentic SVGs, Highly Interactive) */}
        <section className="mb-12 border-t border-border pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Tech yang Saya Kuasai</h2>
            <p className="text-[17px] text-text-secondary leading-relaxed">
              Keahlian teknologi modern yang saya pelajari dan gunakan untuk membangun ekosistem digital yang kokoh dan interaktif.
            </p>
          </div>

          <div className="grid grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            
            {/* JavaScript */}
            <div className="group relative bg-bg-card border border-border rounded-2xl sm:rounded-full aspect-square p-2.5 sm:p-5 hover:border-[#F7DF1E]/50 hover:shadow-[0_8px_30px_rgba(247,223,30,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#F7DF1E]/0 to-[#F7DF1E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-6 h-6 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm rounded-[4px] overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-full h-full">
                  <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
                  <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
                </svg>
              </div>
              <div className="text-[9px] min-[360px]:text-[10px] sm:text-[13px] font-bold text-text-primary relative z-10 group-hover:text-[#F7DF1E] transition-colors">JavaScript</div>
            </div>

            {/* TypeScript */}
            <div className="group relative bg-bg-card border border-border rounded-2xl sm:rounded-full aspect-square p-2.5 sm:p-5 hover:border-[#3178C6]/50 hover:shadow-[0_8px_30px_rgba(49,120,198,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#3178C6]/0 to-[#3178C6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-6 h-6 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm rounded-[4px] overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-full h-full">
                  <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/>
                  <path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"/>
                </svg>
              </div>
              <div className="text-[9px] min-[360px]:text-[10px] sm:text-[13px] font-bold text-text-primary relative z-10 group-hover:text-[#3178C6] transition-colors">TypeScript</div>
            </div>

            {/* React */}
            <div className="group relative bg-bg-card border border-border rounded-2xl sm:rounded-full aspect-square p-2.5 sm:p-5 hover:border-[#61DAFB]/50 hover:shadow-[0_8px_30px_rgba(97,218,251,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#61DAFB]/0 to-[#61DAFB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-6 h-6 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 relative z-10 group-hover:scale-110 group-hover:animate-[spin_10s_linear_infinite] transition-transform duration-300 drop-shadow-sm">
                <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                  <g stroke="#61dafb" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
              </div>
              <div className="text-[9px] min-[360px]:text-[10px] sm:text-[13px] font-bold text-text-primary relative z-10 group-hover:text-[#61DAFB] transition-colors">React</div>
            </div>

            {/* Vite */}
            <div className="group relative bg-bg-card border border-border rounded-2xl sm:rounded-full aspect-square p-2.5 sm:p-5 hover:border-[#bd34fe]/50 hover:shadow-[0_8px_30px_rgba(189,52,254,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#bd34fe]/0 to-[#bd34fe]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-6 h-6 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-full h-full">
                  <defs>
                    <linearGradient id="viteGradientA" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#41d1ff"/>
                      <stop offset="1" stopColor="#bd34fe"/>
                    </linearGradient>
                    <linearGradient id="viteGradientB" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#ffea83"/>
                      <stop offset=".083" stopColor="#ffdd35"/>
                      <stop offset="1" stopColor="#ffa800"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#viteGradientA)" d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"/>
                  <path fill="url(#viteGradientB)" d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"/>
                </svg>
              </div>
              <div className="text-[9px] min-[360px]:text-[10px] sm:text-[13px] font-bold text-text-primary relative z-10 group-hover:text-[#bd34fe] transition-colors">Vite</div>
            </div>

            {/* Next.js */}
            <div className="group relative bg-bg-card border border-border rounded-2xl sm:rounded-full aspect-square p-2.5 sm:p-5 hover:border-slate-800/50 dark:hover:border-white/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-500/0 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-6 h-6 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-full h-full fill-current text-black dark:text-white">
                  <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
                </svg>
              </div>
              <div className="text-[9px] min-[360px]:text-[10px] sm:text-[13px] font-bold text-text-primary relative z-10 group-hover:text-black dark:group-hover:text-white transition-colors">Next.js</div>
            </div>

            {/* Laravel */}
            <div className="group relative bg-bg-card border border-border rounded-2xl sm:rounded-full aspect-square p-2.5 sm:p-5 hover:border-[#FF2D20]/50 hover:shadow-[0_8px_30px_rgba(255,45,32,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF2D20]/0 to-[#FF2D20]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-6 h-6 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-full h-full">
                  <g id="surface1">
                    <path style={{ stroke: "none", fillRule: "nonzero", fill: "rgb(94.117647%,32.54902%,25.098039%)", fillOpacity: 1 }} d="M 26.027344 0.136719 C 25.824219 0.214844 20.085938 3.484375 13.28125 7.394531 C 5.035156 12.136719 0.800781 14.632812 0.574219 14.867188 C 0.394531 15.070312 0.191406 15.421875 0.128906 15.644531 C -0.0429688 16.21875 -0.0546875 100.347656 0.117188 100.953125 C 0.179688 101.1875 0.382812 101.53125 0.566406 101.722656 C 1.011719 102.191406 50.238281 130.496094 50.835938 130.632812 C 51.113281 130.699219 51.425781 130.6875 51.734375 130.601562 C 52.40625 130.433594 101.503906 102.191406 101.941406 101.730469 C 102.121094 101.53125 102.324219 101.1875 102.390625 100.953125 C 102.476562 100.675781 102.507812 96.277344 102.507812 87.015625 L 102.507812 73.480469 L 114.476562 66.605469 C 125.761719 60.117188 126.453125 59.710938 126.742188 59.265625 L 127.039062 58.785156 L 127.039062 44.207031 C 127.039062 28.335938 127.070312 29.230469 126.441406 28.65625 C 126.273438 28.507812 120.523438 25.152344 113.652344 21.195312 L 101.171875 14.015625 L 99.785156 14.015625 L 87.574219 21.027344 C 80.851562 24.894531 75.136719 28.199219 74.859375 28.378906 C 74.582031 28.5625 74.25 28.902344 74.113281 29.148438 L 73.867188 29.574219 L 73.8125 43.308594 L 73.761719 57.046875 L 63.679688 62.855469 C 58.132812 66.042969 53.515625 68.683594 53.417969 68.707031 C 53.238281 68.757812 53.226562 67.449219 53.226562 42.203125 L 53.226562 15.632812 L 52.960938 15.175781 C 52.628906 14.621094 54.121094 15.507812 39.136719 6.894531 C 26.570312 -0.332031 26.871094 -0.179688 26.027344 0.136719 Z M 37.578125 10.65625 C 42.835938 13.671875 47.136719 16.167969 47.136719 16.199219 C 47.136719 16.230469 42.527344 18.894531 36.894531 22.132812 L 26.644531 28.015625 L 16.414062 22.132812 C 10.792969 18.894531 6.1875 16.230469 6.1875 16.199219 C 6.1875 16.167969 10.785156 13.503906 16.40625 10.273438 L 26.613281 4.402344 L 27.316406 4.785156 C 27.710938 5 32.332031 7.640625 37.578125 10.65625 Z M 110.730469 24.191406 C 116.265625 27.378906 120.84375 30.011719 120.886719 30.054688 C 121.003906 30.160156 100.703125 41.828125 100.425781 41.816406 C 100.148438 41.808594 80.097656 30.246094 80.105469 30.105469 C 80.117188 29.945312 100.289062 18.339844 100.492188 18.371094 C 100.585938 18.394531 105.195312 21.015625 110.730469 24.191406 Z M 14.828125 25.875 L 24.585938 31.492188 L 24.640625 59.304688 L 24.691406 87.121094 L 24.929688 87.496094 C 25.054688 87.695312 25.289062 87.964844 25.460938 88.089844 C 25.621094 88.207031 31.050781 91.300781 37.523438 94.953125 L 49.28125 101.59375 L 49.28125 113.359375 C 49.28125 119.816406 49.238281 125.113281 49.183594 125.113281 C 49.140625 125.113281 38.976562 119.296875 26.601562 112.175781 L 4.105469 99.238281 L 4.074219 59.464844 L 4.054688 19.703125 L 4.554688 19.980469 C 4.84375 20.132812 9.460938 22.785156 14.828125 25.875 Z M 49.28125 45.453125 L 49.28125 71.082031 L 48.886719 71.339844 C 48.351562 71.679688 28.8125 82.910156 28.746094 82.910156 C 28.714844 82.910156 28.691406 71.339844 28.691406 57.195312 L 28.703125 31.492188 L 38.910156 25.621094 C 44.523438 22.390625 49.152344 19.769531 49.207031 19.789062 C 49.246094 19.8125 49.28125 31.363281 49.28125 45.453125 Z M 88.222656 39.558594 L 98.453125 45.441406 L 98.453125 57.101562 C 98.453125 68.164062 98.441406 68.757812 98.273438 68.695312 C 98.164062 68.652344 93.535156 66 87.980469 62.800781 L 77.867188 56.992188 L 77.867188 45.335938 C 77.867188 38.917969 77.898438 33.675781 77.929688 33.675781 C 77.972656 33.675781 82.601562 36.320312 88.222656 39.558594 Z M 123.09375 45.261719 C 123.09375 51.644531 123.050781 56.910156 123.007812 56.960938 C 122.933594 57.078125 102.699219 68.738281 102.570312 68.738281 C 102.539062 68.738281 102.507812 63.496094 102.507812 57.078125 L 102.507812 45.421875 L 112.714844 39.546875 C 118.335938 36.320312 122.964844 33.675781 123.007812 33.675781 C 123.0625 33.675781 123.09375 38.886719 123.09375 45.261719 Z M 86.230469 66.46875 C 94.835938 71.421875 96.320312 72.308594 96.171875 72.425781 C 96.074219 72.488281 92.8125 74.363281 88.929688 76.582031 C 85.046875 78.796875 74.988281 84.53125 66.570312 89.328125 L 51.273438 98.054688 L 50.785156 97.789062 C 47.863281 96.191406 30.910156 86.546875 30.910156 86.472656 C 30.902344 86.3125 75.765625 60.53125 75.945312 60.597656 C 76.03125 60.628906 80.660156 63.269531 86.230469 66.46875 Z M 98.433594 87.558594 L 98.398438 99.238281 L 75.914062 112.175781 C 63.542969 119.296875 53.375 125.113281 53.324219 125.113281 C 53.269531 125.113281 53.226562 120.359375 53.226562 113.359375 L 53.226562 101.59375 L 75.765625 88.742188 C 88.148438 81.675781 98.324219 75.890625 98.378906 75.878906 C 98.421875 75.878906 98.441406 81.132812 98.433594 87.558594 Z M 98.433594 87.558594 "/>
                  </g>
                </svg>
              </div>
              <div className="text-[9px] min-[360px]:text-[10px] sm:text-[13px] font-bold text-text-primary relative z-10 group-hover:text-[#FF2D20] transition-colors">Laravel</div>
            </div>

            {/* Python */}
            <div className="group relative bg-bg-card border border-border rounded-2xl sm:rounded-full aspect-square p-2.5 sm:p-5 hover:border-[#3776AB]/50 hover:shadow-[0_8px_30px_rgba(55,118,171,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#3776AB]/0 to-[#3776AB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-6 h-6 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-full h-full">
                  <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/></linearGradient>
                  <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/></linearGradient>
                  <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
                  <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
                  <radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"/><stop offset="1" stopColor="#7F7F7F" stopOpacity="0"/></radialGradient>
                  <path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"/>
                </svg>
              </div>
              <div className="text-[9px] min-[360px]:text-[10px] sm:text-[13px] font-bold text-text-primary relative z-10 group-hover:text-[#3776AB] transition-colors">Python</div>
            </div>

            {/* Flutter */}
            <div className="group relative bg-bg-card border border-border rounded-2xl sm:rounded-full aspect-square p-2.5 sm:p-5 hover:border-[#02569B]/50 hover:shadow-[0_8px_30px_rgba(2,86,155,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#02569B]/0 to-[#02569B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-6 h-6 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-full h-full">
                  <g fill="#3FB6D3">
                    <path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/>
                  </g>
                  <path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"/>
                  <path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"/>
                  <linearGradient id="flutterGradientA" gradientUnits="userSpaceOnUse" x1="59.365" y1="116.36" x2="86.825" y2="99.399">
                    <stop offset="0" stopColor="#1b4e94"/>
                    <stop offset=".63" stopColor="#1a5497"/>
                    <stop offset="1" stopColor="#195a9b"/>
                  </linearGradient>
                  <path fill="url(#flutterGradientA)" d="M61.6 113.1l30.8-8.4-10.8-10.8z"/>
                </svg>
              </div>
              <div className="text-[9px] min-[360px]:text-[10px] sm:text-[13px] font-bold text-text-primary relative z-10 group-hover:text-[#02569B] transition-colors">Flutter</div>
            </div>

          </div>
        </section>

        {/* Timeline Perjalanan - Compact List */}
        <section className="mb-12 border-t border-border pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">Jejak Langkah & Proses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-bg-card transition-colors">
              <div className="mt-1 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
              </div>
              <div>
                <h4 className="text-[17px] font-bold mb-1">Menemukan Visi</h4>
                <p className="text-[15px] text-text-secondary leading-relaxed">Melihat rumitnya operasional kasir manual di Ponorogo, saya memanggil kembali ilmu *coding* masa sekolah untuk menciptakan solusi nyata.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-bg-card transition-colors">
              <div className="mt-1 w-6 h-6 rounded-full bg-brand-amber/10 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-brand-amber"></div>
              </div>
              <div>
                <h4 className="text-[17px] font-bold mb-1">Pengembangan Web & Mobile</h4>
                <p className="text-[15px] text-text-secondary leading-relaxed">Membangun antarmuka kasir *cloud* berbasis React/TypeScript, serta mengekspansi ke aplikasi *mobile native* yang terhubung dengan *hardware*.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-bg-card transition-colors">
              <div className="mt-1 w-6 h-6 rounded-full bg-brand-emerald/10 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-brand-emerald"></div>
              </div>
              <div>
                <h4 className="text-[17px] font-bold mb-1">Pendalaman Backend</h4>
                <p className="text-[15px] text-text-secondary leading-relaxed">Mengeksplorasi ekosistem PHP dan Python, serta optimalisasi server guna menjamin performa server jangka panjang.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-bg-card transition-colors">
              <div className="mt-1 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
              </div>
              <div>
                <h4 className="text-[17px] font-bold mb-1">Fokus Kedepan</h4>
                <p className="text-[15px] text-text-secondary leading-relaxed">Meningkatkan skalabilitas produk, siap menerima *feedback*, dan berkolaborasi aktif demi memajukan UMKM kuliner di Indonesia.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Penutup & CTA */}
        <section className="border-t border-border pt-10 pb-6 text-center bg-bg-card/30 rounded-3xl p-8 mt-4">
          <h2 className="font-display text-2xl font-bold mb-3">Mari Majukan UMKM Bersama</h2>
          <p className="text-[16px] text-text-secondary max-w-[500px] mx-auto mb-6 leading-relaxed">
            Mesen.Ae adalah bentuk nyata kontribusi saya. Mari bergandengan tangan menaikkan kelas bisnis F&B Anda dari konvensional menjadi modern dan efisien.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[16px] font-bold bg-[#25D366] text-white transition-colors hover:bg-[#22c35e]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Hubungi Saya & Mulai Kolaborasi
          </a>
        </section>

      </main>
    </div>
  );
}
