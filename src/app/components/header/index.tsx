export default function Header() {
    return(
        <header className="flex justify-around pt-4 pl-10 pr-10">
            <div className="grow"><h1 className="font-bold text-2xl">MyStore</h1></div>
            <div className="flex-none mr-10">Увійти</div>
            <div className="flex-none">Кошик</div>
        </header>
    );
};