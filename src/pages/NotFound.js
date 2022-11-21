import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='notFoundContent'>
                <h3>404 NotFound</h3>
                <NavLink exact to="/">
                    <i className="bi bi-house"></i>
                </NavLink>
            </div>
            
        </div>
    );
};

export default NotFound;