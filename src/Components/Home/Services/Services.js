import React from 'react';
import floride from '../../../Asset/images/floride.png';
import cavity from '../../../Asset/images/cavity.png';
import whitening from '../../../Asset/images/teeth-whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const serviceData =[
    {
        title:'Floride Treatement',
        image: floride
    },
    {
        title:'Cavity Filling',
        image: cavity
    },
    {
        title:'Teeth Whitening',
        image: whitening
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1cc7c1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service=><ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;