"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const menus = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Direktori Waralaba",
    href: "/direktori-waralaba",
  },
  {
    name: "Artikel",
    href: "/artikel",
  },
  {
    name: "Berita",
    href: "/berita",
  },
  {
    name: "Event",
    href: "/event",
  },
];



export default function Navbar() {


  const [open, setOpen] = useState(false);



  return (

    <nav
      className="
      sticky
      top-0
      z-50
      w-full
      bg-[#002B80]
      text-white
      shadow-md
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-3
        flex
        items-center
        justify-between
        "
      >



        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          text-2xl
          "
        >
          ☰
        </button>





        {/* LOGO */}

        <Link
          href="/"
          className="
          flex
          items-center
          gap-2
          "
        >

          <Image
            src="/logo-duniawaralaba.png"
            alt="Dunia Waralaba"
            width={42}
            height={42}
          />


          <div
            className="
            text-xl
            font-bold
            tracking-tight
            "
          >

            Dunia
            <span className="text-yellow-400">
              Waralaba
            </span>

          </div>


        </Link>







        {/* DESKTOP MENU */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-7
          text-sm
          font-medium
          "
        >

          {
            menus.map((item)=>(

              <Link
                key={item.name}
                href={item.href}
                className="
                hover:text-yellow-400
                transition
                "
              >

                {item.name}

              </Link>

            ))
          }


        </div>







        {/* BUTTON DESKTOP */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-2
          "
        >


          <button
            className="
            bg-white
            text-[#002B80]
            px-4
            py-2
            rounded-md
            text-sm
            font-semibold
            hover:bg-gray-100
            "
          >
            Login
          </button>




          <Link
            href="/daftar"
            className="
            bg-yellow-400
            text-[#002B80]
            px-4
            py-2
            rounded-md
            text-sm
            font-semibold
            hover:bg-yellow-300
            transition
            "
          >
            Daftar
          </Link>




          <button
            className="
            w-9
            h-9
            rounded-full
            border
            border-white/40
            flex
            items-center
            justify-center
            hover:bg-white/10
            "
          >

            🔍

          </button>


        </div>







        {/* MOBILE SEARCH */}

        <button
          className="
          md:hidden
          text-xl
          "
        >

          🔍

        </button>


      </div>








      {/* MOBILE DROPDOWN */}

      {
        open && (

          <div
            className="
            md:hidden
            bg-[#001F5C]
            px-6
            py-5
            space-y-4
            "
          >


            {
              menus.map((item)=>(

                <Link
                  key={item.name}
                  href={item.href}
                  onClick={()=>setOpen(false)}
                  className="
                  block
                  text-sm
                  hover:text-yellow-400
                  "
                >

                  {item.name}

                </Link>

              ))
            }





            <div
              className="
              pt-4
              border-t
              border-white/20
              space-y-3
              "
            >


              <button
                className="
                w-full
                bg-white
                text-[#002B80]
                py-2
                rounded-md
                font-semibold
                "
              >
                Login
              </button>



              <Link
              href="/daftar"
              className="
              bg-yellow-400
              text-[#002B80]
              px-4
              py-2
              rounded-md
              text-sm
              font-semibold
              hover:bg-yellow-300
              transition
              "
            >
              Daftar
            </Link>



            </div>


          </div>

        )
      }



    </nav>

  );

}