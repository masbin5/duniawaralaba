import { events } from "@/data/events";
import EventCard from "@/components/EventCard";



export default function EventSection(){



return (

<section

className="
mt-10
"

>


<h2

className="
text-xl
font-bold
text-[#002B80]
mb-5
"

>

Event Franchise

</h2>







<div

className="
grid
grid-cols-1
md:grid-cols-2
gap-5
"

>


{

events.slice(0,4).map((event)=>(


<EventCard

key={event.slug}

{...event}

/>


))


}



</div>





</section>

)

}