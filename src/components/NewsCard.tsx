import Link from "next/link";


type NewsCardProps = {

slug:string;

title:string;

date:string;

excerpt:string;

};



export default function NewsCard({

slug,

title,

date,

excerpt

}:NewsCardProps){



return (

<Link

href={`/berita/${slug}`}

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


{/* LABEL */}


<div

className="
inline-flex
items-center
gap-2
bg-blue-50
text-[#002B80]
px-3
py-1
rounded-full
text-xs
font-semibold
"

>

📰 Berita

</div>






<h3

className="
mt-4
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







<p

className="
mt-3
text-xs
text-gray-400
"

>

{date}

</p>








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







<div

className="
mt-5
text-sm
font-semibold
text-yellow-600
"

>

Baca Berita →

</div>



</article>


</Link>

)

}