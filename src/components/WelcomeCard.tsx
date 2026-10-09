export default function WelcomeCard() {
  return (
    <div
      className="
      bg-gradient-to-br
      from-[#002B80]
      to-[#0055CC]
      rounded-2xl
      shadow-lg
      p-5
      text-white
      mb-8
      "
    >

      <h2
        className="
        text-lg
        font-bold
        "
      >
        Selamat Datang di{" "}
        <span className="text-yellow-400">
          DuniaWaralaba.com
        </span>
      </h2>



      <p
        className="
        text-sm
        mt-3
        leading-relaxed
        text-blue-100
        "
      >
        Dunia Waralaba adalah platform terlengkap bagi Anda
        yang ingin memulai bisnis franchise (waralaba) dengan
        peluang terbaik dan terpercaya.
        <br />

        Temukan berbagai pilihan franchise dengan investasi
        terjangkau, dukungan penuh, dan potensi keuntungan
        maksimal.
      </p>




      <div
        className="
        grid
        grid-cols-2
        gap-3
        mt-5
        text-xs
        "
      >

        <div>
          ℹ️ Info Transparan
        </div>


        <div>
          ⏳ Peluang Terlengkap
        </div>


        <div>
          🛡️ Franchise Terverifikasi
        </div>


        <div>
          📅 Update Setiap Hari
        </div>


      </div>


    </div>
  );
}