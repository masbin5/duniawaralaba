import Link from "next/link";

import { articles } from "@/data/articles";

import RightAds from "./ads/RightAds";



export default function RightSidebar() {
  return (
    <aside className="space-y-5">

      {/* PROMO */}
      <div
        className="
        bg-gradient-to-br
        from-[#002B80]
        to-[#0055CC]
        rounded-xl
        p-5
        text-white
        "
      >
        <h3
          className="
          font-bold
          text-lg
          "
        >
          Promo Waralaba
        </h3>

        <p
          className="
          text-sm
          text-blue-100
          mt-2
          leading-relaxed
          "
        >
          Promosikan bisnis franchise
          Anda di DuniaWaralaba.
        </p>

        <Link
          href="/daftar"
          className="
          mt-4
          w-full
          bg-yellow-400
          text-[#002B80]
          py-2
          rounded-md
          font-bold
          text-sm
          flex
          items-center
          justify-center
          hover:bg-yellow-300
          transition
          "
        >
          Pasang Iklan
        </Link>
      </div>


      {/* RIGHT ADS */}
      <RightAds />


      {/* FRANCHISE PILIHAN */}
      <div
        className="
        bg-white
        border
        border-gray-200
        rounded-xl
        p-4
        "
      >
        <h3
          className="
          font-bold
          text-[#002B80]
          mb-4
          "
        >
          Franchise Pilihan
        </h3>

        <div className="space-y-3">
          <SmallItem
            name="Warkop Pikop"
            category="Makanan & Minuman"
            href="/franchise/warkop-pikop"
          />

          <SmallItem
            name="Coffee Corner"
            category="Coffee Shop"
            href="/franchise/coffee-corner"
          />
        </div>
      </div>


      {/* ARTIKEL TERBARU */}
      <div
        className="
        bg-white
        border
        border-gray-200
        rounded-xl
        p-4
        "
      >
        <h3
          className="
          font-bold
          text-[#002B80]
          mb-4
          "
        >
          Artikel Terbaru
        </h3>

        <div className="space-y-4">
          {articles.slice(0, 3).map((item) => (
            <Link
              href={`/artikel/${item.slug}`}
              key={item.slug}
              className="
              block
              group
              "
            >
              <p
                className="
                text-sm
                font-semibold
                text-gray-700
                group-hover:text-[#002B80]
                transition
                "
              >
                {item.title}
              </p>

              <p
                className="
                text-xs
                text-gray-400
                mt-1
                "
              >
                {item.date}
              </p>
            </Link>
          ))}
        </div>
      </div>

    </aside>
  );
}



function SmallItem({
  name,
  category,
  href,
}: {
  name: string;
  category: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
      block
      border-b
      border-gray-100
      pb-3
      last:border-b-0
      last:pb-0
      group
      "
    >
      <p
        className="
        text-sm
        font-semibold
        text-[#002B80]
        group-hover:text-yellow-500
        transition
        "
      >
        {name}
      </p>

      <p
        className="
        text-xs
        text-gray-500
        mt-1
        "
      >
        {category}
      </p>
    </Link>
  );
}