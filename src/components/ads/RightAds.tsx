import Link from "next/link";
import { rightAds } from "@/data/ads";


export default function RightAds(){


return (

<div

className="
space-y-5
"

>


{
rightAds.map((item)=>(


<Link

key={item.id}

href={`/franchise/${item.slug}`}

className="
block
"

>


<div

className="
aspect-[3/5]
rounded-xl
overflow-hidden
border
border-gray-200
hover:shadow-lg
transition
bg-gray-100
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


)

}