import Link from 'next/link';

export default function Home() {
    return (
        <div>
          <Link href='/'>Home</Link>
          <Link href='/authenticate'>Authenticate</Link>
          <h1>Home</h1>
        </div>
  );
}
