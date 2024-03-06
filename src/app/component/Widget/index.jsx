'use client'
import { SearchCircle, SearchCircleOutline, SearchOutline } from 'heroicons-react'
import React, { useState } from 'react'
import NewsSec from '../NewsSec'

function Widget({ newsResults }) {
    const [articleNumber, setArticleNumber] = useState(3);
    return (
        <div className='xl:w-[600px] hidden lg:inline ml-8 space-y-5'>
            <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
                <div className="flex items-center p-3 rounded-full bg-red-500 relative">
                    <SearchOutline className='h-5 z-50 text-gray-500' />
                    <input className='absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100' type="text" placeholder='Search Twitter' />
                </div>
            </div>
            <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
                <h4 className='font-bold text-xl px-4'>What's happening</h4>
                {newsResults.slice(0, articleNumber).map((item) => (
                    <NewsSec key={item.title} article={item} />
                ))}
                <div className="flex justify-between">
                    <button onClick={()=>setArticleNumber(articleNumber+5)} className='pl-4 pb-3 text-blue-300 hover:text-blue-400'>Show more</button>
                    {articleNumber >= 5 && <button onClick={()=>setArticleNumber(articleNumber-5)} className='pl-4 pb-3 text-blue-300 hover:text-blue-400'>Show Less</button>}
                </div>
            </div>
        </div>
    )
}

export default Widget