import Link from "next/link";

export default function KontakPage() {
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
          HUBUNGI KAMI
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
          Ada yang Ingin Ditanyakan?
        </h1>

        <p
          className="
          mt-3
          max-w-xl
          text-sm
          md:text-base
          leading-relaxed
          text-blue-100
          "
        >
          Hubungi tim DuniaWaralaba untuk pertanyaan mengenai
          pendaftaran bisnis, pemasangan iklan, informasi franchise,
          maupun layanan yang tersedia di platform kami.
        </p>
      </section>


      {/* CONTACT CARDS */}
      <section
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
        "
      >

        {/* EMAIL */}
        <a
          href="mailto:info@duniawaralaba.com"
          className="
          group
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-sm
          transition
          hover:border-blue-200
          hover:shadow-md
          "
        >
          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-blue-50
            text-xl
            "
          >
            ✉️
          </div>

          <h2
            className="
            mt-4
            font-bold
            text-[#002B80]
            group-hover:text-blue-600
            "
          >
            Email
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Untuk pertanyaan umum dan informasi.
          </p>

          <p
            className="
            mt-3
            text-sm
            font-semibold
            text-[#002B80]
            "
          >
            info@duniawaralaba.com
          </p>
        </a>


        {/* WHATSAPP */}
        <a
          href="https://wa.me/62XXXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="
          group
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-sm
          transition
          hover:border-green-200
          hover:shadow-md
          "
        >
          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-green-50
            text-xl
            "
          >
            💬
          </div>

          <h2
            className="
            mt-4
            font-bold
            text-[#002B80]
            group-hover:text-green-600
            "
          >
            WhatsApp
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Hubungi kami untuk respon lebih cepat.
          </p>

          <p
            className="
            mt-3
            text-sm
            font-semibold
            text-[#002B80]
            "
          >
            +62 xxx xxxx xxxx
          </p>
        </a>

      </section>


      {/* BANTUAN */}
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
          Apa yang Bisa Kami Bantu?
        </SectionTitle>

        <p
          className="
          mb-6
          text-sm
          leading-relaxed
          text-gray-600
          "
        >
          Tim DuniaWaralaba dapat membantu memberikan informasi
          terkait penggunaan platform dan layanan yang tersedia.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">

          <HelpCard
            number="01"
            title="Pendaftaran Bisnis"
            description="Informasi mengenai cara mendaftarkan franchise, kemitraan, lisensi, atau peluang usaha di DuniaWaralaba."
          />

          <HelpCard
            number="02"
            title="Pasang Iklan"
            description="Informasi mengenai promosi brand dan peluang bisnis melalui media yang tersedia di DuniaWaralaba."
          />

          <HelpCard
            number="03"
            title="Informasi Franchise"
            description="Pertanyaan terkait informasi franchise dan profil bisnis yang tersedia pada direktori kami."
          />

          <HelpCard
            number="04"
            title="Koreksi Informasi"
            description="Hubungi kami apabila Anda menemukan informasi bisnis yang perlu diperbarui atau dikoreksi."
          />

        </div>
      </section>


      {/* KHUSUS PEMILIK BISNIS */}
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
          Anda Pemilik Franchise atau Peluang Usaha?
        </h2>

        <p
          className="
          mt-3
          text-sm
          leading-relaxed
          text-blue-100
          "
        >
          Daftarkan bisnis Anda di DuniaWaralaba untuk
          memperkenalkan brand dan peluang usaha kepada calon
          investor serta mitra dari berbagai daerah di Indonesia.
        </p>

        <Link
          href="/daftar"
          className="
          mt-5
          inline-flex
          items-center
          justify-center
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
          Daftarkan Bisnis
        </Link>
      </section>


      {/* JAM OPERASIONAL */}
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
          Waktu Pelayanan
        </SectionTitle>

        <div className="space-y-3">

          <Schedule
            day="Senin - Jumat"
            time="09.00 - 17.00 WIB"
          />

          <Schedule
            day="Sabtu"
            time="09.00 - 14.00 WIB"
          />

          <Schedule
            day="Minggu & Hari Libur"
            time="Tidak beroperasi"
          />

        </div>

        <p
          className="
          mt-4
          text-xs
          leading-relaxed
          text-gray-400
          "
        >
          Pesan yang diterima di luar waktu pelayanan akan
          ditanggapi pada hari kerja berikutnya.
        </p>
      </section>


      {/* INFO */}
      <section
        className="
        rounded-2xl
        border
        border-yellow-200
        bg-yellow-50
        p-5
        "
      >
        <h2 className="font-bold text-[#002B80]">
          Perlu Diperhatikan
        </h2>

        <p
          className="
          mt-2
          text-sm
          leading-relaxed
          text-gray-600
          "
        >
          Untuk keamanan, pastikan Anda hanya berkomunikasi melalui
          kontak resmi DuniaWaralaba yang tercantum pada website ini.
          Jangan memberikan password, kode OTP, atau informasi rahasia
          lainnya kepada pihak yang mengatasnamakan DuniaWaralaba.
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
      text-xl
      md:text-2xl
      font-bold
      text-[#002B80]
      "
    >
      {children}
    </h2>
  );
}



function HelpCard({
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

      <h3
        className="
        mt-4
        text-sm
        font-bold
        text-[#002B80]
        "
      >
        {title}
      </h3>

      <p
        className="
        mt-2
        text-sm
        leading-relaxed
        text-gray-600
        "
      >
        {description}
      </p>
    </div>
  );
}



function Schedule({
  day,
  time,
}: {
  day: string;
  time: string;
}) {
  return (
    <div
      className="
      flex
      flex-col
      sm:flex-row
      sm:items-center
      sm:justify-between
      gap-1
      rounded-xl
      bg-gray-50
      px-4
      py-3
      "
    >
      <span
        className="
        text-sm
        font-semibold
        text-[#002B80]
        "
      >
        {day}
      </span>

      <span className="text-sm text-gray-500">
        {time}
      </span>
    </div>
  );
}