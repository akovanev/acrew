import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'About', href: '/about' }
];

export function Header() {
    return (
        <nav className="flex items-center gap-8 pt-6 pb-12 sm:pt-12 md:pb-16">
            <Link href="/" className="flex items-center gap-3">
                <Image 
                    src="/images/logo.png" 
                    alt="Logo" 
                    width={50} 
                    height={50}
                    className="rounded-lg"
                />
            </Link>
            <ul className="flex gap-6">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href} className="nav-link">
                            {item.linkText}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
