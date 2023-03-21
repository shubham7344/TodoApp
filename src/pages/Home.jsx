import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import banda from '../assets/banda.png';

function Home(props) {
    return (
        <div className="container-fluied h-100">
            <div className="row h-100">
            <div className="col lg-6 h-100 d-flex flex-column justify-content-center align-items-center bg-primary">
            <h1 className="display-4 text-uppercase text-center">An App To <br />Make Your Life<br/><span className="display-1">Easy</span></h1>
            <img className='img-fluid' src={banda} alt="photo"/>
            </div>
            <div className="col-lg-6 h-100 d-flex flex-column align-items-center justify-content-center">
            <div className="card w-75 border-0">
                <div className="card-header bg-white border-0">
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
                <div className="card-body">
                    <Outlet />
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Home;