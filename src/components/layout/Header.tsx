import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { NAV_ITEMS } from '../../utils/constants'

const Header: React.FC = () => {
    // State for managing mobile menu and dropdown interactions
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuClosing, setIsMenuClosing] = useState(false)

    // Track scroll position to adjust header style
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Animate menu closing with a slight delay
    const handleCloseMenu = () => {
        setIsMenuClosing(true)
        setTimeout(() => {
            setIsMenuOpen(false)
            setIsMenuClosing(false)
        }, 300)
    }

    // Smooth scroll to section with header offset
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const headerHeight = isScrolled ? 64 : 80
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ease-out
                ${isScrolled
                    ? 'h-16 bg-white shadow-sm'
                    : 'h-24 bg-white'
                }
            `}
        >
            <div className="container h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo with responsive scaling */}
                    <Link
                        to="/"
                        className="flex items-center transition-transform duration-300 ease-out"
                        style={{
                            transform: isScrolled ? 'scale(0.8)' : 'scale(1)'
                        }}
                    >
                        <span className="font-bold text-2xl text-primary">
                            Leslie Cleaning
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                            className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors group"
                                        >
                                            <span>{item.name}</span>
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 ease-out group-hover:text-primary
                                                    ${activeDropdown === item.name ? 'rotate-180' : ''}
                                                `}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {/* Desktop Dropdown */}
                                        <div
                                            className={`absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2
                                                transition-all duration-200 ease-out transform origin-top
                                                ${activeDropdown === item.name
                                                    ? 'scale-100 opacity-100'
                                                    : 'scale-95 opacity-0 pointer-events-none'
                                                }
                                            `}
                                        >
                                            {item.dropdown.map((dropdownItem) => (
                                                <button
                                                    key={dropdownItem.name}
                                                    onClick={() => {
                                                        scrollToSection(dropdownItem.href.substring(1))
                                                        setActiveDropdown(null)
                                                    }}
                                                    className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                                                >
                                                    {dropdownItem.name}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => scrollToSection(item.href.substring(1))}
                                        className="text-gray-600 hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                )}
                            </div>
                        ))}
                        <a
                            href="tel:+61400000000"
                            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
                        >
                            Call Now
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => isMenuOpen ? handleCloseMenu() : setIsMenuOpen(true)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 transition-transform duration-300 ease-out"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{
                                transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Mobile Menu */}
                    {(isMenuOpen || isMenuClosing) && (
                        <div
                            className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden
                                transition-all duration-300 ease-out
                                ${isMenuClosing ? '-translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}
                            `}
                        >
                            <div className="py-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
                                {NAV_ITEMS.map((item) => (
                                    <div key={item.name}>
                                        {item.dropdown ? (
                                            <>
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                                    className="flex items-center justify-between w-full px-4 py-3 text-gray-600 hover:text-primary hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                    <svg
                                                        className={`w-4 h-4 transition-transform duration-200 ease-out
                                                            ${activeDropdown === item.name ? 'rotate-180' : ''}
                                                        `}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                <div
                                                    className={`bg-gray-50 overflow-hidden transition-all duration-200 ease-out
                                                        ${activeDropdown === item.name ? 'max-h-96' : 'max-h-0'}
                                                    `}
                                                >
                                                    {item.dropdown.map((dropdownItem) => (
                                                        <button
                                                            key={dropdownItem.name}
                                                            onClick={() => {
                                                                scrollToSection(dropdownItem.href.substring(1))
                                                                handleCloseMenu()
                                                            }}
                                                            className="block w-full text-left px-6 py-3 text-gray-600 hover:text-primary hover:bg-gray-100"
                                                        >
                                                            {dropdownItem.name}
                                                        </button>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() => {
                                                    scrollToSection(item.href.substring(1))
                                                    handleCloseMenu()
                                                }}
                                                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-primary hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <a
                                    href="tel:+61400000000"
                                    className="bg-primary block px-4 py-3 m-2 rounded-full text-white font-medium hover:bg-gray-50"
                                    onClick={handleCloseMenu}
                                >
                                    Call Now
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header