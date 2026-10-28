import DetailsCard from '@/components/DetailsCard';
import { getNews } from '@/lib/data';
import React, { Suspense } from 'react';



export async function generateMetadata({ params }) {
  const { _id } = await params;
  const news = await getNews(_id);
  const article = news?.data?.[0];

  return {
    title: article?.title || "News Details",
    description: article?.details?.slice(0, 160) || "Read the latest news.",
  };
}


const NewsDetailsPage = async ({ params }) => {
    return (
        <div>
            <Suspense fallback={<p>Loading......</p>}>
                <DetailsCard params={params}></DetailsCard>
            </Suspense>
        </div>
    );
};

export default NewsDetailsPage;