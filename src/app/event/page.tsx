import Link from "next/link";

import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

const EVENT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd0gDV-Rd_pmiOA15vPzkuMfQcCmE7grVHS_eKjhflHOB65OQ/viewform";

export default function EventPage() {
  const featuredEvent = events[0];
  const upcomingEvents = events.slice(1, 3);

  return (
    <div className="space-y-8">

      {/* TITLE */}
      <section>
        <h1
          className="
          text-3xl
          font-bold
          text-[#002B80]
          "
        >
          Event Franchise
        </h1>

        <p
          className="
          mt-2
          text-gray-600
          leading-relaxed
          "
        >
          Temukan berbagai event, expo, seminar, networking,
          dan kegiatan seputar dunia franchise.
        </p>
      </section>


      {/* DAFTARKAN EVENT */}
      <section
        className="
        rounded-2xl
        bg-gradient-to-br
        from-[#002B80]
        to-[#0055CC]
        p-6
        md:p-8
        text-white
        shadow-md
        "
      >
        <div
          className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-6
          "
        >
          <div>
            <span
              className="
              inline-flex
              rounded-full
              bg-yellow-400
              px-3
              py-1
              text-xs
              font-bold
              text-[#002B80]
              "
            >
              PUNYA EVENT?
            </span>

            <h2 className="mt-4 text-2xl font-bold">
              Daftarkan Event Anda
            </h2>

            <p
              className="
              mt-3
              max-w-xl
              text-sm
              leading-relaxed
              text-blue-100
              "
            >
              Punya event franchise, expo, seminar, business matching,
              workshop, atau kegiatan bisnis lainnya? Daftarkan event Anda
              agar dapat ditampilkan di DuniaWaralaba.
            </p>
          </div>

          <a
            href={EVENT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
            shrink-0
            rounded-lg
            bg-yellow-400
            px-6
            py-3
            text-center
            text-sm
            font-bold
            text-[#002B80]
            transition
            hover:bg-yellow-300
            "
          >
            Daftarkan Event
          </a>
        </div>
      </section>


      {/* FEATURED EVENT */}
      {featuredEvent && (
        <section>
          <div
            className="
            mb-4
            flex
            items-center
            justify-between
            gap-4
            "
          >
            <h2
              className="
              text-xl
              md:text-2xl
              font-bold
              text-[#002B80]
              "
            >
              Featured Event
            </h2>

            <span
              className="
              rounded-full
              bg-yellow-400
              px-3
              py-1
              text-xs
              font-bold
              text-[#002B80]
              "
            >
              EVENT PILIHAN
            </span>
          </div>

          <Link
            href={`/event/${featuredEvent.slug}`}
            className="
            group
            block
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-sm
            transition
            hover:shadow-lg
            "
          >
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="
              w-full
              aspect-[1.91/1]
              object-cover
              "
            />

            <div className="p-5">
              <span
                className="
                rounded-full
                bg-blue-50
                px-3
                py-1
                text-xs
                font-semibold
                text-[#002B80]
                "
              >
                {featuredEvent.category}
              </span>

              <h3
                className="
                mt-3
                text-xl
                font-bold
                text-[#002B80]
                "
              >
                {featuredEvent.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                📅 {featuredEvent.date}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                📍 {featuredEvent.location}
              </p>

              <p
                className="
                mt-3
                text-sm
                leading-relaxed
                text-gray-600
                "
              >
                {featuredEvent.description}
              </p>

              <span
                className="
                mt-4
                inline-flex
                text-sm
                font-bold
                text-[#002B80]
                "
              >
                Lihat Detail Event →
              </span>
            </div>
          </Link>
        </section>
      )}


      {/* EVENT SEGERA DATANG */}
      <section
        className="
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
          md:text-2xl
          font-bold
          text-[#002B80]
          "
        >
          Event Segera Datang
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Agenda franchise dan bisnis yang akan berlangsung berikutnya.
        </p>

        <div className="mt-6 space-y-4">
          {upcomingEvents.map((event) => (
            <Link
              key={event.slug}
              href={`/event/${event.slug}`}
              className="
              group
              flex
              flex-col
              sm:flex-row
              gap-4
              rounded-xl
              border
              border-gray-200
              p-3
              transition
              hover:border-blue-200
              hover:bg-blue-50/40
              "
            >
              <img
                src={event.image}
                alt={event.title}
                className="
                w-full
                sm:w-36
                h-24
                rounded-lg
                object-cover
                "
              />

              <div className="flex-1">
                <h3
                  className="
                  font-bold
                  text-[#002B80]
                  "
                >
                  {event.title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  📅 {event.date}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  📍 {event.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>


      {/* SEMUA EVENT */}
      <section>
        <h2
          className="
          text-xl
          md:text-2xl
          font-bold
          text-[#002B80]
          "
        >
          Semua Event
        </h2>

        <div
          className="
          mt-5
          grid
          grid-cols-1
          gap-6
          "
        >
          {events.map((item) => (
            <EventCard
              key={item.slug}
              {...item}
            />
          ))}
        </div>
      </section>

    </div>
  );
}