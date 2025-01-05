import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="h-20 transition-all duration-300" />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout