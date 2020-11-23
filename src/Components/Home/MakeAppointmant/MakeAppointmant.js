import React from 'react';
import doctor from '../../../Asset/images/doctor.png';
import './MakeAppointmant.css';

const MakeAppointmant = () => {
    return (
        <section className="make-appointmant">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-done d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-primary text-uppercase">Appointmant</h5>
                        <h1 className="my-4">Make an Appointmant<br/>Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, harum.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointmant;