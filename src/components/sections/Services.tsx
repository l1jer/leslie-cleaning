import React, { useState } from 'react'
import { SERVICES } from '../../utils/constants'

const Services: React.FC = () => {
    const [activeService, setActiveService] = useState<string | null>(null)

    return (
        <section id='services' className='bg-gray-50 py-16 md:py-24'>
            <div className='container'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                        Our Cleaning Services
                    </h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Comprehensive cleaning solutions for every space. Professional,
                        thorough, and tailored to your needs.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                    {SERVICES.map(service => (
                        <div
                            key={service.id}
                            id={service.id}
                            className='bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-100'
                        >
                            <button
                                onClick={() =>
                                    setActiveService(
                                        activeService === service.id ? null : service.id
                                    )
                                }
                                className='w-full text-left p-6 focus:outline-none hover:bg-gray-100 transition-colors'
                            >
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-xl font-semibold text-primary'>
                                        {service.title}
                                    </h3>
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-200 ${activeService === service.id ? 'rotate-180' : ''}`}
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M19 9l-7 7-7-7'
                                        />
                                    </svg>
                                </div>
                                <p className='mt-2 text-gray-600'>{service.description}</p>
                            </button>
                            <div
                                className={`transition-all duration-200 ease-out ${activeService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                            >
                                <div className='px-6 pb-6 grid grid-cols-1 gap-4'>
                                    {service.services.map(subService => (
                                        <div
                                            key={subService.id}
                                            className='flex items-start space-x-2 text-sm'
                                        >
                                            <span className='text-primary mt-1'>✔️</span>
                                            <div>
                                                <p className='font-medium'>{subService.title}</p>
                                                <p className='text-gray-600 text-xs'>{subService.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services