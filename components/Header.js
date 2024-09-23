import { UserButton } from '@clerk/nextjs';
import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { HiUser } from 'react-icons/hi2';

function Header() {
    return (
        <div className='p-5 pb-3 pl-20 border-b-[4px] border-gray-300 flex items-center justify-between'>
            <div className='flex flex-col items-start'>
                <h1 className='text-2xl font-bold uppercase'>Ridesharing App</h1>
                <h2 className='text-lg font-medium uppercase'>by BBHS</h2>
            </div>
            <div className='flex items-center gap-4'>
                <Link href="/sign-in"> {/* Link to Sign In Page */}
                    <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                        Authentic
                    </button>
                </Link>
                <UserButton/>
                <HiUser />
            </div>
        </div>
    );
}

export default Header;
