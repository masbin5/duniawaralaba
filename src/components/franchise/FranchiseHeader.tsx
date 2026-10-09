type Props = { 

  name:string; 

  category:string; 

  banner:string; 

  logo:string; 

} 




export default function FranchiseHeader({ 

  name, 

  category, 

  banner, 

  logo 

}:Props){ 


return ( 

<div className="mb-8"> 





{/* BANNER */}

<div 

className="
relative
aspect-[8/3]
rounded-2xl
overflow-hidden
bg-gray-200
"

> 


<img

src={banner}

alt={name}

className="
w-full
h-full
object-contain
bg-black
"

/>





{/* OVERLAY */}

<div

className="
absolute
inset-0
bg-black/30
"

/>



</div>







{/* LOGO */}

<div

className="
relative
h-0
"

>


<div

className="
absolute
left-8
-translate-y-16
w-32
h-32
rounded-full
bg-white
border-4
border-white
shadow-lg
flex
items-center
justify-center
overflow-hidden
"

>


<img

src={logo}

alt={name}

className="
w-full
h-full
object-contain
"

/>


</div>


</div>









{/* TITLE AREA */}

<div

className="
mt-20
flex
items-start
justify-between
gap-5
"

>



<div>


<h1

className="
text-3xl
font-bold
text-[#002B80]
"

>

{name}

</h1>





<p

className="
mt-2
text-yellow-600
font-semibold
"

>

{category}

</p>



</div>









{/* VERIFIED */}

<div

className="
bg-green-100
text-green-700
px-4
py-2
rounded-full
font-semibold
text-sm
whitespace-nowrap
"

>

✓ Terverifikasi

</div>







</div>






</div>

)

}