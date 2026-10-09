const regulations = [
  {
    title: "PP Nomor 35 Tahun 2024",
    subtitle: "Tentang Waralaba",
    description:
      "Peraturan utama yang mengatur penyelenggaraan waralaba di Indonesia, termasuk kriteria waralaba, prospektus penawaran, perjanjian waralaba, STPW, hak dan kewajiban para pihak, penggunaan produk dalam negeri, pelaporan, pembinaan, pengawasan, larangan, dan sanksi.",
  },
  {
    title: "Permendag Nomor 25 Tahun 2025",
    subtitle: "Tata Cara Penerbitan STPW oleh Pemerintah Daerah",
    description:
      "Mengatur tata cara penerbitan Surat Tanda Pendaftaran Waralaba oleh pemerintah daerah bagi jenis penyelenggara waralaba yang menjadi kewenangan pemerintah daerah.",
  },
];

const franchiseCriteria = [
  {
    number: "01",
    title: "Memiliki Sistem Bisnis",
    description:
      "Pemberi waralaba harus memiliki sistem bisnis yang jelas, tertulis, mudah diajarkan, dapat diterapkan, serta mempunyai kerangka kerja yang konsisten.",
  },
  {
    number: "02",
    title: "Bisnis Telah Memberikan Keuntungan",
    description:
      "Usaha yang akan diwaralabakan harus telah terbukti berjalan dan menghasilkan keuntungan sesuai ketentuan yang berlaku.",
  },
  {
    number: "03",
    title: "Memiliki Kekayaan Intelektual",
    description:
      "Bisnis harus memiliki kekayaan intelektual yang terkait dengan usaha dan telah tercatat atau terdaftar, seperti merek, hak cipta, paten, rahasia dagang, atau kekayaan intelektual lainnya.",
  },
  {
    number: "04",
    title: "Memberikan Dukungan Berkesinambungan",
    description:
      "Pemberi waralaba wajib memberikan dukungan berkelanjutan kepada penerima waralaba, misalnya pelatihan, dukungan operasional, promosi, pengembangan pasar, dan pembinaan.",
  },
];

const businessSystem = [
  "Pengelolaan sumber daya manusia.",
  "Pengadministrasian.",
  "Pengelolaan operasional.",
  "Metode standar pengoperasian.",
  "Pemilihan lokasi usaha.",
  "Desain tempat usaha.",
  "Persyaratan karyawan.",
  "Strategi pemasaran.",
];

const prospectusItems = [
  "Identitas Pemberi Waralaba atau Pemberi Waralaba Lanjutan.",
  "Legalitas usaha.",
  "Sejarah kegiatan usaha.",
  "Struktur organisasi.",
  "Sistem bisnis.",
  "Laporan keuangan 2 tahun terakhir.",
  "Jumlah gerai atau tempat usaha waralaba.",
  "Daftar penerima waralaba, apabila telah ada.",
  "Hak dan kewajiban para pihak.",
  "Sertifikat atau bukti pencatatan kekayaan intelektual.",
];

const agreementItems = [
  "Nama dan alamat para pihak.",
  "Kekayaan intelektual yang masih dalam masa perlindungan.",
  "Kegiatan usaha.",
  "Sistem bisnis.",
  "Hak dan kewajiban para pihak.",
  "Bantuan, fasilitas, bimbingan operasional, pelatihan, dan pemasaran.",
  "Wilayah usaha.",
  "Jangka waktu perjanjian.",
  "Tata cara pembayaran imbalan.",
  "Kepemilikan dan peralihan kepemilikan waralaba.",
  "Penyelesaian sengketa.",
  "Tata cara perpanjangan dan pengakhiran perjanjian.",
  "Ketentuan mengenai kewajiban pemberi waralaba.",
  "Jumlah gerai atau tempat usaha yang akan dikelola.",
];

