import Sidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="
      max-w-7xl
      mx-auto
      px-6
      py-10
      "
    >

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-12
        gap-8
        "
      >


        {/* SIDEBAR KIRI */}

        <aside
          className="
          md:col-span-3
          "
        >
          <Sidebar />
        </aside>




        {/* CONTENT UTAMA */}

        <main
          className="
          md:col-span-6
          "
        >

          {children}

        </main>




        {/* SIDEBAR KANAN */}

        <aside
          className="
          md:col-span-3
          "
        >

          <RightSidebar />

        </aside>


      </div>


    </section>
  );
}