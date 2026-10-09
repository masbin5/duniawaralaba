"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { franchises } from "@/data/franchises";
import FranchiseCard from "@/components/FranchiseCard";

export default function DirektoriContent() {
  const searchParams = useSearchParams();

  const kategoriURL =
    searchParams.get("kategori") || "Semua";

  const investasiURL =
    searchParams.get("investasi") || "Semua";

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState(kategoriURL);

  const [investment, setInvestment] =
    useState(investasiURL);


  const filteredFranchise = franchises.filter((item) => {
    const matchSearch =
      item.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      category === "Semua" ||
      item.category === category;

    const matchInvestment =
      investment === "Semua" ||

      (
        investment === "<10" &&
        item.investmentValue < 10000000
      ) ||

      (
        investment === "10-50" &&
        item.investmentValue >= 10000000 &&
        item.investmentValue <= 50000000
      ) ||

      (
        investment === "50-100" &&
        item.investmentValue > 50000000 &&
        item.investmentValue <= 100000000
      ) ||

      (
        investment === "100-200" &&
        item.investmentValue > 100000000 &&
        item.investmentValue <= 200000000
      ) ||

      (
        investment === ">200" &&
        item.investmentValue > 200000000
      );

    return (
      matchSearch &&
      matchCategory &&
      matchInvestment
    );
  });


  const resetFilter = () => {
    setSearch("");
    setCategory("Semua");
    setInvestment("Semua");
  };


  return (
    <section
      className="
      max-w-7xl
      mx-auto
      px-6
      py-10
      "
    >
      <div className="space-y-8">

        {/* TITLE */}
        <div>
          <h1
            className="
            text-3xl
            font-bold
            text-[#002B80]
            "
          >
            Direktori Waralaba
          </h1>

          <p
            className="
            mt-2
            text-gray-600
            "
          >
            Temukan berbagai peluang franchise terbaik
            sesuai kebutuhan bisnis Anda.
          </p>
        </div>


        {/* SEARCH BOX */}
        <div
          className="
          bg-gradient-to-r
          from-[#002B80]
          to-[#0055CC]
          rounded-2xl
          p-5
          shadow-md
          "
        >
          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Cari nama franchise..."
            className="
            w-full
            rounded-lg
            px-5
            py-3
            outline-none
            bg-white
            text-[#002B80]
            placeholder:text-gray-400
            "
          />

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
            mt-4
            "
          >

            {/* CATEGORY */}
            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="
              rounded-lg
              px-4
              py-3
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
              onChange={(e) =>
                setInvestment(e.target.value)
              }
              className="
              rounded-lg
              px-4
              py-3
              bg-white
              text-gray-700
              outline-none
              cursor-pointer
              "
            >
              <option value="Semua">
                Semua Investasi
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


            {/* RESET */}
            <button
              type="button"
              onClick={resetFilter}
              className="
              rounded-lg
              bg-yellow-400
              px-4
              py-3
              font-bold
              text-[#002B80]
              hover:bg-yellow-300
              transition
              cursor-pointer
              "
            >
              Reset Filter
            </button>
          </div>
        </div>


        {/* RESULT INFO */}
        <div
          className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-2
          "
        >
          <p className="text-sm text-gray-500">
            Menampilkan{" "}
            <span className="font-semibold text-[#002B80]">
              {filteredFranchise.length}
            </span>{" "}
            franchise
          </p>

          {(category !== "Semua" ||
            investment !== "Semua" ||
            search !== "") && (
            <p className="text-xs text-gray-400">
              Filter aktif
            </p>
          )}
        </div>


        {/* CARDS */}
        {filteredFranchise.length > 0 ? (
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            "
          >
            {filteredFranchise.map((item) => (
              <FranchiseCard
                key={item.slug}
                {...item}
              />
            ))}
          </div>
        ) : (
          <div
            className="
            text-center
            py-12
            border
            border-gray-200
            rounded-2xl
            bg-white
            "
          >
            <div className="text-4xl mb-3">
              🔍
            </div>

            <h2
              className="
              font-bold
              text-[#002B80]
              "
            >
              Franchise tidak ditemukan
            </h2>

            <p
              className="
              mt-2
              text-sm
              text-gray-500
              "
            >
              Coba ubah kategori, investasi,
              atau kata kunci pencarian.
            </p>

            <button
              type="button"
              onClick={resetFilter}
              className="
              mt-5
              bg-[#002B80]
              text-white
              px-5
              py-2
              rounded-lg
              text-sm
              font-semibold
              hover:bg-[#0044B3]
              transition
              cursor-pointer
              "
            >
              Tampilkan Semua
            </button>
          </div>
        )}

      </div>
    </section>
  );
}