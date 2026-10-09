
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfeUKU7zvXydzUV3v6ebu0_bUvLXagAf06_70ZgU_aQY7wnZA/viewform";

export default function DaftarPage() {
  return (
      <div className="space-y-6">

        {/* HEADER */}
        <section
          className="
          overflow-hidden
          rounded-2xl
          bg-gradient-to-br
          from-[#002B80]
          to-[#0055CC]
          text-white
          shadow-sm
          "
        >
          <div className="p-6 md:p-8">
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
              PENDAFTARAN MEMBER
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
              Bergabung dengan{" "}
              <span className="text-yellow-400">
                DuniaWaralaba.com
              </span>
            </h1>

            <p
              className="
              mt-4
              max-w-2xl
              text-sm
              md:text-base
              leading-relaxed
              text-blue-50
              "
            >
              Perkenalkan bisnis franchise, lisensi, atau kemitraan Anda
              kepada calon investor dan mitra potensial dari berbagai
              daerah di Indonesia.
            </p>
          </div>
        </section>


        {/* APA ITU DUNIA WARALABA */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <SectionTitle>
            Apa itu{" "}
            <span className="text-yellow-500">
              DuniaWaralaba.com
            </span>
          </SectionTitle>

          <div className="space-y-4 text-sm leading-relaxed text-gray-600">
            <p>
              <strong className="text-[#002B80]">
                DuniaWaralaba.com
              </strong>{" "}
              merupakan portal informasi yang berfokus pada dunia
              franchise, kemitraan, lisensi, dan berbagai peluang bisnis
              di Indonesia.
            </p>

            <p>
              Platform ini menjadi tempat bertemunya pemilik usaha yang
              ingin mengembangkan bisnis melalui sistem kemitraan dengan
              calon investor maupun mitra yang sedang mencari peluang
              usaha potensial.
            </p>

            <p>
              Melalui DuniaWaralaba.com, bisnis Anda dapat memperoleh
              ruang promosi yang lebih terarah sekaligus mempermudah
              masyarakat dalam menemukan informasi usaha dari berbagai
              kategori industri.
            </p>
          </div>

          <div
            className="
            mt-6
            rounded-xl
            bg-blue-50
            p-5
            "
          >
            <p className="mb-3 text-sm font-bold text-[#002B80]">
              Dengan bergabung di DuniaWaralaba.com, brand Anda
              memiliki kesempatan untuk:
            </p>

            <BenefitList
              items={[
                "Memperkenalkan bisnis kepada calon investor dan mitra potensial.",
                "Meningkatkan eksposur brand melalui media yang fokus pada franchise dan peluang usaha.",
                "Menampilkan informasi bisnis secara lebih lengkap dan profesional.",
                "Menjangkau calon mitra dari berbagai daerah di Indonesia.",
                "Meningkatkan kredibilitas bisnis melalui platform khusus dunia waralaba.",
              ]}
            />
          </div>
        </section>


        {/* KEUNTUNGAN */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <SectionTitle>
            Keuntungan Bergabung dengan{" "}
            <span className="text-yellow-500">
              DuniaWaralaba
            </span>
          </SectionTitle>

          <p className="mb-6 text-sm leading-relaxed text-gray-600">
            Menjadi bagian dari DuniaWaralaba.com memberikan berbagai
            manfaat untuk membantu meningkatkan visibilitas serta
            peluang pengembangan bisnis Anda.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <BenefitCard
              number="01"
              title="Promosi Lebih Tepat Sasaran"
              description="Bisnis Anda diperkenalkan kepada audiens yang memang memiliki ketertarikan terhadap franchise, kemitraan, lisensi, dan peluang usaha."
            />

            <BenefitCard
              number="02"
              title="Visibilitas Brand Meningkat"
              description="Profil usaha Anda dapat ditemukan oleh calon mitra melalui website DuniaWaralaba.com."
            />

            <BenefitCard
              number="03"
              title="Halaman Profil Profesional"
              description="Bisnis memperoleh halaman khusus yang dapat memuat informasi brand, konsep usaha, investasi, fasilitas, kontak, hingga galeri."
            />

            <BenefitCard
              number="04"
              title="Mendapatkan Leads Potensial"
              description="Calon mitra yang tertarik dapat memperoleh informasi kontak bisnis dan menghubungi Anda untuk pembahasan lebih lanjut."
            />

            <BenefitCard
              number="05"
              title="Media Promosi Efisien"
              description="Promosi melalui platform digital memungkinkan bisnis menjangkau calon mitra secara lebih luas dan terarah."
            />

            <BenefitCard
              number="06"
              title="Meningkatkan Kredibilitas"
              description="Kehadiran bisnis pada portal khusus franchise membantu membangun kepercayaan calon investor dan mitra."
            />
          </div>
        </section>


        {/* MEMBERSHIP */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <SectionTitle>
            Paket Membership{" "}
            <span className="text-yellow-500">
              DuniaWaralaba.com
            </span>
          </SectionTitle>

          <p className="mb-6 text-sm leading-relaxed text-gray-600">
            Kami menyediakan pilihan paket membership yang dapat
            disesuaikan dengan kebutuhan promosi dan pengembangan
            bisnis Anda.
          </p>

          <div className="space-y-5">

            {/* SILVER */}
            <div
              className="
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              p-5
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className="
                    inline-flex
                    rounded-full
                    bg-gray-200
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-gray-700
                    "
                  >
                    SILVER
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-[#002B80]">
                    Paket Silver
                  </h3>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Cocok bagi bisnis yang baru mulai memperkenalkan
                sistem franchise, lisensi, atau kemitraannya.
              </p>

              <div className="mt-5">
                <p className="mb-3 text-sm font-bold text-[#002B80]">
                  Fasilitas yang diperoleh:
                </p>

                <BenefitList
                  items={[
                    "Halaman profil bisnis di DuniaWaralaba.com.",
                    "Logo dan deskripsi perusahaan.",
                    "Informasi investasi dan persyaratan kemitraan.",
                    "Informasi kontak bisnis yang dapat dihubungi.",
                    "Masa tayang hingga 12 bulan.",
                  ]}
                />
              </div>
            </div>


            {/* GOLD */}
            <div
              className="
              relative
              overflow-hidden
              rounded-2xl
              border-2
              border-yellow-400
              bg-gradient-to-br
              from-[#002B80]
              to-[#004DB8]
              p-5
              text-white
              "
            >
              <div
                className="
                absolute
                right-0
                top-0
                rounded-bl-xl
                bg-yellow-400
                px-4
                py-2
                text-xs
                font-bold
                text-[#002B80]
                "
              >
                REKOMENDASI
              </div>

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
                GOLD
              </span>

              <h3 className="mt-3 text-xl font-bold">
                Paket Gold
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-blue-100">
                Dirancang untuk brand yang ingin mendapatkan eksposur
                lebih tinggi dan menjangkau lebih banyak calon investor
                maupun mitra potensial.
              </p>

              <div className="mt-5">
                <p className="mb-3 text-sm font-bold text-yellow-400">
                  Fasilitas yang diperoleh:
                </p>

                <GoldList
                  items={[
                    "Seluruh manfaat Paket Silver.",
                    "Penempatan pada area prioritas website.",
                    "Kesempatan tampil pada halaman rekomendasi.",
                    "Upload galeri foto bisnis lebih lengkap.",
                    "Prioritas dalam pencarian kategori bisnis.",
                    "Dukungan promosi melalui media digital DuniaWaralaba.com.",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>


        {/* PERSYARATAN */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <SectionTitle>
            Persyaratan Menjadi Member{" "}
            <span className="text-yellow-500">
              DuniaWaralaba.com
            </span>
          </SectionTitle>

          <p className="mb-5 text-sm leading-relaxed text-gray-600">
            Untuk menjaga kualitas informasi yang tersedia,
            setiap bisnis yang ingin bergabung di DuniaWaralaba.com
            diharapkan memenuhi ketentuan berikut:
          </p>

          <ol className="space-y-3">
            <RequirementItem number="1">
              Memiliki usaha yang legal dan dapat
              dipertanggungjawabkan.
            </RequirementItem>

            <RequirementItem number="2">
              Menyediakan informasi bisnis yang jelas, lengkap,
              dan sesuai dengan kondisi sebenarnya.
            </RequirementItem>

            <RequirementItem number="3">
              Memiliki konsep usaha yang siap dipasarkan melalui
              sistem franchise, kemitraan, atau lisensi.
            </RequirementItem>

            <RequirementItem number="4">
              Bersedia mengikuti kebijakan dan ketentuan yang
              berlaku di DuniaWaralaba.com.
            </RequirementItem>

            <RequirementItem number="5">
              Tidak menawarkan bisnis yang bertentangan dengan
              hukum dan peraturan yang berlaku di Indonesia.
            </RequirementItem>

            <RequirementItem number="6">
              Menjaga profesionalisme dalam berkomunikasi dengan
              calon investor maupun calon mitra.
            </RequirementItem>
          </ol>
        </section>


        {/* PROSES PENDAFTARAN */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <SectionTitle>
            Proses Pendaftaran
          </SectionTitle>

          <p className="mb-6 text-sm leading-relaxed text-gray-600">
            Proses pendaftaran dibuat sederhana agar informasi
            bisnis Anda dapat kami pelajari terlebih dahulu sebelum
            ditampilkan di DuniaWaralaba.com.
          </p>

          <div className="space-y-4">
            <ProcessItem
              number="1"
              title="Isi Form Pendaftaran"
              description="Lengkapi informasi mengenai bisnis, brand, konsep kemitraan, investasi, serta data kontak Anda."
            />

            <ProcessItem
              number="2"
              title="Verifikasi Data"
              description="Tim DuniaWaralaba akan melakukan pengecekan terhadap data bisnis yang telah dikirimkan."
            />

            <ProcessItem
              number="3"
              title="Konfirmasi"
              description="Tim kami akan menghubungi Anda apabila diperlukan informasi tambahan atau untuk proses selanjutnya."
            />

            <ProcessItem
              number="4"
              title="Profil Bisnis Dipublikasikan"
              description="Setelah proses selesai, profil bisnis dapat ditampilkan dan dipromosikan melalui DuniaWaralaba.com."
            />
          </div>
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
          <div
            className="
            mx-auto
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-yellow-400
            text-2xl
            "
          >
            🚀
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            Siap Mengembangkan Bisnis Anda?
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
            Lengkapi formulir pendaftaran dan berikan informasi
            mengenai bisnis Anda. Tim DuniaWaralaba akan mempelajari
            data yang Anda kirimkan untuk proses selanjutnya.
          </p>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
            mt-6
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-yellow-400
            px-6
            py-3
            text-sm
            font-bold
            text-[#002B80]
            shadow-sm
            transition
            hover:bg-yellow-300
            "
          >
            Lanjut ke Form Pendaftaran
            <span aria-hidden="true">→</span>
          </a>

          <p className="mt-4 text-xs text-blue-200">
            Anda akan diarahkan ke Google Form untuk melengkapi
            data pendaftaran.
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



function BenefitList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="
          flex
          items-start
          gap-3
          text-sm
          leading-relaxed
          text-gray-600
          "
        >
          <span
            className="
            mt-[3px]
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#002B80]
            text-[10px]
            font-bold
            text-white
            "
          >
            ✓
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}



function GoldList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="
          flex
          items-start
          gap-3
          text-sm
          leading-relaxed
          text-blue-50
          "
        >
          <span
            className="
            mt-[3px]
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

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}



function BenefitCard({
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
      p-4
      "
    >
      <div
        className="
        mb-3
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

      <h3 className="text-sm font-bold text-[#002B80]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}



function RequirementItem({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
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
        {children}
      </p>
    </li>
  );
}



function ProcessItem({
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
      flex
      gap-4
      rounded-xl
      border
      border-gray-200
      p-4
      "
    >
      <div
        className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-yellow-400
        font-bold
        text-[#002B80]
        "
      >
        {number}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#002B80]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}