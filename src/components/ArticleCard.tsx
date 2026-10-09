import Link from "next/link";


type ArticleCardProps = {

slug:string;

title:string;

category:string;

date:string;

excerpt:string;

};



export default function ArticleCard({

slug,

title,

category,

date,

excerpt

}:ArticleCardProps){



return (

<Link

href={`/artikel/${slug}`}

className="
block
"

>


<article

className="
bg-white
border
border-gray-200
rounded-2xl
p-5
hover:shadow-lg
transition
group
"

>





{/* CATEGORY */}


<p

className="
text-xs
font-bold
text-yellow-600
uppercase
tracking-wide
"

>

{category}

</p>








{/* TITLE */}


<h3

className="
mt-3
text-lg
font-bold
text-[#002B80]
leading-snug
group-hover:text-[#003FA8]
transition
"

>

{title}

</h3>







{/* DATE */}


<p

className="
mt-3
text-xs
text-gray-400
"

>

{date}

</p>








{/* EXCERPT */}


<p

className="
mt-4
text-sm
text-gray-600
leading-relaxed
line-clamp-3
"

>

{excerpt}

</p>









{/* CTA */}


<div

className="
mt-5
text-sm
font-semibold
text-[#002B80]
"

>

Baca Selengkapnya →

</div>







</article>


</Link>

)

}