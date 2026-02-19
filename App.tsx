
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Brands from './components/Brands';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import BookingCalendar from './components/BookingCalendar';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import ArticlePage from './components/ArticlePage';
import HomePageSEO from './components/HomePageSEO';
import RepTallyPrivacy from './components/RepTallyPrivacy';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import PortfolioPage from './components/PortfolioPage';

const HomePage: React.FC = () => {
  return (
    <>
      <HomePageSEO />
      <Hero />
      <Brands />
      <ValueProps />
      <Testimonials />
      <ContactForm />
      <BookingCalendar />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/reptally/privacy" element={<RepTallyPrivacy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
