import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmarkCheck, CiShare2 } from 'react-icons/ci';

const NewsCard = ({ item }) => {
    const { number, author, title, thumbnail_url, details,_id } = item
    return (

        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl border border-base-200 p-5 space-y-4 mb-5">

            {/* Author & Actions Section */}
            <div className="flex justify-between items-center bg-base-200/50 p-3 rounded-xl">
                <div className="flex gap-3 items-center">
                    <Image
                        className="rounded-full ring ring-primary/20 object-cover"
                        src={author?.img}
                        alt={author?.name || "Author"}
                        width={45}
                        height={45}
                    />

                    <div>
                        <h2 className="font-semibold text-base text-base-content">
                            {author?.name}
                        </h2>
                        <p className="text-xs text-base-content/60">
                            {author?.published_date}
                        </p>
                    </div>
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-2">
                    <button className="btn btn-ghost btn-sm btn-circle text-base-content/70 hover:text-primary">
                        <CiBookmarkCheck className="text-xl" />
                    </button>

                    <button className="btn btn-ghost btn-sm btn-circle text-base-content/75 hover:text-primary">
                        <CiShare2 className="text-xl" />
                    </button>
                </div>
            </div>

            {/* Title */}
            <h2 className="card-title text-xl font-bold tracking-tight text-base-content hover:text-primary transition-colors">
                {title}
            </h2>

            {/* Thumbnail Image */}
            <figure className="w-full overflow-hidden rounded-xl bg-base-200">
                <Image
                    className="w-full h-96 object-cover object-top"
                    width={800}
                    height={500}
                    src={thumbnail_url}
                    alt={title || "News Thumbnail"}
                    sizes="100vw"
                />
            </figure>

            {/* Details Text */}
            <p className="text-base-content/75 text-sm leading-relaxed line-clamp-3">
                {details}
            </p>

            {/* View Details Button */}
            <div className="flex justify-end">
                <Link href={`/news/${_id}`}>
                    <button className="btn btn-primary btn-sm rounded-lg">
                        View Details
                    </button></Link>
            </div>

        </div>

    );
};

export default NewsCard;