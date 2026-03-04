'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Home, Globe, HelpCircle } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { href: '/', label: 'Home', icon: Home },
        { href: '/showcase', label: 'Showcase', icon: Globe },
        { href: '/faq', label: 'FAQ', icon: HelpCircle },
    ];

    return (
        <nav className="nav-container">
            <div className="nav-inner">
                <Link href="/" className="nav-logo">
                    ⚡ VibeBuild
                </Link>

                <div className="nav-links" style={mobileOpen ? { display: 'flex', flexDirection: 'column', position: 'absolute', top: 70, left: 0, right: 0, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', padding: '1rem', borderBottom: '1px solid rgba(200,210,255,0.35)', zIndex: 100 } : {}}>
                    {links.map(link => (
                        <Link
                            key={link.href + link.label}
                            href={link.href}
                            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            <link.icon size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                            {link.label}
                        </Link>
                    ))}
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
}
