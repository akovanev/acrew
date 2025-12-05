import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-8 mt-auto border-t border-primary/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image 
                        src="/images/logo.png" 
                        alt="Logo" 
                        width={32} 
                        height={32}
                        className="rounded"
                    />
                </Link>
                <p className="text-sm text-text-secondary">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
