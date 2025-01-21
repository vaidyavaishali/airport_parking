import { Route, Routes } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Homepage/Homepage';
import AboutUs from './pages/AboutUsPage/AboutUs';
import TermsAndConditions from './pages/TermsAndConditionPage/TernsNCondition';
import PaymentPolicy from './pages/PrivacyPolicy/PaymentPrivacy';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import FAQ from './pages/FAQ/FAQ';
import ContactUs from './pages/ContactUsPage/ContactUs';
import BookingPage from './pages/BookingPage/BookingPage';
import ParkingList from './pages/ParkingList/ParkingList';
import Dashboard from './CMS/pages/Dashboard';
import FeedbackAndReviews from './CMS/pages/FeedbackAndReviews';
import ParkingSpaceManagement from './CMS/pages/PakingSpace/ParkingSpaceManagement';
import PaymentManagement from './CMS/pages/PaymentManagement/PaymentManagement';
import PromotionAndDiscounts from './CMS/pages/PromotionAndDiscounts';
import ReportAndAnalysis from './CMS/pages/ReportAndAnalysis';
import ReservationManagement from './CMS/pages/Booking/ReservationManagement';
import SecurityAndCompliance from './CMS/pages/SecurityAndCompliance';
import SettingsAndConfiguration from './CMS/pages/SettingsAndConfiguration';
import SupportAndCommunication from './CMS/pages/SupportAndCommunication';
import UserManagement from './CMS/pages/UserManagement';
import AddReservationForm from './CMS/pages/Booking/AddBooking';
import Invoice from './CMS/pages/PaymentManagement/Invoice';
import SignIn from './CMS/pages/loginPage';
import PaymentPage from './pages/paymentPage/Payment';
import { UserContext } from './CMS/contextApi/userContext';
import MeetAndGreet from './pages/Homepage/components/ServiceWeProvided/services/MeetAndGreet';
import ParkAndRide from './pages/Homepage/components/ServiceWeProvided/services/ParkAndRide';
import OnsiteParking from './pages/Homepage/components/ServiceWeProvided/services/OnsiteParking';
import axios from 'axios';
import { useEffect } from 'react';

function App() {


  return (
    <UserContext>
      <div className="App bg-gray-100">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/payment-policy" element={< PaymentPolicy />} />
          <Route path="/privacy-policy" element={< PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/parking-list/:airport" element={<ParkingList />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/payment/:bookingId" element={<PaymentPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/user-management" element={<UserManagement />} />
          <Route path="/dashboard/manual-booking" element={<AddReservationForm />} />

          <Route path="/dashboard/parking-space" element={<ParkingSpaceManagement />} />
          <Route path="/dashboard/reservations" element={<ReservationManagement />} />
          <Route path="/dashboard/analytics" element={<ReportAndAnalysis />} />
          <Route path="/dashboard/payments" element={<PaymentManagement />} />
          <Route path="/dashboard/payments/invoice" element={<Invoice />} />
          <Route path="/dashboard/support" element={<SupportAndCommunication />} />
          <Route path="/dashboard/promotions" element={<PromotionAndDiscounts />} />
          <Route path="/dashboard/feedback" element={<FeedbackAndReviews />} />
          <Route path="/dashboard/settings" element={<SettingsAndConfiguration />} />
          <Route path="/dashboard/security" element={<SecurityAndCompliance />} />

          <Route path='/meet-and-greet' element={<MeetAndGreet />} />
          <Route path="/park-and-ride" element={<ParkAndRide />} />
          <Route path='/onsite-parking' element={<OnsiteParking />} />

          <Route path="/login" element={<SignIn />} />
        </Routes>
      </div>
    </UserContext>
  );
}

export default App;

