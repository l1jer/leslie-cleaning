import React from 'react'

const ServiceMap: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide cleaning services in Canberra and surrounding areas within 100km radius,
                        including Queanbeyan, Murrumbateman, Yass, Bungendore, and more.
                    </p>
                </div>

                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207019.79372800877!2d149.01012785820315!3d-35.30966139999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164ca3b20b6aa1%3A0x4073f90a588b2ae0!2sCanberra%20ACT%2C%20Australia!5e0!3m2!1sen!2sus!4v1689913447227!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-96"
                        />
                    </div>

                    <div className="absolute top-4 right-4 bg-white p-4 max-sm:hidden rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2">Service Radius</h3>
                        <div className="flex items-center text-sm max-sm:text-xs text-gray-600">
                            <div className="w-4 h-4 rounded-full bg-primary/20 mr-2"></div>
                            <span>100km radius from Canberra CBD</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">
                            Belconnen<br />
                            Bruce<br />
                            Bungendore<br />
                            Canberra CBD<br />
                            Charnwood<br />
                            Chifley
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">
                            Gungahlin<br />
                            Hall<br />
                            Murrumbateman<br />
                            Queanbeyan<br />
                            Red Hill<br />
                            Sutton
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">
                            Tharwa<br />
                            Tuggeranong<br />
                            Weston Creek<br />
                            Woden Valley<br />
                            Wright<br />
                            Yass
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">
                            Braddon<br />
                            Dickson<br />
                            Fyshwick<br />
                            Kingston<br />
                            Manuka<br />
                            Turner
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceMap