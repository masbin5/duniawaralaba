import Image from "next/image";


export default function FranchiseHero() {

  return (

    <section
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-sm
      border
      border-gray-200
      "
    >


      {/* BANNER */}

      <div
        className="
        h-72
        bg-gradient-to-r
        from-[#002B80]
        to-[#0055CC]
        flex
        items-center
        justify-center
        "
      >

        <p
          className="
          text-white
          text-2xl
          font-bold
          "
        >
          Warkop Pikop
        </p>


      </div>






      {/* CONTENT */}

      <div
        className="
        p-6
        "
      >


        <div
          className="
          flex
          items-start
          gap-5
          "
        >


          {/* LOGO */}

          <div
            className="
            w-24
            h-24
            rounded-xl
            bg-gray-100
            overflow-hidden
            border
            "
          >

            <Image
              src="/franchise/warkop-pikop.jpg"
              alt="Warkop Pikop"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />

          </div>





          <div>


            <div
              className="
              flex
              items-center
              gap-2
              "
            >

              <h1
                className="
                text-3xl
                font-bold
                text-[#002B80]
                "
              >
                Warkop Pikop
              </h1>


              <span
                className="
                bg-green-500
                text-white
                text-xs
                px-3
                py-1
                rounded-full
                "
              >
                Verified
              </span>


            </div>



            <p
              className="
              text-gray-500
              mt-2
              "
            >
              Makanan & Minuman
            </p>



          </div>


        </div>







        {/* INFO */}

        <div
          className="
          grid
          grid-cols-3
          gap-4
          mt-8
          "
        >


          <Info
            title="Investasi"
            value="Mulai Rp xxx"
          />


          <Info
            title="Kategori"
            value="Food & Beverage"
          />


          <Info
            title="Status"
            value="Kemitraan"
          />


        </div>




        {/* BUTTON */}

        <div
          className="
          flex
          gap-3
          mt-8
          "
        >

          <button
            className="
            bg-[#002B80]
            text-white
            px-6
            py-3
            rounded-lg
            font-semibold
            "
          >
            Hubungi Franchise
          </button>



          <button
            className="
            border
            border-[#002B80]
            text-[#002B80]
            px-6
            py-3
            rounded-lg
            font-semibold
            "
          >
            Lihat Proposal
          </button>


        </div>


      </div>


    </section>

  );

}




function Info({
  title,
  value
}:{
  title:string;
  value:string;
}) {


  return (

    <div
      className="
      bg-gray-50
      rounded-xl
      p-4
      "
    >

      <p
        className="
        text-xs
        text-gray-500
        "
      >
        {title}
      </p>


      <p
        className="
        font-bold
        text-[#002B80]
        mt-1
        "
      >
        {value}
      </p>


    </div>

  );

}