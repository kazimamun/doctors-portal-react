import React from 'react';
import featured from '../../../Asset/images/featured.png';

const FeaturedService = () => {
    return (
        <section className="featured-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exeptional Dental Care, on Your Terms</h1>
                        <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis labore ut nostrum. Ut, quos nobis in voluptatum molestias maxime neque magni fugiat alias corrupti iusto dolorum explicabo expedita impedit autem!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;