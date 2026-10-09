"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Hero() {
  const router = useRouter();

  const [category, setCategory] = useState("Semua");
  const [investment, setInvestment] = useState("Semua");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (category !== "Semua") {
      params.set("kategori", category);
    }

    if (investment !== "Semua") {
      params.set("investasi", investment);
    }

    const query = params.toString();

    router.push(
      query
        ? `/direktori-waralaba?${query}`
        : "/direktori-waralaba"
    );
  };

  return (
    <section className="bg-[#f8fafc] py-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO MAIN */}
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          items-center
          "
        >

          {/* LEFT */}
          <div className="flex items-start gap-4">
            <Image
              src="/logo-duniawaralaba.png"
              alt="Dunia Waralaba"
              width={70}
              height={70}
              className="mt-2"
              priority
            />

            <div>
              <h1
                className="
                text-3xl
                md:text-4xl
                font-extrabold
                leading-tight
                text-[#002B80]
                "
              >
                Temukan Peluang.
                <br />

                Bangun Bisnis.
                <br />

                <span className="text-yellow-400">
                  Raih Sukses.
                </span>
              </h1>

              <p
                className="
                mt-3
                text-sm
                text-gray-600
                leading-relaxed
                max-w-md
                "
              >
                DuniaWaralaba adalah platform terpercaya untuk
                menemukan peluang bisnis franchise terbaik di Indonesia.
              </p>

              <button
                type="button"
                className="
                mt-4
                bg-[#002B80]
                hover:bg-[#003FA8]
                text-white
                px-6
                py-2
                rounded-lg
                font-semibold
                text-sm
                transition
                "
              >
                HAI FRANCHISOR DAN VISITOR 👋
              </button>
            </div>
          </div>


          {/* RIGHT */}
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-3
            "
          >

            {/* BRAND BOX */}
            <div
              className="
              sm:col-span-2
              bg-gradient-to-br
              from-[#002B80]
              to-[#0055CC]
              rounded-2xl
              p-6
              text-white
              shadow-lg
              min-h-[160px]
              flex
              flex-col
              justify-center
              "
            >
              <h2 className="text-2xl font-bold">
                Dunia
                <span className="text-yellow-400">
                  Waralaba
                </span>
              </h2>

              <p className="mt-3 text-sm text-blue-100">
                Satu Platform,
                <br />
                Ribuan Peluang Bisnis
              </p>
            </div>


            {/* STAT BOX */}
            <div
              className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-5
              shadow-sm
              flex
              flex-col
              justify-center
              "
            >
              <p className="text-xs text-gray-500">
                Pengunjung Hari Ini
              </p>

              <h3
                className="
                text-3xl
                font-bold
                text-[#002B80]
                mt-2
                "
              >
                1.2K
              </h3>

              <span className="mt-2 text-xs text-green-600">
                ↑ Aktif hari ini
              </span>
            </div>

          </div>
        </div>


        {/* SEARCH */}
        <div
          className="
          mt-7
          bg-gradient-to-r
          from-[#002B80]
          to-[#004DCC]
          rounded-2xl
          p-4
          shadow-lg
          "
        >
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-4
            gap-3
            items-center
            "
          >

            <div className="text-white font-bold">
              Temukan
              <br />
              Waralaba
            </div>


            {/* CATEGORY */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
              w-full
              p-3
              rounded-lg
              bg-white
              text-gray-700
              outline-none
              cursor-pointer
              "
            >
              <option value="Semua">
                Semua Kategori
              </option>

              <option value="Makanan & Minuman">
                Makanan & Minuman
              </option>

              <option value="Retail & Minimarket">
                Retail & Minimarket
              </option>

              <option value="Kecantikan & Kesehatan">
                Kecantikan & Kesehatan
              </option>

              <option value="Pendidikan & Pelatihan">
                Pendidikan & Pelatihan
              </option>

              <option value="Otomotif & Cuci Mobil">
                Otomotif & Cuci Mobil
              </option>

              <option value="Laundry & Kebersihan">
                Laundry & Kebersihan
              </option>

              <option value="Property & Konstruksi">
                Property & Konstruksi
              </option>

              <option value="Jasa & Lainnya">
                Jasa & Lainnya
              </option>
            </select>


            {/* INVESTMENT */}
            <select
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              className="
              w-full
              p-3
              rounded-lg
              bg-white
              text-gray-700
              outline-none
              cursor-pointer
              "
            >
              <option value="Semua">
                Pilih Investasi
              </option>

              <option value="<10">
                Dibawah 10 juta
              </option>

              <option value="10-50">
                10 - 50 juta
              </option>

              <option value="50-100">
                50 - 100 juta
              </option>

              <option value="100-200">
                100 - 200 juta
              </option>

              <option value=">200">
                Diatas 200 juta
              </option>
            </select>


            {/* SEARCH BUTTON */}
            <button
              type="button"
              onClick={handleSearch}
              className="
              w-full
              bg-yellow-400
              text-[#002B80]
              py-3
              px-6
              rounded-lg
              font-bold
              hover:bg-yellow-300
              transition
              cursor-pointer
              "
            >
              Cari
            </button>

          </div>
        </div>


        {/* STATISTIC BAR */}
        <div
          className="
          mt-6
          bg-[#002B80]
          rounded-2xl
          grid
          grid-cols-1
          md:grid-cols-3
          overflow-hidden
          text-white
          "
        >
          <Stat
            number="1000+"
            text="Franchise"
          />

          <Stat
            number="10.000+"
            text="Investor Terdaftar"
          />

          <Stat
            number="300+"
            text="Franchise Terverifikasi"
          />
        </div>

      </div>
    </section>
  );
}



function Stat({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div
      className="
      py-5
      text-center
      border-b
      md:border-b-0
      md:border-r
      last:border-r-0
      border-white/20
      "
    >
      <h3
        className="
        text-2xl
        font-bold
        text-yellow-400
        "
      >
        {number}
      </h3>

      <p className="text-xs mt-1 text-blue-100">
        {text}
      </p>
    </div>
  );
}