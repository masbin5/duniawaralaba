import { news } from "@/data/news";



export default async function BeritaDetail({

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




console.log("SLUG BERITA:", slug);

console.log("DATA NEWS:", news);






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
space-y-6
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
rounded-xl
overflow-hidden
bg-gray-100
h-[350px]
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

Perkembangan bisnis franchise terus menunjukkan
pertumbuhan positif di Indonesia. Banyak pelaku usaha
mulai memilih sistem franchise karena memiliki konsep
bisnis yang lebih terstruktur.

</p>





<p>

Dengan memilih brand yang tepat, calon investor dapat
membangun bisnis dengan risiko yang lebih terukur dan
peluang pengembangan bisnis yang lebih besar.

</p>





<p>

Sebelum memulai bisnis franchise, penting untuk memahami
sistem kerja, biaya investasi, serta dukungan yang diberikan
oleh pemilik brand.

</p>



</div>







</section>

)


}