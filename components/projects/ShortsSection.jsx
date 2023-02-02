import React from 'react'
import { shortsThumb, shortsThumb1, shortsThumb2, shortsThumb3 } from './assets'
import ShortsCard from './ShortsCard'

const ShortsSection = () => {

    const data = [
        {
            title: 'Tales of the Seven Huts',
            date: 'Nov, 2021',
            image: shortsThumb,
            slug: "Tales of the Seven Huts"
        },
        {
            title: 'Reminiscence',
            date: 'Dec, 2020',
            image: shortsThumb2,
            slug: 'Reminiscence'
        },
        {
            title: 'A Riot of Colours',
            date: '23 Oct, 2021',
            image: shortsThumb3,
            slug: 'A Riot of Colours'

        },
        {
            title: 'Inside the Secret Sanctuary',
            date: '23 Oct, 2021',
            image: shortsThumb1,
            slug: 'Inside the Secret Sanctuary'
        }
    ]

    return (
        <div className=''>
            <div className='flex text-4xl font-semibold space-x-3 mt-20 md:mt-0 '>
                <div className='border-[4px] border-[#222222]'></div>
                <div>
                    Shorts
                </div>
            </div>
            <div className='space-y-3 mt-7 flex flex-row overflow-x-scroll md:flex-col'>

                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <ShortsCard title={item.title} date={item.date} image={item.image} slug={item.slug} />
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default ShortsSection