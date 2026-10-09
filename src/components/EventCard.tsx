import Link from "next/link";



type EventCardProps = {

slug:string;

title:string;

date:string;

location:string;

category:string;

image:string;

};





export default function EventCard({

slug,

title,

date,

location,

category,

image

}:EventCardProps){



return (

<Link

href={`/event/${slug}`}

className="
block
"

>


<article

className="
bg-white
rounded-2xl
border
border-gray-200
overflow-hidden
shadow-sm
hover:shadow-lg
transition
group
"

>





{/* IMAGE */}


<div

className="
h-56
bg-gray-100
overflow-hidden
"

>


<img

src={image}

alt={title}

className="
w-full
h-full
object-cover
group-hover:scale-105
transition duration-300
"

/>


</div>









{/* CONTENT */}


<div

className="
p-5
"

>





{/* CATEGORY */}


<p

className="
text-xs
font-bold
text-yellow-600
uppercase
tracking-wide
"

>

{category}

</p>







{/* TITLE */}


<h3

className="
mt-3
text-xl
font-bold
text-[#002B80]
leading-snug
group-hover:text-[#003FA8]
transition
"

>

{title}

</h3>







{/* INFO */}


<div

className="
mt-4
space-y-2
text-sm
text-gray-500
"

>


<p>

📅 {date}

</p>



<p>

📍 {location}

</p>



</div>








{/* CTA */}


<div

className="
mt-5
inline-flex
items-center
text-sm
font-semibold
text-[#002B80]
"

>

Lihat Detail

<span className="ml-2">
→
</span>


</div>





</div>





</article>


</Link>

)

}