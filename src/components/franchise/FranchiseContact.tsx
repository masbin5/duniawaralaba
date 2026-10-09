import Link from "next/link";


type Props = {

name:string;

whatsapp:string;

}



export default function FranchiseContact({

name,

whatsapp

}:Props){


const message = encodeURIComponent(
`Halo, saya tertarik dengan franchise ${name}. Saya ingin mendapatkan informasi lebih lanjut mengenai kemitraan.`
);



return (

<section

className="
mt-8
bg-gradient-to-br
from-[#002B80]
to-[#0055CC]
rounded-2xl
p-8
text-white
"

>



<h2

className="
text-2xl
font-bold
"

>

Tertarik Dengan Franchise Ini?

</h2>





<p

className="
mt-3
text-blue-100
leading-relaxed
"

>

Hubungi pemilik franchise untuk mendapatkan
informasi mengenai peluang kemitraan,
investasi, dan proses pendaftaran.

</p>






<Link

href={`https://wa.me/${whatsapp}?text=${message}`}

target="_blank"

className="
inline-flex
mt-6
bg-yellow-400
text-[#002B80]
px-8
py-3
rounded-lg
font-bold
hover:bg-yellow-300
transition
"

>

💬 Hubungi WhatsApp

</Link>





</section>

)

}