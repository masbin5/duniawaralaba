import Link from "next/link";
import { leftAds } from "@/data/ads";



export default function LeftAds(){


return (

<div

className="
mt-5
space-y-5
"

>


{
leftAds.map((item)=>(


<Link

key={item.id}

href={`/franchise/${item.slug}`}

className="
block
"

>


<div

className="
rounded-xl
overflow-hidden
border
border-gray-200
hover:shadow-lg
transition
"

>


<img

src={item.image}

alt="Banner Franchise"

className="
w-full
h-[400px]
object-cover
"

/>


</div>



</Link>


))
}



</div>


)

}