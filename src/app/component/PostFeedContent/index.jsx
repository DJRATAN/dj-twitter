import { ChartBarIcon, ChatBubbleBottomCenterTextIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/outline"
import { DotsHorizontal } from "heroicons-react"
import Image from "next/image"

function PostFeedContent({ post }) {
    return (
        <div className="flex p-3 cursor-pointer border-b border-gray-200">
            {/* user image */}
            <Image className="rounded-full h-11 w-11 mr-4"  alt="not loded"  src={post.userImg} height={50} width={50} />
            {/* right side */}
            <div className="">
                {/* Header */}
                <div className="flex justify-between items-center">
                    {/*post user Info */}
                    <div className="flex space-x-1 whitespace-nowrap items-center">
                        <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                        <span className="text-sm sm:text-[15px]">@{post.username}</span>
                        <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>

                    </div>
                    {/* dot icon */}
                    <DotsHorizontal className="h-10 hoverEffect w-10 hover:bg-sky-100 p-2 hover:text-sky-500" />
                </div>
                {/* post text */}
                <p className="text-grey-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>
                {/* post image */}
                {/* <Image src={post.img} height={500} width={500}></Image> */}
                <img className="mr-2 rounded-2xl" src={post.img} alt="" />
                {/* icons */}
                <div className="flex justify-between text-gray-500 p-2">
                    <ChatBubbleBottomCenterTextIcon className="h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                    <TrashIcon className="h-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
                    <HeartIcon className="h-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
                    <ShareIcon className="h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                    <ChartBarIcon className="h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                </div>
            </div>
        </div>
    )
}

export default PostFeedContent