import DetailsCategory from "@/components/DetailsCategory";
import { Suspense } from "react";

const CategoryDetails = async ({ params }) => {

  return (
     <Suspense fallback={<div>Loading category...</div>}>
       <DetailsCategory params={params}  />
    </Suspense>
  );
};

export default CategoryDetails;
