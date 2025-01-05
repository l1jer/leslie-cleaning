import React from 'react'
import { NAV_ITEMS } from '../../utils/constants'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-4">Leslie Cleaning</h3>
                        <p className="mb-4 max-w-md mx-auto md:mx-0">
                            Professional cleaning services you can trust. Providing quality cleaning solutions
                            for homes and businesses across Australia.
                        </p>
                        <div className="space-y-2">
                            <p className="flex items-center justify-center md:justify-start">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <a href="tel:+61400000000" className="hover:text-white transition-colors">
                                    0400 000 000
                                </a>
                            </p>
                            <p className="flex items-center justify-center md:justify-start">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a href="mailto:info@lesliecleaningservices.com.au" className="hover:text-white transition-colors">
                                    info@lesliecleaningservices.com.au
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">House Cleaning</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">Office Cleaning</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">End of Lease Cleaning</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">Window Cleaning</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">Kitchen Cleaning</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <p className="text-sm">
                            © {currentYear} Leslie Cleaning Services. Built by <a href="https://jerryli.me" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Digolas Forge</a>. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="/privacy-policy" className="text-sm hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-sm hover:text-white transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer