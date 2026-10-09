import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";


export default function ArtikelPage(){


return (

<section>


<h1

className="
text-3xl
font-bold
text-[#002B80]
"

>
Artikel Bisnis
</h1>



<p

className="
mt-2
text-gray-600
"

>
Informasi dan inspirasi seputar franchise dan bisnis.
</p>





<div

className="
mt-8
space-y-6
"

>


{

articles.map((item)=>(


<ArticleCard

key={item.slug}

{...item}

/>


))

}



</div>


</section>

)


}