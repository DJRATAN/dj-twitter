import Link from 'next/link'
import React from 'react'
function NewsSec({ article }) {
    return (
        <div className='flex justify-between items-center hover:bg-gray-200 rounded-xl px-4 py-2 space-x-1 cursor-pointer transition duration-200'>
            <div className='space-y-0.5 '>
                <Link href={article.url} target='_blank'>
                    <h6 className='text-sm font-bold'>{article.title}</h6>
                    <p className='text-xs font-medium'>{article.source.name}</p>
                </Link>
            </div>
            <div>
                <img width="70" height="70" className='rounded-xl' src={article.urlToImage} alt="not update" />
            </div>
        </div>
    )
}

export default NewsSec