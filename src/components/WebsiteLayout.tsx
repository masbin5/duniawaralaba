import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import FranchiseSidebar from "@/components/franchise/FranchiseSidebar";
import Hero from "@/components/Hero";
import TopAds from "@/components/ads/TopAds";


type WebsiteLayoutProps = {

  children: React.ReactNode;

  isFranchise?: boolean;

  franchiseData?: {

    slug:string;

    name:string;

    category:string;

    investment:string;

    outlet:string;

    whatsapp:string;

  };

};



export default function WebsiteLayout({

children,

isFranchise = false,

franchiseData

}:WebsiteLayoutProps){



return (

<>





{/* NAVBAR */}

<Navbar />





{/* HERO */}

<Hero />





{/* TOP ADS */}

<TopAds />







{/* BODY */}


<div

className="
max-w-7xl
mx-auto
px-6
py-8
"

>



<div

className="
grid
grid-cols-12
gap-6
"

>







{/* LEFT SIDEBAR */}


<aside

className="
hidden
lg:block
lg:col-span-3
"

>

<LeftSidebar />

</aside>









{/* MAIN CONTENT */}


<main

className="
col-span-12
lg:col-span-6
"

>

{children}

</main>









{/* RIGHT SIDEBAR */}


<aside

className="
hidden
lg:block
lg:col-span-3
"

>


{

isFranchise && franchiseData ? (


<FranchiseSidebar

slug={franchiseData.slug}

name={franchiseData.name}

category={franchiseData.category}

investment={franchiseData.investment}

outlet={franchiseData.outlet}

whatsapp={franchiseData.whatsapp}

/>


)

:

(

<RightSidebar />

)


}



</aside>







</div>


</div>








{/* FOOTER */}

<Footer />





</>

)

}