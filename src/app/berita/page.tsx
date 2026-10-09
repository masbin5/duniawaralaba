import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";


export default function Berita(){


return (

<section>


<h1

className="
text-3xl
font-bold
text-[#002B80]
"

>
Berita Franchise
</h1>



<p

className="
mt-2
text-gray-600
"

>
Berita terbaru seputar bisnis, franchise, dan peluang usaha.
</p>




<div

className="
mt-8
space-y-6
"

>


{

news.map((item)=>(


<NewsCard

key={item.slug}

{...item}

/>


))


}


</div>



</section>


)

}