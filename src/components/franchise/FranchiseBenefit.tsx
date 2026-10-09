type FranchiseBenefitProps = {

benefits:string[];

};



export default function FranchiseBenefit({

benefits

}:FranchiseBenefitProps){



return (

<section

className="
mt-8
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

Keunggulan Franchise

</h2>







<p

className="
mt-3
text-gray-600
leading-relaxed
max-w-3xl
"

>

Dapatkan dukungan lengkap untuk menjalankan bisnis
franchise, mulai dari konsep usaha, operasional,
hingga pendampingan pengembangan bisnis.

</p>









<div

className="
mt-6
grid
grid-cols-1
md:grid-cols-2
gap-4
"

>



{

benefits.map((item,index)=>(


<div

key={index}

className="
bg-gray-50
rounded-xl
p-4
flex
items-center
gap-3
"

>



<span

className="
shrink-0
w-8
h-8
rounded-full
bg-yellow-400
text-[#002B80]
flex
items-center
justify-center
font-bold
text-sm
"

>

✓

</span>







<p

className="
text-sm
text-gray-700
font-medium
"

>

{item}

</p>






</div>


))


}



</div>







</section>

)

}