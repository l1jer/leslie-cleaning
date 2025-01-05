import React from 'react'

const CLEANING_STATS = [
    { label: 'Weekly Clean', value: 35, colour: 'bg-blue-500' },
    { label: 'Fortnightly Clean', value: 42, colour: 'bg-green-500' },
    { label: 'Monthly Clean', value: 15, colour: 'bg-purple-500' },
    { label: 'Deep Clean', value: 8, colour: 'bg-yellow-500' },
    { label: 'Window Clean', value: 12, colour: 'bg-red-500' },
    { label: 'Carpet Clean', value: 6, colour: 'bg-indigo-500' },
    { label: 'End of Lease Clean', value: 4, colour: 'bg-pink-500' },
    { label: 'Office Clean', value: 18, colour: 'bg-orange-500' }
]

const CleaningFacts: React.FC = () => (
    <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Cleaning Stats</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Most popular cleaning services across our Canberra client base
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {CLEANING_STATS.map(({ label, value, colour }) => (
                    <div key={label} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div
                            className={`${colour} h-2`}
                            style={{ width: `${value}%` }}
                        />
                        <div className="p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{value}%</div>
                            <div className="text-gray-600 text-sm">{label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default CleaningFacts