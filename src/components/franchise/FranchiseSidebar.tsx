import Link from "next/link";
import { franchises } from "@/data/franchises";
import RightAds from "@/components/ads/RightAds";


type FranchiseSidebarProps = {

  slug:string;

  name:string;

  category:string;

  investment:string;

  outlet:string;

  whatsapp:string;

};





export default function FranchiseSidebar({

  slug,

  name,

  category,

  investment,

  outlet,

  whatsapp

}:FranchiseSidebarProps){



const message = encodeURIComponent(
`Halo, saya tertarik dengan franchise ${name}. Saya ingin mendapatkan informasi lebih lanjut mengenai peluang kemitraan.`
);




const otherFranchises = franchises.filter(

(item)=>item.slug !== slug

);






return (


<aside

className="
space-y-5
"

>





{/* CONTACT CARD */}


<div

className="
bg-gradient-to-br
from-[#002B80]
to-[#0055CC]
rounded-2xl
p-6
text-white
"

>



<h3

className="
text-xl
font-bold
"

>

Tertarik Franchise?

</h3>





<p

className="
text-sm
text-blue-100
mt-3
leading-relaxed
"

>

Dapatkan informasi lengkap mengenai
peluang kemitraan franchise ini.

</p>






<div

className="
mt-5
space-y-3
"

>


<Info

label="Kategori"

value={category}

/>



<Info

label="Investasi"

value={investment}

/>



<Info

label="Jumlah Gerai"

value={outlet}

/>



</div>







<Link

href={`https://wa.me/${whatsapp}?text=${message}`}

target="_blank"

className="
mt-6
block
w-full
text-center
bg-yellow-400
text-[#002B80]
py-3
rounded-lg
font-bold
hover:bg-yellow-300
transition
"

>

💬 Hubungi Franchise

</Link>




</div>










{/* ADS */}


<RightAds />









{/* FRANCHISE PILIHAN */}


<div

className="
bg-white
border
border-gray-200
rounded-xl
p-5
"

>


<h3

className="
font-bold
text-[#002B80]
mb-4
"

>

Franchise Pilihan

</h3>





<div

className="
space-y-3
"

>



{

otherFranchises
.slice(0,3)
.map((item)=>(


<Link

key={item.slug}

href={`/franchise/${item.slug}`}

className="
block
border-b
border-gray-100
pb-3
hover:text-yellow-600
transition
"

>


<p

className="
text-sm
font-semibold
text-[#002B80]
"

>

{item.name}

</p>



<p

className="
text-xs
text-gray-500
mt-1
"

>

{item.category}

</p>



</Link>


))


}



</div>




</div>





</aside>


)

}









function Info({

label,

value

}:{

label:string;

value:string;

}){


return (

<div>


<p

className="
text-xs
text-blue-200
"

>

{label}

</p>



<p

className="
font-semibold
"

>

{value}

</p>



</div>

)

}