export default function PeraturanWaralabaPage() {
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
          INFORMASI REGULASI
        </span>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold">
          Peraturan Waralaba di Indonesia
        </h1>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-blue-100">
          Ringkasan ketentuan umum mengenai penyelenggaraan waralaba
          berdasarkan regulasi pemerintah Republik Indonesia yang berlaku.
        </p>

        <div
          className="
          mt-5
          rounded-xl
          border
          border-white/20
          bg-white/10
          p-4
          "
        >
          <p className="text-sm leading-relaxed text-blue-50">
            Dasar utama penyelenggaraan waralaba saat ini adalah
            <strong className="text-yellow-400">
              {" "}Peraturan Pemerintah Nomor 35 Tahun 2024 tentang Waralaba.
            </strong>
          </p>
        </div>
      </section>


      {/* DISCLAIMER */}
      <section
        className="
        rounded-xl
        border
        border-yellow-200
        bg-yellow-50
        p-5
        "
      >
        <h2 className="font-bold text-[#002B80]">
          Catatan Penting
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Informasi pada halaman ini disediakan sebagai ringkasan edukasi
          dan bukan pengganti konsultasi hukum atau isi resmi peraturan
          perundang-undangan. Pelaku usaha disarankan memeriksa dokumen
          resmi pemerintah sebelum mengambil keputusan hukum atau bisnis.
        </p>
      </section>


      {/* REGULASI UTAMA */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <SectionTitle>
          Dasar Hukum Waralaba
        </SectionTitle>

        <p className="mb-5 text-sm leading-relaxed text-gray-600">
          Beberapa regulasi utama yang menjadi acuan penyelenggaraan
          waralaba di Indonesia antara lain:
        </p>

        <div className="space-y-4">
          {regulations.map((item) => (
            <div
              key={item.title}
              className="
              rounded-xl
              border
              border-blue-100
              bg-blue-50/50
              p-5
              "
            >
              <h3 className="font-bold text-[#002B80]">
                {item.title}
              </h3>

              <p className="mt-1 text-sm font-semibold text-yellow-600">
                {item.subtitle}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* PENGERTIAN */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <SectionTitle>
          Apa yang Dimaksud dengan Waralaba?
        </SectionTitle>

        <p className="text-sm leading-relaxed text-gray-600">
          Secara umum, waralaba merupakan hak khusus atas suatu sistem
          bisnis yang telah memenuhi kriteria tertentu, digunakan untuk
          memasarkan barang dan/atau jasa yang telah terbukti berhasil,
          dan dapat dimanfaatkan oleh pihak lain berdasarkan perjanjian
          waralaba.
        </p>
      </section>


      {/* KRITERIA WARALABA */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <SectionTitle>
          Kriteria Usaha yang Dapat Diwaralabakan
        </SectionTitle>

        <p className="mb-6 text-sm leading-relaxed text-gray-600">
          Berdasarkan PP Nomor 35 Tahun 2024, pemberi waralaba harus
          memenuhi beberapa kriteria utama berikut.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {franchiseCriteria.map((item) => (
            <InfoCard
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>


        {/* DETAIL KEUNTUNGAN */}
        <div
          className="
          mt-6
          rounded-xl
          border
          border-gray-200
          bg-gray-50
          p-5
          "
        >
          <h3 className="font-bold text-[#002B80]">
            Bukti bahwa bisnis telah memberikan keuntungan
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Ketentuan tersebut antara lain dibuktikan dengan kegiatan
            usaha yang diwaralabakan telah berjalan sekurang-kurangnya
            3 tahun berturut-turut serta laporan keuangan 2 tahun
            terakhir yang menunjukkan keuntungan.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Untuk pemberi waralaba skala Usaha Mikro dan Usaha Kecil,
            terdapat pengecualian terhadap kewajiban audit laporan
            keuangan oleh akuntan publik sebagaimana diatur dalam
            ketentuan terkait.
          </p>
        </div>
      </section>


      {/* SISTEM BISNIS */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <SectionTitle>
          Standar Sistem Bisnis
        </SectionTitle>

        <p className="mb-5 text-sm leading-relaxed text-gray-600">
          Sistem bisnis waralaba harus dituangkan secara tertulis,
          mudah diajarkan dan diaplikasikan, serta memiliki standar
          kerja yang jelas dan konsisten.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {businessSystem.map((item) => (
            <CheckItem
              key={item}
              text={item}
            />
          ))}
        </div>
      </section>


      {/* PROSPEKTUS */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <SectionTitle>
          Prospektus Penawaran Waralaba
        </SectionTitle>

        <p className="text-sm leading-relaxed text-gray-600">
          Pemberi waralaba wajib menyampaikan Prospektus Penawaran
          Waralaba kepada calon penerima waralaba paling lambat
          <strong className="text-[#002B80]">
            {" "}14 hari kalender
          </strong>{" "}
          sebelum penandatanganan Perjanjian Waralaba.
        </p>

        <p className="mt-5 mb-3 text-sm font-bold text-[#002B80]">
          Prospektus paling sedikit memuat:
        </p>

        <div className="space-y-2">
          {prospectusItems.map((item, index) => (
            <NumberItem
              key={item}
              number={index + 1}
              text={item}
            />
          ))}
        </div>
      </section>


      {/* PERJANJIAN */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <SectionTitle>
          Perjanjian Waralaba
        </SectionTitle>

        <p className="mb-5 text-sm leading-relaxed text-gray-600">
          Penyelenggaraan waralaba harus didasarkan pada perjanjian
          waralaba antara pemberi dan penerima waralaba. Para pihak
          mempunyai kedudukan hukum yang setara dan perjanjian berlaku
          berdasarkan hukum Indonesia.
        </p>

        <div className="space-y-2">
          {agreementItems.map((item, index) => (
            <NumberItem
              key={item}
              number={index + 1}
              text={item}
            />
          ))}
        </div>
      </section>


      {/* HAK KEWAJIBAN */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <SectionTitle>
          Hak dan Kewajiban Para Pihak
        </SectionTitle>

        <div className="grid gap-5 md:grid-cols-2">

          <div
            className="
            rounded-xl
            border
            border-blue-100
            bg-blue-50
            p-5
            "
          >
            <h3 className="font-bold text-[#002B80]">
              Pemberi Waralaba
            </h3>

            <ul className="mt-4 space-y-3">
              <SimpleList>
                Berhak menerima imbalan sesuai dengan perjanjian.
              </SimpleList>

              <SimpleList>
                Wajib memberikan dukungan secara berkesinambungan.
              </SimpleList>

              <SimpleList>
                Memberikan pelatihan dan bimbingan operasional.
              </SimpleList>

              <SimpleList>
                Memberikan dukungan promosi dan pengembangan pasar.
              </SimpleList>
            </ul>
          </div>


          <div
            className="
            rounded-xl
            border
            border-yellow-200
            bg-yellow-50
            p-5
            "
          >
            <h3 className="font-bold text-[#002B80]">
              Penerima Waralaba
            </h3>

            <ul className="mt-4 space-y-3">
              <SimpleList>
                Berhak menggunakan kekayaan intelektual pemberi waralaba
                sesuai perjanjian.
              </SimpleList>

              <SimpleList>
                Wajib menjalankan bisnis berdasarkan sistem dan standar
                yang telah ditentukan.
              </SimpleList>

              <SimpleList>
                Wajib menjaga kode etik dan kerahasiaan kekayaan
                intelektual.
              </SimpleList>
            </ul>
          </div>

        </div>
      </section>


      {/* STPW */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <SectionTitle>
          Surat Tanda Pendaftaran Waralaba (STPW)
        </SectionTitle>

        <p className="text-sm leading-relaxed text-gray-600">
          STPW merupakan perizinan berusaha untuk menunjang kegiatan
          usaha dan menjadi tanda bukti bahwa orang perseorangan atau
          badan usaha telah terdaftar sebagai penyelenggara waralaba.
        </p>

        <div
          className="
          mt-5
          rounded-xl
          bg-[#002B80]
          p-5
          text-white
          "
        >
          <h3 className="font-bold text-yellow-400">
            Proses Perizinan
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-blue-100">
            Pendaftaran dan penerbitan STPW dilakukan melalui sistem
            perizinan berusaha yang berlaku dan mengikuti kewenangan
            pemerintah pusat maupun pemerintah daerah sesuai jenis
            penyelenggara waralaba.
          </p>
        </div>
      </section>


      {/* KI */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <SectionTitle>
          Kekayaan Intelektual
        </SectionTitle>

        <p className="text-sm leading-relaxed text-gray-600">
          Salah satu unsur penting waralaba adalah kepemilikan kekayaan
          intelektual yang tercatat atau terdaftar dan berkaitan dengan
          bisnis yang diwaralabakan.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Merek",
            "Hak Cipta",
            "Paten",
            "Rahasia Dagang",
            "Desain Industri",
            "Kekayaan Intelektual Terkait",
          ].map((item) => (
            <span
              key={item}
              className="
              rounded-full
              bg-blue-50
              px-3
              py-2
              text-xs
              font-semibold
              text-[#002B80]
              "
            >
              {item}
            </span>
          ))}
        </div>
      </section>


      {/* CHECKLIST */}
      <section
        className="
        rounded-2xl
        bg-gradient-to-br
        from-[#002B80]
        to-[#0055CC]
        p-6
        text-white
        "
      >
        <h2 className="text-xl font-bold">
          Checklist Awal Sebelum Menawarkan Waralaba
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-blue-100">
          Secara umum, pemilik bisnis sebaiknya memastikan beberapa
          hal berikut sebelum menawarkan bisnis dengan skema waralaba.
        </p>

        <div className="mt-5 space-y-3">
          <WhiteCheck text="Sistem dan SOP bisnis sudah terdokumentasi." />
          <WhiteCheck text="Usaha telah berjalan dan memiliki rekam jejak keuntungan." />
          <WhiteCheck text="Kekayaan intelektual telah dicatat atau didaftarkan." />
          <WhiteCheck text="Prospektus Penawaran Waralaba telah disiapkan." />
          <WhiteCheck text="Draft Perjanjian Waralaba telah disiapkan." />
          <WhiteCheck text="Sistem dukungan dan pembinaan mitra telah tersedia." />
          <WhiteCheck text="Persyaratan STPW dan perizinan telah dipahami." />
        </div>
      </section>


      {/* OFFICIAL SOURCE */}
      <section
        className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        text-center
        shadow-sm
        "
      >
        <h2 className="text-xl font-bold text-[#002B80]">
          Pastikan Selalu Mengacu pada Regulasi Resmi
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
          Ketentuan hukum dapat berubah. Sebelum menjalankan atau
          membeli waralaba, periksa regulasi terbaru melalui JDIH
          pemerintah dan konsultasikan dengan tenaga profesional
          apabila diperlukan.
        </p>
      </section>

    </div>
  );
}



function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2
      className="
      mb-4
      text-xl
      md:text-2xl
      font-bold
      leading-tight
      text-[#002B80]
      "
    >
      {children}
    </h2>
  );
}



function InfoCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
      rounded-xl
      border
      border-blue-100
      bg-blue-50/50
      p-5
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
        bg-[#002B80]
        text-xs
        font-bold
        text-yellow-400
        "
      >
        {number}
      </div>

      <h3 className="mt-4 text-sm font-bold text-[#002B80]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}



function CheckItem({
  text,
}: {
  text: string;
}) {
  return (
    <div
      className="
      flex
      items-start
      gap-3
      rounded-xl
      border
      border-gray-200
      p-4
      "
    >
      <div
        className="
        mt-[2px]
        flex
        h-6
        w-6
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#002B80]
        text-xs
        font-bold
        text-white
        "
      >
        ✓
      </div>

      <p className="text-sm leading-relaxed text-gray-600">
        {text}
      </p>
    </div>
  );
}



function NumberItem({
  number,
  text,
}: {
  number: number;
  text: string;
}) {
  return (
    <div
      className="
      flex
      items-start
      gap-3
      rounded-lg
      bg-gray-50
      p-3
      "
    >
      <div
        className="
        flex
        h-7
        w-7
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#002B80]
        text-xs
        font-bold
        text-white
        "
      >
        {number}
      </div>

      <p className="pt-1 text-sm leading-relaxed text-gray-600">
        {text}
      </p>
    </div>
  );
}



function SimpleList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="
        mt-1
        flex
        h-4
        w-4
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-yellow-400
        text-[9px]
        font-bold
        text-[#002B80]
        "
      >
        ✓
      </span>

      <span className="text-sm leading-relaxed text-gray-600">
        {children}
      </span>
    </li>
  );
}



function WhiteCheck({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="
        mt-[2px]
        flex
        h-5
        w-5
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-yellow-400
        text-[10px]
        font-bold
        text-[#002B80]
        "
      >
        ✓
      </span>

      <p className="text-sm leading-relaxed text-blue-50">
        {text}
      </p>
    </div>
  );
}