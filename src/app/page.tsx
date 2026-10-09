import FranchiseCard from "@/components/FranchiseCard";
import ArticleCard from "@/components/ArticleCard";
import EventSection from "@/components/EventSection";
import WelcomeCard from "@/components/WelcomeCard";
import HomeAds from "@/components/ads/HomeAds";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";
import { franchises } from "@/data/franchises";
import { articles } from "@/data/articles";



export default function Home() {


return (

<>





<WelcomeCard />







{/* FRANCHISE TERBARU */}
<HomeAds />
<section className="mt-10">


<h2

className="
text-xl
font-bold
text-[#002B80]
mb-5
"

>

Franchise Terbaru

</h2>

<div

className="
grid
grid-cols-1
md:grid-cols-2
gap-5
"

>


{

franchises
.slice(0,4)
.map((item,index)=>(


<FranchiseCard

key={index}

{...item}

/>


))

}


</div>



</section>









{/* ARTIKEL TERBARU */}


<section className="mt-10">


<h2

className="
text-xl
font-bold
text-[#002B80]
mb-5
"

>

Artikel Terbaru

</h2>







<div

className="
grid
grid-cols-1
md:grid-cols-2
gap-5
"

>


{

articles
.slice(0,2)
.map((item,index)=>(


<ArticleCard

key={index}

{...item}

/>


))

}



</div>





</section>



{/* BERITA TERBARU */}

<section className="mt-10">


<h2

className="
text-xl
font-bold
text-[#002B80]
mb-5
"

>

Berita Terbaru

</h2>




<div

className="
grid
grid-cols-2
gap-5
"

>


{

news.slice(0,4).map((item)=>(


<NewsCard

key={item.slug}

{...item}

/>


))


}


</div>



</section>





{/* EVENT */}

<section className="mt-10">

<EventSection />

</section>





</>

)

}