import Image from 'next/image'
import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid';
import { BellIcon, BookmarkIcon, ClipboardIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/react/24/outline';
import './style.css';
import { DotsCircleHorizontalOutline, DotsHorizontal } from 'heroicons-react';
import SideBarMenuItem from '../SideBarMenuItem';

function Sidebar() {
    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full'>
            {/* Twitter Logo */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image src="data:image/png;base64,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" height={60} width={60} ></Image>
            </div>
            {/* Menu */}
            <div className="mt-4 mb-2.5 xl:items-start">
                <SideBarMenuItem text="Home" active={true} Icon={HomeIcon} />
                <SideBarMenuItem text="Explore" Icon={HashtagIcon} />
                <SideBarMenuItem text="Notification" Icon={BellIcon} />
                <SideBarMenuItem text="Message" Icon={InboxIcon} />
                <SideBarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                <SideBarMenuItem text="Lists" Icon={ClipboardIcon} />
                <SideBarMenuItem text="Profile" Icon={UserIcon} />
                <SideBarMenuItem text="More" Icon={DotsCircleHorizontalOutline} />
            </div>
            {/* Button */}
            <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hidden xl:inline text-lg hover:brightness-95'>Tweet</button>
            {/* Mini-Profile */}
            <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start mt-auto">
                <Image className='h-10 w-10 rounded-full xl:mr-2' src="data:image/jpeg;base64,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" height={60} width={60}></Image>
                <div className='leading-5 hidden xl:inline'>
                    <h4 className='font-bold' >Ratan Prajapati</h4>
                    <p className='text-gray-500'>@DJRATAN1242</p>
                </div>
                <DotsHorizontal className='h-5 xl:ml-8 hidden xl:inline'></DotsHorizontal>
            </div>
        </div>
    )
}

export default Sidebar