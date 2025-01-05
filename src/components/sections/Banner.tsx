import React from 'react'
import bannerImage from '../../images/leslie-cleaning-banner.webp'

const Banner: React.FC = () => {
    return (
        <section className="relative h-[85vh] sm:h-[90vh] flex items-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="container section relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Professional Cleaning Services You Can Trust
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        Expert cleaning solutions for your home and office.
                        Servicing all areas across Australia with quality and reliability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="tel:+61400000000"
                            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colours"
                        >
                            Call Us Today
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colours"
                        >
                            Send Us a Message
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner