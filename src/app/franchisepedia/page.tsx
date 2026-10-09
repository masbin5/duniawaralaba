const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "I",
  "K",
  "L",
  "M",
  "O",
  "P",
  "R",
  "S",
  "T",
  "W",
];

const franchiseTerms = [
  {
    letter: "A",
    terms: [
      {
        title: "Advertising Fee",
        description:
          "Biaya yang dialokasikan untuk kegiatan pemasaran dan promosi brand secara bersama-sama, baik melalui media digital, kampanye nasional, maupun kegiatan promosi lainnya.",
      },
      {
        title: "Area Eksklusif",
        description:
          "Wilayah tertentu yang diberikan kepada mitra untuk menjalankan bisnis dengan perlindungan area sesuai dengan kesepakatan kerja sama.",
      },
      {
        title: "Agreement",
        description:
          "Perjanjian kerja sama antara pemilik bisnis dan mitra yang mengatur hak, kewajiban, ketentuan operasional, biaya, wilayah usaha, serta masa kerja sama.",
      },
    ],
  },

  {
    letter: "B",
    terms: [
      {
        title: "Break Even Point (BEP)",
        description:
          "Kondisi ketika pendapatan bisnis telah mampu menutup seluruh biaya yang dikeluarkan sehingga usaha belum menghasilkan keuntungan maupun kerugian.",
      },
      {
        title: "Business Model",
        description:
          "Cara sebuah bisnis menghasilkan pendapatan, melayani pelanggan, mengelola operasional, dan menciptakan nilai bagi pasar.",
      },
      {
        title: "Business Support",
        description:
          "Dukungan yang diberikan pemilik brand kepada mitra, seperti pelatihan, konsultasi, pemasaran, pengadaan bahan baku, hingga pendampingan operasional.",
      },
    ],
  },

  {
    letter: "C",
    terms: [
      {
        title: "Franchise",
        description:
          "Sistem kerja sama bisnis di mana pemilik merek memberikan hak kepada pihak lain untuk menggunakan merek, sistem, konsep, dan standar operasional bisnis berdasarkan perjanjian tertentu.",
      },
      {
        title: "Franchise Fee",
        description:
          "Biaya yang dibayarkan oleh franchisee kepada franchisor sebagai imbalan atas hak menggunakan merek, sistem bisnis, konsep usaha, dan dukungan yang diberikan selama periode kerja sama.",
      },
      {
        title: "Franchisee",
        description:
          "Pihak yang memperoleh hak untuk menjalankan bisnis menggunakan merek, sistem, dan konsep usaha milik franchisor berdasarkan perjanjian kerja sama.",
      },
      {
        title: "Franchisor",
        description:
          "Pemilik merek atau bisnis yang memberikan hak kepada pihak lain untuk menjalankan usaha menggunakan merek dan sistem bisnis yang telah dikembangkan.",
      },
    ],
  },

  {
    letter: "D",
    terms: [
      {
        title: "Direct Selling",
        description:
          "Metode penjualan produk atau jasa secara langsung kepada konsumen tanpa melalui jaringan distribusi konvensional.",
      },
      {
        title: "Due Diligence",
        description:
          "Proses pemeriksaan dan penilaian terhadap sebuah bisnis sebelum seseorang memutuskan untuk melakukan investasi atau kerja sama.",
      },
    ],
  },

  {
    letter: "E",
    terms: [
      {
        title: "Exclusive Territory",
        description:
          "Hak atau perlindungan wilayah yang diberikan kepada franchisee berdasarkan kesepakatan agar tidak terdapat mitra lain dengan brand yang sama dalam area tertentu.",
      },
      {
        title: "Expansion",
        description:
          "Proses memperluas jangkauan bisnis melalui pembukaan cabang, franchise, kemitraan, maupun strategi pengembangan lainnya.",
      },
    ],
  },

  {
    letter: "F",
    terms: [
      {
        title: "Fee",
        description:
          "Biaya yang dikenakan dalam suatu kerja sama bisnis sebagai imbalan atas fasilitas, layanan, hak, atau dukungan tertentu. Dalam bisnis franchise, jenis fee dapat berbeda-beda tergantung pada sistem dan perjanjian yang ditetapkan oleh franchisor.",
      },
      {
        title: "Franchise",
        description:
          "Bentuk kerja sama bisnis yang memberikan hak kepada pihak tertentu untuk menjalankan usaha menggunakan merek, konsep, sistem operasional, dan standar bisnis milik pemilik brand berdasarkan ketentuan yang telah disepakati.",
      },
      {
        title: "Franchise Resale",
        description:
          "Transaksi pengalihan kepemilikan sebuah outlet franchise yang sudah berjalan kepada pemilik baru. Outlet yang dijual umumnya telah memiliki lokasi, peralatan, pelanggan, dan sistem operasional sehingga calon pembeli tidak harus memulai bisnis dari awal.",
      },
      {
        title: "Franchisee (Penerima Waralaba)",
        description:
          "Individu atau badan usaha yang memperoleh hak untuk menjalankan bisnis menggunakan merek, sistem, dan konsep yang dimiliki franchisor berdasarkan perjanjian waralaba.",
      },
      {
        title: "Franchisor (Pemberi Waralaba)",
        description:
          "Pihak yang memiliki dan mengembangkan suatu merek serta sistem bisnis, kemudian memberikan hak kepada pihak lain untuk menjalankan usaha menggunakan merek dan sistem tersebut melalui skema waralaba.",
      },
      {
        title: "Franchise Fee",
        description:
          "Biaya awal yang dibayarkan oleh franchisee kepada franchisor untuk memperoleh hak menjalankan bisnis dengan menggunakan merek, konsep, dan sistem yang telah dikembangkan oleh franchisor.",
      },
      {
        title: "Franchise Information Disclosure",
        description:
          "Dokumen yang berisi informasi penting mengenai bisnis franchise yang diberikan kepada calon franchisee sebelum mengambil keputusan untuk bergabung.",
      },
      {
        title: "Franchise Agreement",
        description:
          "Dokumen resmi yang mengatur hubungan kerja sama antara franchisor dan franchisee, termasuk hak, kewajiban, penggunaan merek, wilayah usaha, biaya, standar operasional, jangka waktu, perpanjangan, dan penghentian kerja sama.",
      },
      {
        title: "Franchise Territory",
        description:
          "Wilayah operasional yang diberikan kepada franchisee untuk menjalankan bisnis berdasarkan kesepakatan dengan franchisor.",
      },
      {
        title: "Franchise Support",
        description:
          "Berbagai bentuk bantuan yang diberikan franchisor kepada franchisee selama menjalankan bisnis, seperti pelatihan, konsultasi operasional, pemasaran, pengembangan produk, teknologi, dan evaluasi kinerja outlet.",
      },
    ],
  },

  {
    letter: "I",
    terms: [
      {
        title: "Initial Investment",
        description:
          "Total modal awal yang diperlukan untuk memulai sebuah bisnis, termasuk biaya franchise, perlengkapan, renovasi, stok awal, dan kebutuhan operasional lainnya.",
      },
      {
        title: "Inventory",
        description:
          "Persediaan barang, bahan baku, produk, maupun perlengkapan yang diperlukan untuk menjalankan kegiatan bisnis.",
      },
    ],
  },

  {
    letter: "K",
    terms: [
      {
        title: "Kemitraan",
        description:
          "Bentuk kerja sama bisnis antara pemilik usaha dan mitra dengan pembagian peran, modal, keuntungan, maupun tanggung jawab sesuai kesepakatan.",
      },
      {
        title: "Kontrak Franchise",
        description:
          "Dokumen perjanjian yang menjadi dasar hubungan kerja sama antara franchisor dan franchisee.",
      },
    ],
  },

  {
    letter: "L",
    terms: [
      {
        title: "License",
        description:
          "Hak yang diberikan oleh pemilik merek kepada pihak lain untuk menggunakan merek, produk, karakter, teknologi, atau aset tertentu dengan ketentuan yang telah disepakati.",
      },
      {
        title: "Licensing Fee",
        description:
          "Biaya yang dibayarkan untuk memperoleh hak penggunaan aset atau kekayaan intelektual tertentu.",
      },
    ],
  },

  {
    letter: "M",
    terms: [
      {
        title: "Marketing Fee",
        description:
          "Biaya yang digunakan untuk mendukung kegiatan pemasaran dan promosi brand, baik secara lokal maupun nasional.",
      },
      {
        title: "Master Franchise",
        description:
          "Hak yang diberikan kepada pihak tertentu untuk mengembangkan sebuah brand dalam wilayah geografis tertentu dan dalam kondisi tertentu dapat memberikan hak franchise kepada pihak lain.",
      },
    ],
  },

  {
    letter: "O",
    terms: [
      {
        title: "Outlet",
        description:
          "Lokasi fisik tempat sebuah bisnis menjalankan aktivitas penjualan produk atau layanan kepada pelanggan.",
      },
      {
        title: "Operational Support",
        description:
          "Bentuk pendampingan dari pemilik brand kepada mitra dalam menjalankan kegiatan operasional sehari-hari.",
      },
    ],
  },

  {
    letter: "P",
    terms: [
      {
        title: "Payback Period",
        description:
          "Perkiraan waktu yang dibutuhkan agar modal awal yang dikeluarkan dapat kembali melalui keuntungan atau arus kas bisnis.",
      },
      {
        title: "Profit Sharing",
        description:
          "Sistem pembagian keuntungan antara pihak-pihak yang terlibat dalam suatu kerja sama bisnis berdasarkan kesepakatan.",
      },
      {
        title: "Proposal Franchise",
        description:
          "Dokumen yang berisi informasi mengenai konsep bisnis, peluang investasi, estimasi modal, sistem kerja sama, fasilitas, serta potensi pengembangan sebuah franchise.",
      },
    ],
  },

  {
    letter: "R",
    terms: [
      {
        title: "Royalty Fee",
        description:
          "Biaya yang dibayarkan franchisee kepada franchisor secara berkala sebagai bagian dari penggunaan merek dan sistem bisnis sesuai dengan perjanjian.",
      },
      {
        title: "Return on Investment (ROI)",
        description:
          "Indikator yang digunakan untuk mengukur tingkat keuntungan yang diperoleh dibandingkan dengan modal yang telah diinvestasikan.",
      },
    ],
  },

  {
    letter: "S",
    terms: [
      {
        title: "Standard Operating Procedure (SOP)",
        description:
          "Panduan tertulis yang mengatur tata cara menjalankan kegiatan operasional agar kualitas produk, pelayanan, dan proses bisnis tetap konsisten.",
      },
      {
        title: "Support System",
        description:
          "Serangkaian dukungan yang diberikan franchisor kepada mitra untuk membantu bisnis berjalan dan berkembang secara optimal.",
      },
    ],
  },

  {
    letter: "T",
    terms: [
      {
        title: "Training",
        description:
          "Program pelatihan yang diberikan kepada franchisee atau timnya untuk memahami produk, pelayanan, sistem operasional, pemasaran, dan standar bisnis.",
      },
      {
        title: "Turnkey Business",
        description:
          "Model bisnis yang telah dipersiapkan sehingga mitra dapat mulai menjalankan usaha setelah seluruh kebutuhan utama seperti lokasi, peralatan, sistem, dan perlengkapan disiapkan.",
      },
    ],
  },

  {
    letter: "W",
    terms: [
      {
        title: "Working Capital",
        description:
          "Modal kerja yang digunakan untuk membiayai kebutuhan operasional bisnis sehari-hari, seperti pembelian bahan baku, gaji, utilitas, dan biaya operasional lainnya.",
      },
    ],
  },
];

export default function FranchisePediaPage() {
  return (
    <div className="space-y-6">

      {/* HERO */}
      <section
        className="
        rounded-2xl
        bg-gradient-to-br
        from-[#002B80]
        to-[#0055CC]
        p-6
        md:p-8
        text-white
        shadow-sm
        "
      >
        <span
          className="
          inline-flex
          rounded-full
          bg-yellow-400
          px-3
          py-1
          text-xs
          font-bold
          text-[#002B80]
          "
        >
          FRANCHISEPEDIA
        </span>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold">
          Kamus FranchisePedia
        </h1>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-blue-100">
          Kamus istilah bisnis untuk membantu calon franchisee,
          franchisor, investor, dan pelaku usaha memahami berbagai
          istilah yang sering digunakan dalam dunia franchise,
          kemitraan, dan pengembangan bisnis.
        </p>
      </section>


      {/* ALPHABET NAVIGATION */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="mb-4 text-sm font-bold text-[#002B80]">
          Cari berdasarkan huruf
        </p>

        <div className="flex flex-wrap gap-2">
          {alphabet.map((letter) => (
            <a
              key={letter}
              href={`#huruf-${letter}`}
              className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-blue-50
              text-sm
              font-bold
              text-[#002B80]
              transition
              hover:bg-[#002B80]
              hover:text-white
              "
            >
              {letter}
            </a>
          ))}
        </div>
      </section>


      {/* TERMS */}
      <div className="space-y-6">
        {franchiseTerms.map((group) => (
          <section
            key={group.letter}
            id={`huruf-${group.letter}`}
            className="
            scroll-mt-24
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-sm
            "
          >
            <div
              className="
              flex
              items-center
              gap-3
              bg-[#002B80]
              px-5
              py-4
              "
            >
              <div
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                bg-yellow-400
                text-lg
                font-bold
                text-[#002B80]
                "
              >
                {group.letter}
              </div>

              <h2 className="text-lg font-bold text-white">
                Istilah Huruf {group.letter}
              </h2>
            </div>

            <div className="divide-y divide-gray-100">
              {group.terms.map((term) => (
                <article
                  key={`${group.letter}-${term.title}`}
                  className="
                  p-5
                  transition
                  hover:bg-blue-50/40
                  "
                >
                  <h3 className="text-base font-bold text-[#002B80]">
                    {term.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {term.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>


      {/* FOOTER CTA */}
      <section
        className="
        rounded-2xl
        bg-gradient-to-br
        from-[#002B80]
        to-[#0055CC]
        p-6
        text-center
        text-white
        "
      >
        <h2 className="text-xl font-bold">
          Masih mencari informasi seputar franchise?
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-blue-100">
          Temukan lebih banyak informasi mengenai franchise,
          peluang usaha, kemitraan, dan pengembangan bisnis
          di DuniaWaralaba.com.
        </p>

        <a
          href="/direktori-waralaba"
          className="
          mt-5
          inline-flex
          rounded-lg
          bg-yellow-400
          px-5
          py-3
          text-sm
          font-bold
          text-[#002B80]
          transition
          hover:bg-yellow-300
          "
        >
          Lihat Direktori Waralaba
        </a>
      </section>

    </div>
  );
}