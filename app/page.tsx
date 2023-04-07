import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Link href="/typography" />
      <h1 className=" bg-blue-500 text-green-500 inline-block ">
        Hello world!
      </h1>
      <h1 className="text-red-500 ">Hello2</h1>
      <h1 className="border-4 border-purple-700 inline-block ">Hello3</h1>
      <h1 className="text-[#32a89e] ">Custom color</h1>
      <h1 className="text-vuejs mb-2">Custom Color on Config</h1>
      <h1 className="text-xs lg:text-2xl">Text Size</h1>
    
    </>
  );
}
