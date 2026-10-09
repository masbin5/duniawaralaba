"use client";


import WebsiteLayout from "@/components/WebsiteLayout";

import { usePathname } from "next/navigation";

import { franchises } from "@/data/franchises";




export default function LayoutWrapper({

children

}:{

children: React.ReactNode

}){


const pathname = usePathname();


// hapus trailing slash kalau ada

const currentPath = pathname.replace(/\/$/, "");






// DETAIL FRANCHISE

const isFranchise = currentPath.startsWith("/franchise/");



const slug = currentPath.split("/")[2];



const franchise = franchises.find(

(item)=>item.slug === slug

);







return (

<WebsiteLayout


isFranchise={isFranchise}


franchiseData={

franchise

? {

slug: franchise.slug,

name: franchise.name,

category: franchise.category,

investment: franchise.investment,

outlet: franchise.outlet,

whatsapp: franchise.whatsapp

}

: undefined

}


>


{children}


</WebsiteLayout>

)


}