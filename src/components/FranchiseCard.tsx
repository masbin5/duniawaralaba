import Link from "next/link";



type Props = {

slug:string;

name:string;

category:string;

investment:string;

outlet:string;

image:string;

};



export default function FranchiseCard({

slug,

name,

category,

investment,

outlet,

image

}:Props){



return (

<div

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





{/* LOGO AREA */}

<div

className="
h-48
bg-gray-50
flex
items-center
justify-center
p-8
"

>


<img

src={image}

alt={name}

className="
max-h-full
max-w-[180px]
object-contain
group-hover:scale-105
transition
"

/>



</div>









{/* CONTENT */}

<div

className="
p-5
"

>





{/* BADGE */}

<div

className="
inline-flex
items-center
bg-green-100
text-green-700
text-xs
font-semibold
px-3
py-1
rounded-full
"

>

✓ Terverifikasi

</div>







<h3

className="
mt-4
text-xl
font-bold
text-[#002B80]
"

>

{name}

</h3>






<p

className="
mt-1
text-sm
text-yellow-600
font-semibold
"

>

{category}

</p>









<div

className="
mt-5
space-y-2
"

>


<div

className="
flex
items-center
gap-2
text-sm
text-gray-600
"

>

<span>
💰
</span>

{investment}

</div>




<div

className="
flex
items-center
gap-2
text-sm
text-gray-600
"

>

<span>
🏪
</span>

{outlet}

</div>



</div>








<Link

href={`/franchise/${slug}`}

className="
block
mt-6
text-center
bg-[#002B80]
text-white
py-3
rounded-lg
font-semibold
hover:bg-[#003FA8]
transition
"

>

Lihat Detail

</Link>






</div>





</div>

)

}