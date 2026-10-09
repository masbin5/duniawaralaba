import { news } from "@/data/news";



export default async function NewsDetail({

params

}:{

params: Promise<{
slug:string
}>

}){


const { slug } = await params;



const article = news.find(

(item)=>

item.slug === slug

);






if(!article){


return (

<div

className="
text-center
py-20
text-gray-600
"

>

Berita tidak ditemukan

</div>

)


}






return (

<section

className="
space-y-8
"

>





{/* CATEGORY */}

<p

className="
text-yellow-600
font-semibold
"

>

{article.category}

</p>







{/* TITLE */}

<h1

className="
text-4xl
font-bold
text-[#002B80]
leading-tight
"

>

{article.title}

</h1>








{/* DATE */}

<p

className="
text-sm
text-gray-400
"

>

{article.date}

</p>









{/* IMAGE */}

<div

className="
h-[400px]
rounded-2xl
overflow-hidden
bg-gray-100
"

>


<img

src={article.image}

alt={article.title}

className="
w-full
h-full
object-cover
"

/>


</div>









{/* CONTENT */}

<div

className="
text-gray-700
leading-relaxed
space-y-5
"

>


<p>

{article.excerpt}

</p>





<p>

Perkembangan industri franchise di Indonesia terus
mengalami pertumbuhan dengan semakin banyaknya
brand yang menawarkan peluang kemitraan.

</p>





<p>

Sistem franchise memberikan keuntungan karena
calon investor dapat menjalankan bisnis dengan
konsep yang sudah dipersiapkan oleh pemilik brand.

</p>





<p>

Sebelum memilih franchise, penting untuk memahami
modal awal, sistem operasional, serta potensi
pengembangan bisnis agar keputusan investasi
menjadi lebih tepat.

</p>



</div>







</section>

)

}