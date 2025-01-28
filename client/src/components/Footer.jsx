import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="py-16 bg-teal-600 text-white">
                <div className="container mx-auto px-6">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        {/* Branding and Description */}
                        <div className="md:w-1/3">
                            <h2 className="text-5xl font-extrabold text-teal-100 mb-4">Home2Work</h2>
                            <p className="text-white">
                                We’re redefining what it means to renovate. Reno simplifies the chaos
                                and costs of construction by bringing design, sourcing, and vetted
                                contractors all under one roof.
                            </p>
                            <p className="mt-4 text-white">&copy; Home2Work 2025</p>
                        </div>


                        {/* Contact Information */}
                        <div className="md:w-1/3 mt-8 md:mt-0 text-right">
                            <p className="font-semibold">1 800 234 3432</p>
                            <p className="text-teal-100">hello@Home2Work.com</p>
                            <div className="mt-8 space-y-2">
                                <a href="#terms" className="block hover:text-teal-200">
                                    Terms of Use
                                </a>
                                <a href="#privacy" className="block hover:text-teal-200">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
