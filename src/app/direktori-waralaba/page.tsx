import { Suspense } from "react";
import DirektoriContent from "./DirektoriContent";

export default function DirektoriWaralabaPage() {
  return (
    <Suspense fallback={<DirektoriLoading />}>
      <DirektoriContent />
    </Suspense>
  );
}

function DirektoriLoading() {
  return (
    <section
      className="
      max-w-7xl
      mx-auto
      px-6
      py-10
      "
    >
      <div
        className="
        text-center
        py-16
        text-gray-500
        "
      >
        Memuat direktori waralaba...
      </div>
    </section>
  );
}