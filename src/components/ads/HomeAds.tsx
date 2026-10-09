import Link from "next/link";
import { homeAds } from "@/data/ads";


export default function HomeAds(){


return (

<section

className="
mt-10
"

>


<div

className="
space-y-5
"

>


{
homeAds.map((item)=>(


<Link

key={item.id}

href={`/franchise/${item.slug}`}

className="
block
"

>


<div

className="
rounded-2xl
overflow-hidden
border
border-gray-200
hover:shadow-lg
transition
"

>


<img

src={item.image}

alt="Promo Franchise"

className="
w-full
h-[300px]
object-cover
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