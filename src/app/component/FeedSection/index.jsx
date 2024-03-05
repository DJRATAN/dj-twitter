import { SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'
import InputFeedSection from '../InputFeedSection'

function FeedSection() {
    return (
        <div className='border-l border-r xl:ml-[70px] xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl border-gray-200'>
            <div className="flex items-center justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-500">
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
                <div className="hoverEffect flex w-9 h-9 ml-auto items-center">
                    <SparklesIcon className='h-7' />
                </div>
            </div>
            <div>
                <InputFeedSection />
            </div>
        </div>
    )
}

export default FeedSection