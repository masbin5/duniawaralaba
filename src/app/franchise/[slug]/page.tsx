import FranchiseHeader from "@/components/franchise/FranchiseHeader";
import FranchiseProfile from "@/components/franchise/FranchiseProfile";
import FranchiseBenefit from "@/components/franchise/FranchiseBenefit";
import ProposalViewer from "@/components/franchise/ProposalViewer";
import FranchiseContact from "@/components/franchise/FranchiseContact";

import { franchises } from "@/data/franchises";



export default async function FranchisePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const franchise = franchises.find(
    (item) => item.slug === slug
  );


  if (!franchise) {
    return (
      <div
        className="
        text-center
        py-20
        text-gray-600
        "
      >
        Franchise tidak ditemukan
      </div>
    );
  }


  return (
    <div className="space-y-8">

      {/* HEADER */}
      <FranchiseHeader
        name={franchise.name}
        category={franchise.category}
        banner={franchise.banner}
        logo={franchise.logo || franchise.image}
      />


      {/* PROFILE */}
      <FranchiseProfile
        franchise={franchise}
      />


      {/* BENEFIT */}
      <FranchiseBenefit
        benefits={franchise.benefits}
      />


      {/* PROPOSAL */}
      <ProposalViewer
        folder={franchise.proposalFolder}
        pages={franchise.proposalPages}
      />


      {/* CONTACT */}
      <FranchiseContact
        name={franchise.name}
        whatsapp={franchise.whatsapp}
      />

    </div>
  );
}