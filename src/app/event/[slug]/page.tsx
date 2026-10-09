import { events } from "@/data/events";

export default async function EventDetail({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const event = events.find(
    (item) => item.slug === slug
  );

  if (!event) {
    return (
      <div
        className="
        text-center
        py-20
        text-gray-600
        "
      >
        Event tidak ditemukan
      </div>
    );
  }

  return (
    <section className="space-y-6">

      {/* CATEGORY */}
      <div>
        <span
          className="
          inline-flex
          rounded-full
          bg-yellow-100
          px-3
          py-1
          text-xs
          font-bold
          text-yellow-700
          "
        >
          {event.category}
        </span>
      </div>


      {/* TITLE */}
      <h1
        className="
        text-3xl
        md:text-4xl
        font-bold
        text-[#002B80]
        leading-tight
        "
      >
        {event.title}
      </h1>


      {/* DATE & LOCATION */}
      <div
        className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        gap-2
        sm:gap-5
        text-sm
        text-gray-500
        "
      >
        <p>
          📅 {event.date}
        </p>

        <p>
          📍 {event.location}
        </p>
      </div>


      {/* IMAGE */}
      <div
        className="
        mt-6
        overflow-hidden
        rounded-2xl
        bg-gray-100
        "
      >
        <img
          src={event.image}
          alt={event.title}
          className="
          w-full
          aspect-[1.91/1]
          object-cover
          "
        />
      </div>


      {/* DESCRIPTION */}
      <div
        className="
        mt-8
        space-y-5
        text-sm
        md:text-base
        leading-relaxed
        text-gray-700
        "
      >
        <p>
          {event.description}
        </p>

        <p>
          Event ini dapat menjadi kesempatan bagi pemilik
          franchise, brand, dan pelaku usaha untuk memperkenalkan
          bisnis, bertemu calon mitra, serta membangun jaringan
          dengan berbagai pihak dalam industri.
        </p>

        <p>
          Bagi brand yang tertarik untuk berpartisipasi sebagai
          peserta, exhibitor, tenant, atau mitra event, silakan
          menghubungi kontak penyelenggara yang tersedia.
        </p>
      </div>


      {/* CONTACT EVENT */}
      <div
        className="
        mt-8
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        "
      >
        <h2
          className="
          text-xl
          font-bold
          text-[#002B80]
          "
        >
          Kontak Penyelenggara
        </h2>

        <p
          className="
          mt-2
          text-sm
          leading-relaxed
          text-gray-600
          "
        >
          Untuk informasi mengenai keikutsertaan franchise,
          booth, exhibitor, sponsorship, atau kerja sama event,
          silakan hubungi penyelenggara melalui kontak berikut.
        </p>

        <div
          className="
          mt-5
          rounded-xl
          bg-blue-50
          p-4
          "
        >
          <p
            className="
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-gray-500
            "
          >
            Telepon / WhatsApp
          </p>

          <p
            className="
            mt-1
            text-lg
            font-bold
            text-[#002B80]
            "
          >
            {event.phone}
          </p>
        </div>

        <a
          href={`https://wa.me/${event.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
          mt-5
          inline-flex
          items-center
          justify-center
          rounded-lg
          bg-[#002B80]
          px-6
          py-3
          text-sm
          font-bold
          text-white
          transition
          hover:bg-[#0044B3]
          "
        >
          Hubungi Penyelenggara
        </a>
      </div>

    </section>
  );
}