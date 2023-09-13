import type { Metadata } from 'next'
import getAllInsta from '@/lib/getAllInsta'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'InstaData',

}

export default async function InstagramData() {
    const instaData: Promise<Insta[]> = getAllInsta() 
    const instaFeed = await instaData

    const content = (
        <div className="flex flex-wrap items-left justify-between space-y-5 p-3 mx-auto">
            {instaFeed.map((post) => (
                post.media_type == "VIDEO" ? (
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <video className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" controls width="400" height="400">
                            <source src={post.media_url} type="video/mp4"/>
                            Sorry, It seems there was an error loading this video.
                        </video>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.caption}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.timestamp}</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={post.media_url} alt="image not found" width={400}></img>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.caption}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.timestamp}</p>
                        </div>
                    </div>
                )
            ))} 
        </div>
    )
    return (
        content
    )
}