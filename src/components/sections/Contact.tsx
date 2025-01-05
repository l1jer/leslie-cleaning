import React, { useState } from 'react'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // form submission logic here
        console.log('Form submitted:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section className="bg-gray-50">
            <div className="container section">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-600">
                            Get in touch with us for a free quote or to schedule your cleaning service.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                                    Service Required
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="house">House Cleaning</option>
                                    <option value="office">Office Cleaning</option>
                                    <option value="endoflease">End of Lease Cleaning</option>
                                    <option value="windows">Window Cleaning</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
