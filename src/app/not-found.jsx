import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-100'>
            <h2>Not found page</h2>
            <Link href={"/"}>
                <button className='btn bg-amber-300'>Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;