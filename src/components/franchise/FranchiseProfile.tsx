type FranchiseProfileProps = {

franchise:{
  
company:string;

investment:string;

outlet:string;

since:string;

category:string;

description:string;

}

}



export default function FranchiseProfile({

franchise

}:FranchiseProfileProps){



return (

<section

className="
space-y-6
"

>






{/* ABOUT */}

<div

className="
bg-white
rounded-2xl
border
border-gray-200
p-8
"

>


<h2

className="
text-2xl
font-bold
text-[#002B80]
"

>

Tentang Franchise

</h2>




<p

className="
mt-4
text-gray-600
leading-relaxed
"

>

{franchise.description}

</p>



</div>









{/* INFORMATION CARD */}


<div

className="
grid
grid-cols-1
md:grid-cols-2
gap-5
"

>



<InfoCard

title="Nama Perusahaan"

value={franchise.company}

/>



<InfoCard

title="Modal Minimal"

value={franchise.investment}

/>



<InfoCard

title="Jumlah Gerai"

value={franchise.outlet}

/>



<InfoCard

title="Berdiri Sejak"

value={franchise.since}

/>



</div>






</section>

)

}









function InfoCard({

title,

value

}:{

title:string;

value:string;

}){


return (

<div

className="
bg-white
rounded-2xl
border
border-gray-200
p-5
"

>


<p

className="
text-sm
text-gray-500
"

>

{title}

</p>



<p

className="
mt-2
font-bold
text-[#002B80]
text-lg
"

>

{value}

</p>



</div>

)

}