"use client"
import { IcartItemsProps } from '@/features/products';
import { allImg } from '@/shared';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import slugify from 'slugify';

const suggestions = [
    "jack-and-jones-eddie-loose-worker-jean-in-washed-brown",
    "asos-design-oversized-heavyweight-400gsm-hoodie-with-woven-badge-in-yellow",
    "jack-and-jones-loose-fit-jogger-in-grey-marl-in-scuba-style-fabric",
    "asos-design-cotton-twill-oversized-shirt-with-badge-in-brown",
    "carhartt-wip-clover-baseball-cap-in-white-and-brown",
    "carhartt-wip-adair-canvas-baseball-cap-in-black",
    "asos-design-penny-loafers-in-black-with-weave-detail",
    "asos-design-wool-look-harrington-jacket-in-beige"
]


const SearchItems = () => {

    const [dataSave, setDataSave] = useState<IcartItemsProps[]>()
    const [flagSearch, setFlagSearch] = useState(false)
    const Router = useRouter()

    const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (/^[A-Za-z]+$/.test(e.target.value)) { ///validate the use of english alphabet letters without any additional characters.
            const resultFilter = suggestions.filter(item => item.includes(e.target.value))
            const dataFind = allImg.filter(item => {
                return resultFilter.find(value => value === item.slug)
            });
            setDataSave(dataFind)
        } else {
            setDataSave(undefined)
        }
    };

    const findSearch = () => {
        if (!flagSearch) {
            dataSave!.map(item => {
                Router.push(`/clothes/${slugify(item.slug, { lower: true, strict: true })}`)
            })
            setFlagSearch(true)
        } else {
           return (<p>Your Path Was Wrong</p>)
        }
    }

    return (
        <div className='z-50'>
            <section>
                <div className='mx-15 w-[700px] h-10 relative'>
                    <label className='bg-white text-[#2d2d2d] flex  rounded-4xl '>
                        <input onChange={(e) => { handlerSearch(e) }} type="search"
                            placeholder="Search for items and brands" className="h-[39px] w-[700px] p-3 outline-0" />
                        <button>
                            <Search onClick={() => { findSearch() }} className='font-bold w-5 mr-1 cursor-pointer' />
                        </button>
                    </label>
                </div>

                {/* field search */}
                {<nav className='absolute'>
                    {dataSave?.map((item, index) =>
                        <ul key={index} className={`${dataSave.length !== undefined ? "flex" : "hidden"}  cursor-pointer flex-col justify-center 
                            items-center bg-white ml-24  text-black w-[630px]`} >
                            <Link target='_blank' href={`/clothes/${slugify(item.slug, { lower: true, strict: true })}`} referrerPolicy="no-referrer">
                                <li className='hover:bg-neutral-300 w-full transition duration-300 px-4 rounded-full ease-linear my-1'>
                                    {item.slug}
                                </li>
                            </Link>
                        </ul>
                    )}
                </nav>
                }
            </section>
        </div >
    )
};
export default SearchItems;