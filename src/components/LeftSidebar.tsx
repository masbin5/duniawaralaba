import Link from "next/link";
import LeftAds from "./ads/LeftAds";


export default function LeftSidebar() {
  return (
    <div className="space-y-4">

      {/* LOGIN & PENDAFTARAN */}
      <div
        className="
        border
        border-gray-300
        rounded-xl
        p-3
        "
      >
        <h3
          className="
          text-sm
          font-bold
          text-[#002B80]
          mb-3
          "
        >
          Login & Pendaftaran
        </h3>


        <Link
          href="/login"
          className="
          block
          w-full
          border
          border-[#002B80]
          text-[#002B80]
          rounded-md
          py-2
          text-sm
          font-semibold
          text-center
          mb-2
          hover:bg-blue-50
          transition
          "
        >
          Login
        </Link>


        <Link
          href="/daftar"
          className="
          block
          w-full
          bg-[#002B80]
          text-white
          rounded-md
          py-2
          text-sm
          font-semibold
          text-center
          hover:bg-[#0044B3]
          transition
          "
        >
          Daftar
        </Link>
      </div>


      {/* DIREKTORI */}
      <SidebarBox title="Direktori Waralaba">

        <Item
          text="Rekomendasi Franchise"
          href="/direktori-waralaba?filter=rekomendasi"
        />

        <Item
          text="Franchise Laris & Populer"
          href="/direktori-waralaba?filter=populer"
        />

        <Item
          text="Berdasarkan Kategori"
          href="/direktori-waralaba?view=kategori"
        />

        <Item
          text="Berdasarkan Alfabet"
          href="/direktori-waralaba?view=alfabet"
        />

        <Item
          text="Cari Franchise / Peluang Usaha"
          href="/direktori-waralaba"
        />

      </SidebarBox>


      {/* KATEGORI */}
      <SidebarBox title="Kategori Waralaba">

        <Item
          text="Makanan & Minuman"
          href="/direktori-waralaba?kategori=Makanan%20%26%20Minuman"
        />

        <Item
          text="Retail & Minimarket"
          href="/direktori-waralaba?kategori=Retail%20%26%20Minimarket"
        />

        <Item
          text="Kecantikan & Kesehatan"
          href="/direktori-waralaba?kategori=Kecantikan%20%26%20Kesehatan"
        />

        <Item
          text="Pendidikan & Pelatihan"
          href="/direktori-waralaba?kategori=Pendidikan%20%26%20Pelatihan"
        />

        <Item
          text="Otomotif & Cuci Mobil"
          href="/direktori-waralaba?kategori=Otomotif%20%26%20Cuci%20Mobil"
        />

        <Item
          text="Laundry & Kebersihan"
          href="/direktori-waralaba?kategori=Laundry%20%26%20Kebersihan"
        />

        <Item
          text="Property & Konstruksi"
          href="/direktori-waralaba?kategori=Property%20%26%20Konstruksi"
        />

        <Item
          text="Jasa & Lainnya"
          href="/direktori-waralaba?kategori=Jasa%20%26%20Lainnya"
        />

      </SidebarBox>


      {/* INFORMASI */}
      <SidebarBox title="Informasi Lainnya">

        <Item
          text="Artikel"
          href="/artikel"
        />

        <Item
          text="Berita"
          href="/berita"
        />

        <Item
          text="Event"
          href="/event"
        />

        <Item
          text="Franchisepedia"
          href="/franchisepedia"
        />

        <Item
          text="Peraturan Waralaba"
          href="/peraturan-waralaba"
        />

      </SidebarBox>


      {/* LEFT ADS */}
      <LeftAds />

    </div>
  );
}



function SidebarBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
      border
      border-gray-300
      rounded-xl
      p-3
      "
    >
      <h3
        className="
        text-sm
        font-bold
        text-[#002B80]
        mb-3
        "
      >
        {title}
      </h3>

      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}



function Item({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
      block
      text-sm
      text-[#002B80]
      hover:text-yellow-500
      hover:translate-x-1
      transition-all
      duration-200
      "
    >
      {text}
    </Link>
  );
}