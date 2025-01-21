import React, { useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import CustomerReview from '../../CustomerReview/CustomerReview';

const OnsiteParking = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Onsite Airport <span className='text-orange-500'> Parking </span>  Services
        </h1>
      </header>

      <main className="max-w-5xl mx-auto pb-8 space-y-8">
        
        {/* Introduction Section */}
        <section className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-600">Introduction</h2>
          <p className="mt-4 text-gray-700">
            Flyaway Parking is your trusted partner for hassle-free onsite airport parking services. Whether traveling for business or leisure, our convenient parking solutions are designed to enhance your journey from start to finish.
          </p>
        </section>

        {/* Why Choose Onsite Parking? */}
        <section className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-600">
            Why Choose Flyaway's Onsite Airport Parking?
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>
              <strong>✔️ Prime Location:</strong> Our parking facilities are located within the airport premises, ensuring minimal walking distance to terminals. No shuttles or additional transportation are required.
            </li>
            <li>
              <strong>✔️ Time-Saving Convenience:</strong> Skip the long waits and complicated directions to remote parking lots. Save time, especially for early morning flights or tight schedules.
            </li>
            <li>
              <strong>✔️ 24/7 Accessibility and Security:</strong> Accessible around the clock, our lots are equipped with CCTV surveillance, ample lighting, and regular patrolling, ensuring your vehicle’s safety.
            </li>
            <li>
              <strong>✔️ Affordable Rates:</strong> Competitive pricing for both short-term and long-term parking needs without compromising on convenience.
            </li>
            <li>
              <strong>✔️ Seamless Booking Process:</strong> Reserve your space in advance using our user-friendly website or app for a stress-free experience.
            </li>
          </ul>
        </section>

        {/* Experience Stress-Free Travel */}
        <section className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-600">
            Experience Stress-Free Travel with Flyaway
          </h2>
          <p className="mt-4 text-gray-700">
            Say goodbye to the hassles of offsite parking and lengthy commutes. Flyaway’s onsite airport parking services provide a blend of comfort, security, and efficiency to ensure your journey begins on the right note.
          </p>
          <p className="mt-4 text-gray-700">
            Book your spot today and experience the Flyaway difference. Let us take care of your parking needs so you can focus on what truly matters: enjoying your trip.
          </p>
        </section>
      </main>

      <CustomerReview />
      <Footer />
    </div>
  );
};

export default OnsiteParking;
