import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointmant from '../MakeAppointmant/MakeAppointmant';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedService />
            <MakeAppointmant />
            <Testimonials />
            <Blogs />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;