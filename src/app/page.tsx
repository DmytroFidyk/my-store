import Header from '@/app/components/header';
import { products } from '@/app/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header/>
      <main className="flex flex-wrap p-10">
        {products.map(product => {
          return (
            <div key={product.id} className="flex flex-col justify-center w-60 h-80 rounded-lg shadow-md overflow-hidden mt-4 mr-4">
              <div className="container flex justify-center items-center overflow-hidden h-40">
                <Image src={'/' + product.image} alt={product.productName} width={180} height={200}/>
              </div>
              <div className="flex pl-4 font-medium"><Link href={{pathname: "/details", query: {id: product.id}}}>{product.productName}</Link></div>
              <div className="flex pl-4 font-bold">{product.price} грн.</div>
              <button className="flex items-center justify-center font-bold w-50 h-10 m-4 bg-[#fde047] rounded-full">Купити</button>
            </div>
          )
        })}
      </main>
    </>
  );
}
