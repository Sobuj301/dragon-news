import { getNews } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DetailsCard = async ({ params }) => {
    const { _id } = await params;
    const news = await getNews(_id)


    return (

        <div className='container mx-auto'>
            <h2 className="mb-5 text-2xl font-bold">
                News Details ({news?.data?.length || 0})
            </h2>

            <div className="space-y-5">
                {news?.data?.map((item) => (
                    <div
                        key={item._id}
                        className="card overflow-hidden border border-base-200 bg-base-100 shadow-md transition-shadow duration-300 hover:shadow-xl lg:card-side"
                    >
                        {/* Thumbnail */}
                        <figure className="w-full shrink-0 lg:w-2/5">
                            <Image
                                src={item.thumbnail_url}
                                alt={item.title}
                                width={800}
                                height={500}
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="h-auto w-full object-cover"
                            />
                        </figure>

                        {/* News Content */}
                        <div className="card-body gap-3">
                            <div className="flex flex-wrap items-center gap-2">
                                {item.others_info?.is_trending && (
                                    <span className="badge badge-error badge-outline">
                                        Trending
                                    </span>
                                )}

                                {item.others_info?.is_todays_pick && (
                                    <span className="badge badge-primary badge-outline">
                                        Todays Pick
                                    </span>
                                )}

                                <span className="badge badge-ghost">
                                    Category: {item.category_id}
                                </span>
                            </div>

                            <h2 className="card-title text-lg font-bold leading-relaxed md:text-xl">
                                {item.title}
                            </h2>

                            {/* Author Information */}
                            <div className="flex items-center gap-3">
                                <Image
                                    src={item.author.img}
                                    alt={item.author.name}
                                    width={44}
                                    height={44}
                                    sizes="44px"
                                    className="h-11 w-11 rounded-full object-cover"
                                />

                                <div>
                                    <p className="text-sm font-semibold">
                                        {item.author.name}
                                    </p>
                                    <p className="text-xs text-base-content/60">
                                        {item.author.published_date}
                                    </p>
                                </div>
                            </div>

                            <p className="line-clamp-3 text-sm leading-6 text-base-content/70">
                                {item.details}
                            </p>

                            {/* Rating and Views */}
                            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-base-200 pt-3">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-warning">★</span>
                                    <span className="font-semibold">
                                        {item.rating?.number}
                                    </span>
                                    <span className="text-base-content/60">
                                        {item.rating?.badge}
                                    </span>
                                </div>

                                <p className="text-sm text-base-content/60">
                                    <span className="font-semibold">
                                        {item.total_view}
                                    </span>{" "}
                                    views
                                </p>
                            </div>

                            <div className="card-actions justify-end">
                                <Link href={`/category/${item.category_id}`}>
                                    <button className="btn btn-primary btn-sm">
                                        Similar Category
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default DetailsCard;