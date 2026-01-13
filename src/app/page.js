import Mainhome from "@/components/pages/home/Index";
import MainLayout from "@/components/templates/MainLayout";
import { Suspense } from "react";

export default function Home() {
  return (
   <div>
    <MainLayout>
      <Suspense fallback={<div className="p-10">Loading...</div>}>
      <Mainhome/>
      </Suspense>
    </MainLayout>
   </div>
  );
}
