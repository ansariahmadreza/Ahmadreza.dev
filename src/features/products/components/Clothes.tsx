"use client"
import { MoveUp } from 'lucide-react';
import { MoveDown } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { allImg, useCartContext } from '@/shared';
import slugify from "slugify";
import Container from "@/app/(main)/Container";
import UseLocalStorage from './UseLocalStorage';
import Sort from '../sort/Sort';
import { ChangeEvent, useState } from 'react';
import { X } from 'lucide-react';

type filtersType = {
    id: number;
    imgBef: StaticImageData;
    imgAf: StaticImageData;
    discountRate: string;
    img_array: {
        id: number;
        img: StaticImageData;
    }[];
    slug: string;
    QtyProduct: {
        id: number;
        qty: number;
        size: string;
    }[];
    description: string;
    price: string;

}[]

const Clothes = () => {
    const { setFlagSort, flagSort } = useCartContext()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [minFilter, setMinFilter] = useState<string>()
    const [maxFilter, setMaxFilter] = useState<string>()
    const [flagFilter, setFlagFilter] = useState<boolean>(false)
    const [resultFilters, setResultFilters] = useState<filtersType | undefined>()

    ///paginate
    const page = 2 ///all pages
    const rows_per_page = Math.ceil(allImg.length / page)  ///calculate the number of items that should be displayed per page.
    const endIndex = rows_per_page * currentPage //the endpoint for displaying products on each page
    const startIndex = endIndex - rows_per_page //product display start point on each page
    const currentItemsSort = allImg.slice(startIndex, endIndex) //product information displayed on each page
    const totalPage = Math.ceil(allImg.length / rows_per_page)
    const pageNumbers = []

    for (let i = 1; i <= totalPage; i++) { //loop for iterating through page counts and  adding them to an array.
        pageNumbers.push(i)
    }
    ///filter
    const minPriceFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setMinFilter(e.target.value)
    }

    const maxPriceFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxFilter(e.target.value)
    }

    const handlerFilterPrice = () => {
        const itemFilters = allImg.filter(item => {
            const Price = parseInt(item.price.split("£")[1].trim()) //extracts the price from the string,
            // removes extraneous symbols and whitespace,and parses it into an integer.
            return Price >= parseInt(minFilter!) && Price <= parseInt(maxFilter!)
        });
        setResultFilters(itemFilters)
    }
    return (
        <div>
            <div className={`${flagSort ? "relative" : "hidden"} `}>
                <Sort />
            </div>

            {/* Filter */}
            <section className={`${flagFilter ? "relative" : "hidden"} `}>

                <div className={` absolute left-0  bg-neutral-300 transition h-[1000px] w-[200px] delay-300 z-50 `}>
                    <X onClick={() => { setFlagFilter(false) }} className="cursor-pointer float-right" />
                    {/* filterPrice */}
                    <section className='mt-20'>
                        <input type="number" onChange={(e) => { minPriceFilter(e) }} min={20} max={50} placeholder='minPriceFilter'
                            className='border-2 border-black outline-0 w-[150px]' />

                        <input type="number" onChange={(e) => { maxPriceFilter(e) }} min={20} max={50} placeholder='maxPriceFilter'
                            className='border-2 border-black outline-0 w-[150px]' />
                    </section>

                    <button onClick={() => { handlerFilterPrice() }} className='border bg-black text-white p-3 mt-10 cursor-pointer'>
                        Filter by Price
                    </button>

                    <button onClick={() => { location.reload() }} className='bg-black mt-10 cursor-pointer text-white p-2'>Remove price filter</button>
                </div>

            </section>
            <Container>
                <section>
                    <h1 className="font-bold mt-7 text-[25px]">Selling fast</h1>
                    <section className="mt-20 min-h-screen">
                        <div className="flex w-[1370px] justify-between items-center">
                            <div>
                                <button className=" cursor-pointer h-10 w-[110px] border border-neutral-300" onClick={() => { setFlagSort(true) }}>
                                    <span className="text-neutral-600 pl-2 float-left">Sort</span>
                                    <span className='float-right'>
                                        <MoveUp className="inline-block text-2xl h-[25px] mr-[-15px] font-extrabold " />
                                        <MoveDown className="inline-block text-2xl h-[25px] font-extrabold " />
                                    </span>
                                </button>

                                <button className="cursor-pointer h-10 w-[110px] border border-neutral-300 ml-2" onClick={() => { setFlagFilter(true) }}>
                                    <span className="text-neutral-600 pl-2 float-left">Fillter</span>
                                    <span className='float-right pr-2'>
                                        <SlidersHorizontal className="inline-block" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        <section className='mt-5 w-full gap-x-5 grid place-items-center grid-cols-4'>
                            {
                                resultFilters ? //remove pagination if the price filter is applied
                                    resultFilters.map((item) =>
                                        <div key={item.description} className='group relative w-[300px]  h-[450px]'>
                                            <Link href={`/clothes/${slugify(item.slug, { lower: true, strict: true })}`} >
                                                <Image src={item.imgBef} alt='imgbef' className='absolute cursor-pointer  opacity-100 group-hover:opacity-0' width={300} height={300} />
                                                <Image src={item.imgAf} alt='imgaf' className='absolute cursor-pointer opacity-0 group-hover:opacity-100' width={300} height={300} />
                                                <span className='text-rose-500 relative  text-[12px] tracking-wider bg-white'>{item.discountRate}</span>
                                            </Link>
                                            <UseLocalStorage id={item.id} />
                                            <p className='text-black text-[12px] absolute mt-[200px] left-0'>{item.description}</p>
                                            <span className='text-[12px] font-bold absolute mt-[182px] left-0'>{item.price}</span>
                                        </div>
                                    )
                                    :
                                    currentItemsSort.map((item) => //display product in normal mode
                                        <div key={item.description} className='group relative w-[300px]  h-[450px]'>
                                            <Link href={`/clothes/${slugify(item.slug, { lower: true, strict: true })}`} >
                                                <Image src={item.imgBef} alt='imgbef' className='absolute cursor-pointer  opacity-100 group-hover:opacity-0' width={300} height={300} />
                                                <Image src={item.imgAf} alt='imgaf' className='absolute cursor-pointer opacity-0 group-hover:opacity-100' width={300} height={300} />
                                                <span className='text-rose-500 relative  text-[12px] tracking-wider bg-white'>{item.discountRate}</span>
                                            </Link>
                                            <UseLocalStorage id={item.id} />
                                            <p className='text-black text-[12px] absolute mt-[200px] left-0'>{item.description}</p>
                                            <span className='text-[12px] font-bold absolute mt-[182px] left-0'>{item.price}</span>
                                        </div>
                                    )
                            }
                        </section>

                        <div className='flex justify-center items-center'>
                            {!resultFilters && pageNumbers.map((pageNumber) => (
                                <button key={pageNumber}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    className={`cursor-pointer border rounded-md px-3 mx-2 py-1  mt-[150px]
                                ${currentPage === pageNumber ? 'bg-neutral-400 text-black' : 'hover:bg-gray-400 hover:text-white'}`}>
                                    {pageNumber}
                                </button>
                            ))}
                        </div>

                    </section >
                </section>
            </Container>
        </div >
    )
}
export default Clothes;