import Link from 'next/link';
import Header from '@/app/components/header';

export default function SignInPage() {
    return (
        <>
            <Header/>
            <main className="flex items-center justify-center h-full p-10">
            <h1>Вхід</h1>
            <div className="flex flex-col items-center">
                <input type="email" className="w-52 h-10 border-2 border-sky-300 rounded-lg mb-4 pl-2" placeholder="Введіть е-пошту"/>
                <input type="password" className="w-52 h-10 border-2 border-sky-300 rounded-lg mb-4 pl-2" placeholder="Введіть Пароль"/>
                <button className="flex items-center justify-center font-bold w-52 h-10 m-4 bg-[#fde047] rounded-full">Увійти</button>
                <Link href="/signup">Немаєте профілю? Зареєструйтесь</Link>
            </div>
            </main>
        </>
    );
}; 