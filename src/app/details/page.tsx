'use client'
import Link from 'next/link';
import Header from '@/app/components/header';
import { products } from '@/app/data/products';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function Details() {
    const searchParams = useSearchParams();
    const id = Number.parseInt(searchParams.get('id') || '');

    let product;
    if (id) {
        product = products.find((product) => {return product.id === id});
    }

    return(
        <>
            <Header/>
            {product && (<div className="p-10">
                <Image src={'/' + product.image} alt={product.productName} width={300} height={340}/>
                <h1>{product.productName}</h1>
                <h2>{product.price}</h2>
                <button className="flex items-center justify-center font-bold w-52 h-10 m-4 bg-[#fde047] rounded-full">Купити</button>
            </div>)}
        </>
    );
};