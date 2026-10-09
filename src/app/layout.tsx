import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";


const poppins = Poppins({
  subsets:["latin"],
  weight:[
    "300",
    "400",
    "500",
    "600",
    "700",
    "800"
  ],
});


export const metadata: Metadata = {
  title:"DuniaWaralaba",
  description:"Platform peluang bisnis franchise",
};



export default function RootLayout({

children,

}:Readonly<{

children:React.ReactNode;

}>) {


return (

<html lang="en">

<body className={poppins.className}>

<LayoutWrapper>

{children}

</LayoutWrapper>

</body>

</html>

)

}