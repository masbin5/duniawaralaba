import Image from "next/image";


type ProposalViewerProps = {

  folder:string;

  pages:number;

}



export default function ProposalViewer({

  folder,

  pages

}:ProposalViewerProps){



const pageList = Array.from(
  {
    length:pages
  },
  (_,index)=>index+1
);



return (

<section
className="
mt-10
"
>


<h2
className="
text-2xl
font-bold
text-[#002B80]
mb-6
"
>
Proposal Franchise
</h2>




<div
className="
space-y-8
"
>


{
pageList.map((page)=>(


<div
key={page}
className="
bg-white
rounded-xl
overflow-hidden
shadow-md
border
border-gray-200
"
>


<Image

src={`/proposal/${folder}/page-${page}.jpg`}

alt={`Proposal halaman ${page}`}

width={1000}

height={1400}

className="
w-full
h-auto
"

/>


</div>


))
}


</div>


</section>

)

}