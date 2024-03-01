import Link from 'next/link';

export default function Authenticate() {
    return(
        <div>
            <Link href='/'>Home</Link>
            <Link href='/authenticate'>Authenticate</Link>
            <h1>Authenticate</h1>
        </div>
    );
};