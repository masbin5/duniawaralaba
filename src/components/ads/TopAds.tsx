import Link from "next/link";
import { topAds } from "@/data/ads";


export default function TopAds(){


return (

<section

className="
max-w-7xl
mx-auto
px-6
mt-6
"

>


<div

className="
grid
grid-cols-1
md:grid-cols-2
gap-5
"

>


{
topAds.map((item)=>(


<Link

key={item.id}

href={`/franchise/${item.slug}`}

className="
block
rounded-2xl
overflow-hidden
border
border-gray-200
hover:shadow-lg
transition
bg-gray-100
"

>


<div

className="
aspect-[24/5]
"

>


<img

src={item.image}

alt="Banner Franchise"

className="
w-full
h-full
object-contain
"

/>


</div>


</Link>


))
}



</div>


</section>

)

}