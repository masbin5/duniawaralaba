export default function TentangKamiPage() {
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
          TENTANG KAMI
        </span>

        <h1
          className="
          mt-4
          text-2xl
          md:text-3xl
          font-bold
          leading-tight
          "
        >
          Mengenal Lebih Dekat{" "}
          <span className="text-yellow-400">
            DuniaWaralaba.com
          </span>
        </h1>

        <p
          className="
          mt-4
          text-sm
          md:text-base
          leading-relaxed
          text-blue-100
          "
        >
          DuniaWaralaba.com hadir sebagai platform informasi
          franchise, kemitraan, lisensi, dan peluang usaha yang
          membantu mempertemukan pemilik bisnis dengan calon
          investor dan mitra potensial di Indonesia.
        </p>
      </section>


      {/* SIAPA KAMI */}
      <section
        className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        "
      >
        <SectionTitle>
          Siapa Kami?
        </SectionTitle>

        <div className="space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            <strong className="text-[#002B80]">
              DuniaWaralaba.com
            </strong>{" "}
            merupakan portal digital yang berfokus pada informasi
            dunia waralaba dan pengembangan bisnis di Indonesia.
          </p>

          <p>
            Kami menyediakan ruang bagi pemilik brand untuk
            memperkenalkan konsep bisnis, peluang franchise,
            kemitraan, maupun lisensi kepada masyarakat yang sedang
            mencari peluang usaha.
          </p>

          <p>
            Bagi calon investor dan mitra, DuniaWaralaba.com
            dirancang untuk mempermudah proses pencarian informasi
            bisnis melalui direktori yang lebih terstruktur,
            informasi investasi, kategori usaha, profil brand,
            artikel edukasi, berita, serta informasi terkait dunia
            franchise.
          </p>
        </div>
      </section>


      {/* VISI MISI */}
      <section
        className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        "
      >
        <SectionTitle>
          Visi & Misi
        </SectionTitle>

        <div className="grid gap-5 md:grid-cols-2">

          {/* VISI */}
          <div
            className="
            rounded-2xl
            bg-gradient-to-br
            from-[#002B80]
            to-[#0055CC]
            p-5
            text-white
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
              "
            >
              🎯
            </div>

            <h3 className="mt-4 text-lg font-bold">
              Visi
            </h3>

            <p
              className="
              mt-3
              text-sm
              leading-relaxed
              text-blue-100
              "
            >
              Menjadi salah satu platform informasi franchise dan
              peluang usaha terpercaya di Indonesia yang membantu
              mempertemukan bisnis potensial dengan calon investor
              dan mitra.
            </p>
          </div>


          {/* MISI */}
          <div
            className="
            rounded-2xl
            border
            border-blue-100
            bg-blue-50
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
              text-lg
              "
            >
              🚀
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#002B80]">
              Misi
            </h3>

            <ul className="mt-4 space-y-3">
              <CheckItem>
                Menyediakan informasi franchise dan peluang usaha
                yang mudah dipahami.
              </CheckItem>

              <CheckItem>
                Membantu brand meningkatkan visibilitas dan
                menjangkau calon mitra potensial.
              </CheckItem>

              <CheckItem>
                Membantu calon investor menemukan peluang bisnis
                berdasarkan kebutuhan dan kemampuan investasi.
              </CheckItem>

              <CheckItem>
                Meningkatkan literasi masyarakat mengenai franchise,
                kemitraan, dan pengembangan bisnis.
              </CheckItem>
            </ul>
          </div>

        </div>
      </section>


      {/* APA YANG KAMI SEDIAKAN */}
      <section
        className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        "
      >
        <SectionTitle>
          Apa yang Kami Sediakan?
        </SectionTitle>

        <p className="mb-6 text-sm leading-relaxed text-gray-600">
          DuniaWaralaba.com dikembangkan sebagai pusat informasi
          yang dapat digunakan oleh calon mitra maupun pemilik brand.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <FeatureCard
            number="01"
            title="Direktori Waralaba"
            description="Menampilkan berbagai peluang franchise, kemitraan, dan bisnis dari beragam kategori."
          />

          <FeatureCard
            number="02"
            title="Profil Franchise"
            description="Informasi bisnis seperti investasi, kategori, konsep usaha, jumlah outlet, fasilitas, hingga kontak brand."
          />

          <FeatureCard
            number="03"
            title="FranchisePedia"
            description="Kamus istilah franchise dan bisnis untuk membantu pengguna memahami istilah yang sering digunakan dalam industri."
          />

          <FeatureCard
            number="04"
            title="Artikel & Berita"
            description="Informasi edukatif, perkembangan industri, tren bisnis, tips usaha, serta berita terkait franchise."
          />

          <FeatureCard
            number="05"
            title="Informasi Regulasi"
            description="Ringkasan informasi mengenai ketentuan dan peraturan waralaba yang berlaku di Indonesia."
          />

          <FeatureCard
            number="06"
            title="Media Promosi Bisnis"
            description="Ruang bagi pemilik brand untuk memperkenalkan peluang usahanya kepada calon investor dan mitra."
          />
        </div>
      </section>


      {/* UNTUK SIAPA */}
      <section
        className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        "
      >
        <SectionTitle>
          DuniaWaralaba untuk Siapa?
        </SectionTitle>

        <div className="space-y-4">

          <AudienceItem
            title="Calon Investor & Mitra"
            description="Untuk Anda yang sedang mencari peluang usaha, franchise, lisensi, atau kemitraan sesuai minat dan kemampuan investasi."
          />

          <AudienceItem
            title="Pemilik Franchise"
            description="Untuk franchisor yang ingin memperkenalkan brand dan memperluas jaringan mitra ke berbagai daerah."
          />

          <AudienceItem
            title="Pemilik Bisnis & UMKM"
            description="Untuk pelaku usaha yang sedang mengembangkan sistem kemitraan atau mempersiapkan bisnis agar dapat berkembang melalui jaringan mitra."
          />

          <AudienceItem
            title="Masyarakat Umum"
            description="Untuk siapa pun yang ingin mempelajari dunia franchise, investasi usaha, dan pengembangan bisnis."
          />

        </div>
      </section>


      {/* NILAI */}
      <section
        className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        "
      >
        <SectionTitle>
          Nilai yang Kami Bangun
        </SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2">
          <ValueCard
            title="Informasi"
            description="Menyajikan informasi yang membantu pengguna memahami sebuah peluang bisnis sebelum mengambil keputusan."
          />

          <ValueCard
            title="Transparansi"
            description="Mendorong penyajian informasi bisnis yang jelas, relevan, dan dapat dipahami calon mitra."
          />

          <ValueCard
            title="Aksesibilitas"
            description="Mempermudah masyarakat menemukan berbagai pilihan usaha melalui satu platform digital."
          />

          <ValueCard
            title="Pertumbuhan"
            description="Membantu membuka peluang kolaborasi antara pemilik bisnis dengan calon mitra dari berbagai wilayah."
          />
        </div>
      </section>


      {/* DISCLAIMER */}
      <section
        className="
        rounded-2xl
        border
        border-yellow-200
        bg-yellow-50
        p-6
        "
      >
        <h2 className="font-bold text-[#002B80]">
          Informasi Penting
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          DuniaWaralaba.com berfungsi sebagai media informasi dan
          promosi bisnis. Setiap calon investor atau mitra tetap
          disarankan melakukan pemeriksaan, analisis, dan verifikasi
          secara mandiri sebelum mengambil keputusan investasi atau
          menjalin kerja sama dengan suatu bisnis.
        </p>
      </section>


      {/* CTA */}
      <section
        className="
        rounded-2xl
        bg-gradient-to-br
        from-[#002B80]
        to-[#0055CC]
        p-6
        md:p-8
        text-center
        text-white
        shadow-md
        "
      >
        <h2 className="text-xl md:text-2xl font-bold">
          Temukan Peluang. Bangun Bisnis.
        </h2>

        <p
          className="
          mx-auto
          mt-3
          max-w-xl
          text-sm
          leading-relaxed
          text-blue-100
          "
        >
          Jelajahi berbagai peluang franchise dan kemitraan
          atau daftarkan bisnis Anda untuk menjangkau lebih
          banyak calon investor dan mitra.
        </p>

        <div
          className="
          mt-6
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-3
          "
        >
          <a
            href="/direktori-waralaba"
            className="
            w-full
            sm:w-auto
            rounded-lg
            bg-yellow-400
            px-6
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

          <a
            href="/daftar"
            className="
            w-full
            sm:w-auto
            rounded-lg
            border
            border-white/40
            px-6
            py-3
            text-sm
            font-bold
            text-white
            transition
            hover:bg-white/10
            "
          >
            Daftarkan Bisnis
          </a>
        </div>
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



function FeatureCard({
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
        h-9
        w-9
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



function AudienceItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
      rounded-xl
      border
      border-gray-200
      p-5
      transition
      hover:border-blue-200
      hover:bg-blue-50/30
      "
    >
      <h3 className="text-sm font-bold text-[#002B80]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}



function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
      rounded-xl
      border
      border-gray-200
      bg-gray-50
      p-5
      "
    >
      <h3 className="font-bold text-[#002B80]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}



function CheckItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
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

      <span className="text-sm leading-relaxed text-gray-600">
        {children}
      </span>
    </li>
  );
}