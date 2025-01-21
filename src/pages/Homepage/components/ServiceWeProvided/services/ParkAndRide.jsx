import React, { useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import CustomerReview from '../../CustomerReview/CustomerReview';

const ParkAndRide = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="bg-gray-200 min-h-screen">
            <Header />
            <header className="py-6 text-center">
                <h1 className="text-4xl font-bold text-blue-900  mb-8">
                    Park & Ride Airport <span className='text-orange-500'> Parking </span>  Services
                </h1>
            </header>

            <main className="max-w-5xl mx-auto pb-8 space-y-8">
                {/* Introduction Section */}
                <section className="bg-white p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-blue-600">Introduction</h2>
                    <p className="mt-4 text-gray-700">
                        Flyaway Parking is committed to offering hassle-free, budget-friendly, and safe parking solutions at major UK airports. Our Park & Ride service ensures your journey starts and ends with ease, providing secure parking while you're away.
                    </p>
                </section>

                {/* What is Park & Ride? */}
                <section className="bg-white p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-blue-600">
                        What is Park & Ride Parking?
                    </h2>
                    <p className="mt-4 text-gray-700">
                        Park & Ride is an affordable parking solution where you park at a secure facility and take a complimentary shuttle to and from the airport terminal.
                    </p>
                    <ol className="mt-4 space-y-3 text-gray-700 list-decimal pl-5">
                        <li>Drive to our secure parking site near the airport.</li>
                        <li>Leave your vehicle in our monitored parking facility.</li>
                        <li>Take our shuttle service to the airport terminal.</li>
                        <li>Upon return, use our shuttle service to retrieve your vehicle.</li>
                    </ol>
                </section>

                {/* Why Choose Flyaway Parking */}
                <section className="bg-white p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-blue-600">
                        Why Use Flyaway Parking's Park & Ride Service?
                    </h2>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>✔️ Affordable: Budget-friendly alternative to on-site airport parking.</li>
                        <li>✔️ Secure Facilities: 24/7 surveillance, secure entry/exit points, and regular patrols.</li>
                        <li>✔️ Convenient Locations: Close proximity to major UK airports.</li>
                        <li>✔️ Reliable Shuttle Service: Frequent and spacious shuttles equipped for luggage.</li>
                        <li>✔️ Environmentally Friendly: Eco-friendly shuttle buses to reduce the carbon footprint.</li>
                        <li>✔️ Exceptional Customer Support: Round-the-clock professional assistance.</li>
                    </ul>
                </section>

                {/* How to Use Park & Ride */}
                <section className="bg-white p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-blue-600">Step-by-Step Guide</h2>
                    <ol className="mt-4 space-y-3 text-gray-700 list-decimal pl-5">
                        <li>Book your spot online or via phone for discounts.</li>
                        <li>Arrive at the parking facility 2–3 hours before your flight.</li>
                        <li>Park your car in our secure lot with assistance if needed.</li>
                        <li>Ride the shuttle to the terminal (10–15 minutes).</li>
                        <li>Upon return, contact us for a prompt shuttle pick-up.</li>
                    </ol>
                </section>

                {/* Features */}
                <section className="bg-white p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-blue-600">Features</h2>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>✔️ Clear pricing with no hidden fees.</li>
                        <li>✔️ Accessibility features for all travelers.</li>
                        <li>✔️ Sustainable practices, including energy-efficient facilities.</li>
                        <li>✔️ Reliable and punctual service every time.</li>
                    </ul>
                </section>

                {/* Airport Locations */}
                <section className="bg-white p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-blue-600">Locations</h2>
                    <p className="mt-4 text-gray-700">
                        Flyaway Parking offers Park & Ride services at the following airports:
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>✔️ London Heathrow Airport</li>
                        <li>✔️ London Gatwick Airport</li>
                        <li>✔️ Manchester Airport</li>
                        <li>✔️ Birmingham Airport</li>
                        <li>✔️ Edinburgh Airport</li>
                        <li>✔️ Glasgow Airport</li>
                        <li>✔️ Bristol Airport</li>
                        <li>✔️ Luton Airport</li>
                        <li>✔️ Stansted Airport</li>
                    </ul>
                </section>
            </main>
            <CustomerReview />
            <Footer />
        </div>
    );
};

export default ParkAndRide;
