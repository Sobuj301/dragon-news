import { getAllCategories, getCategoriesWise } from '@/lib/data';
import React from 'react';
import SideBarCategories from './SideBarCategories';
import NewsCard from './NewsCard';
import RightSide from './RightSide';

const DetailsCategory = async ({ params }) => {
    const { id } = await params
    const categories = await getAllCategories()
    const { data } = await getCategoriesWise(id)
    return (
        <div className="container mx-auto grid grid-cols-12 gap-5 mt-5">
            <div className="col-span-3">
                <h2 className="text-md font-extrabold mb-5">all categories</h2>
                <SideBarCategories activeId={id} categories={categories.news_category} />
            </div>
            <div className="col-span-6 ">
                {
                    data.length > 0 ? data.map((item, index) => <NewsCard key={index} item={item}></NewsCard>) : <div>data not found</div>
                }
            </div>

            <div className="col-span-3">
              <RightSide />
            </div>

        </div>
    );
};

export default DetailsCategory;