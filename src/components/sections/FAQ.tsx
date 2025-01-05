import React, { useState } from 'react'

const FAQ_ITEMS = [
    {
        question: 'What areas do you service in Canberra?',
        answer: 'We service all Canberra metropolitan areas and surrounding suburbs within 100km, including Queanbeyan, Murrumbateman, Yass, Bungendore, and more.',
    },
    {
        question: 'What are your service hours?',
        answer: 'Our cleaning services are available 7 days a week, from 7:00 AM to 8:00 PM. We can arrange cleaning times that suit your schedule.',
    },
    {
        question: 'How much does it cost to clean my house?',
        answer: 'Pricing varies based on the size of your home and specific cleaning requirements. Contact us for a detailed quote.',
    },
    {
        question: 'What cleaning supplies do you use?',
        answer: 'We use professional-grade, eco-friendly cleaning products that are safe for your family and pets. All cleaning equipment and supplies are provided by our team.',
    },
    {
        question: 'Are your cleaners insured and background checked?',
        answer: 'Yes, all our cleaners undergo thorough background checks and are fully insured. We maintain public liability insurance and workers compensation coverage.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, bank transfers, and cash payments.',
    },
    {
        question: 'Do I need to be home during the cleaning?',
        answer: 'No, you don\'t need to be present. Many of our clients provide a key or access instructions. We ensure secure key handling and strict privacy protocols.',
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'We require 24 hours notice for cancellations. Late cancellations may incur a fee. We understand emergencies happen and handle each case individually.',
    },
    {
        question: 'How long does a typical cleaning take?',
        answer: 'A standard clean for a 3-bedroom house typically takes 3-4 hours. Timing varies based on the size of your home and the level of cleaning required.',
    },
]

const FAQ: React.FC = () => {
    const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set())

    const toggleAccordion = (index: number) => {
        setActiveIndices(prev => {
            const newIndices = new Set(prev)
            if (newIndices.has(index)) {
                newIndices.delete(index)
            } else {
                newIndices.add(index)
            }
            return newIndices
        })
    }

    return (
        <section className="bg-gray-50">
            <div className="container py-12 md:py-20">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-sm text-center mb-10 max-w-2xl mx-auto">
                    Common questions about our cleaning services in Canberra
                </p>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {FAQ_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-md shadow-sm"
                            style={{ height: 'fit-content' }}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full px-4 py-3 flex justify-between items-start text-left ${activeIndices.has(index) ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-100  transition-colors duration-300`}
                            >
                                <span className="text-sm font-medium pr-8">
                                    {item.question}
                                </span>
                                <svg
                                    className={`w-4 h-4 flex-shrink-0 transform transition-transform duration-500 ${activeIndices.has(index) ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-200 ease-in-out ${activeIndices.has(index) ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="px-4 pt-2 pb-4 text-xs text-gray-600 bg-white">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