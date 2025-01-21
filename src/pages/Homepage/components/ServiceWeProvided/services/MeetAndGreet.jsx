import React, { useEffect } from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import CustomerReview from '../../CustomerReview/CustomerReview'
// import meetAndgreet from '../../../../../assets/Meet & Greek.svg'

const MeetAndGreet = () => {
useEffect(()=>{
    window.scrollTo(0, 0);
},[])

    return (
        <div className="bg-gray-200 min-h-screen">
            <Header />
            <header className=" text-yellow-500 py-6  text-center">
                {/* <h1 className="text-3xl font-bold">Flyaway Parking</h1> */}
                <h1 className="text-4xl font-bold text-center text-blue-900  mb-8">
                    Meet & Greet Airport <span className='text-orange-500'> Parking </span>  Services
                </h1>

            </header>

            <main className="max-w-5xl mx-auto pb-8 space-y-8">
                {/* <div className='flex justify-center'>
                    <div className='w-[60%]'> */}
                {/* Introduction Section */}
                <section className="bg-white p-6 rounded-lg w-[95%]">
                    <h2 className="text-2xl font-semibold text-blue-600">Introduction</h2>
                    <p className="mt-4 text-gray-700">
                        Traveling is exciting, but airport parking can be a hassle. Flyaway
                        Parking offers Meet & Greet airport parking services across major UK
                        airports, blending convenience, reliability, and affordability.
                    </p>
                </section>

                {/* What is Meet & Greet? */}
                <section className="bg-white p-6 rounded-lg w-[95%] mt-5">
                    <h2 className="text-2xl font-semibold text-blue-600">
                        What is Meet & Greet Airport Parking?
                    </h2>
                    <p className="mt-4 text-gray-700">
                        Meet & Greet is a premium service where you drive directly to the
                        terminal. A valet parks your car securely, and it’s returned to you
                        at the terminal upon your arrival.
                    </p>
                </section>
                {/* </div>

                    <div className='bg-slate-500 w-[40%] h-[350px]'>
                        <img src={meetAndgreet} alt="Meet and Greet" className='w-full h-full' />
                    </div>

                </div> */}



                {/* Why Choose Flyaway Parking */}
                <section className="bg-white p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-blue-600">
                        Why Choose Flyaway Parking?
                    </h2>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>✔️ Convenience: No queues or shuttles.</li>
                        <li>✔️ Secure Facilities: 24/7 monitored parking.</li>
                        <li>✔️ Affordable Luxury: Competitive rates for premium service.</li>
                        <li>✔️ Professional Service: Friendly and efficient valet team.</li>
                        <li>✔️ Nationwide: Services at all major UK airports.</li>
                    </ul>
                </section>

                {/* How it Works */}
                <section className="bg-white p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-blue-600">
                        How Flyaway Parking Works
                    </h2>
                    <ol className="mt-4 space-y-3 text-gray-700 list-decimal pl-5">
                        <li>Book your slot via the website or app.</li>
                        <li>Drive to the terminal, meet the valet, and hand over your car.</li>
                        <li>Travel stress-free, knowing your car is in secure facilities.</li>
                        <li>Upon return, call Flyaway, and your car will be waiting for you.</li>
                    </ol>
                </section>

                {/* Features */}
                <section className="bg-white  p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-blue-600">Features</h2>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>✔️ Seamless booking via website or app.</li>
                        <li>✔️ Real-time updates through SMS and email.</li>
                        <li>✔️ 24/7 availability for early or late flights.</li>
                        <li>✔️ Flexible packages for short or long-term parking.</li>
                    </ul>
                </section>
            </main>
            <CustomerReview />
            <Footer />
        </div>
    )
}

export default MeetAndGreet