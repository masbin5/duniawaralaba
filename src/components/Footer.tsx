import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
      bg-[#002B80]
      text-white
      mt-16
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-10
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-4
        gap-8
        "
      >

        {/* BRAND */}
        <div>
          <Link
            href="/"
            className="
            inline-block
            text-2xl
            font-bold
            hover:opacity-90
            transition
            "
          >
            Dunia
            <span className="text-yellow-400">
              Waralaba
            </span>
          </Link>

          <p
            className="
            text-sm
            text-blue-100
            mt-3
            leading-relaxed
            "
          >
            Platform terpercaya untuk menemukan
            peluang bisnis franchise terbaik
            di Indonesia.
          </p>
        </div>


        {/* MENU */}
        <div>
          <h3 className="font-bold mb-3">
            Menu
          </h3>

          <ul className="space-y-2 text-sm text-blue-100">
            <FooterLink
              href="/direktori-waralaba"
              label="Direktori Franchise"
            />

            <FooterLink
              href="/artikel"
              label="Artikel"
            />

            <FooterLink
              href="/berita"
              label="Berita"
            />

            <FooterLink
              href="/event"
              label="Event"
            />
          </ul>
        </div>


        {/* INFORMASI */}
        <div>
          <h3 className="font-bold mb-3">
            Informasi
          </h3>

          <ul className="space-y-2 text-sm text-blue-100">
            <FooterLink
              href="/tentang-kami"
              label="Tentang Kami"
            />

            <FooterLink
              href="/kontak"
              label="Kontak"
            />

            <FooterLink
              href="/daftar"
              label="Pasang Iklan"
            />

            <FooterLink
              href="/franchisepedia"
              label="FranchisePedia"
            />

            <FooterLink
              href="/peraturan-waralaba"
              label="Peraturan Waralaba"
            />
          </ul>
        </div>


        {/* CONTACT */}
        <div>
          <h3 className="font-bold mb-3">
            Hubungi Kami
          </h3>

          <p className="text-sm text-blue-100">
            Email:
            <br />

            <a
              href="mailto:info@duniawaralaba.com"
              className="
              hover:text-yellow-400
              transition
              "
            >
              info@duniawaralaba.com
            </a>
          </p>

          <p className="text-sm text-blue-100 mt-3">
            WhatsApp:
            <br />

            <a
              href="https://wa.me/62XXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="
              hover:text-yellow-400
              transition
              "
            >
              +62 xxx xxxx xxxx
            </a>
          </p>
        </div>

      </div>


      {/* BOTTOM */}
      <div
        className="
        border-t
        border-white/20
        text-center
        py-4
        px-6
        text-sm
        text-blue-100
        "
      >
        © 2026 DuniaWaralaba. All Rights Reserved.
      </div>
    </footer>
  );
}



function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="
        inline-block
        hover:text-yellow-400
        hover:translate-x-1
        transition-all
        duration-200
        "
      >
        {label}
      </Link>
    </li>
  );
}