import Link from 'next/link';

export default function Header() {
    const isLoggedIn = false;
    return(
        <header className="flex justify-around pt-4 pl-10 pr-10">
            <div className="grow"><h1 className="font-bold text-2xl"><Link href="/">MyStore</Link></h1></div>
            <div className="flex-none mr-10"><Link href="/signin">Увійти</Link></div>
            {isLoggedIn && <div className="flex-none">Кошик</div>}
        </header>
    );
};