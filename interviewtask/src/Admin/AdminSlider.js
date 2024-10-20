import React from 'react';
import { NavLink } from 'react-router-dom';
 

const AdminSlider = () => {
  return (
    <div className="admin-slider">
      <section>
        <ul className="slider-menu">
          <li className="slider-item">
            <NavLink to="login" className="slider-link">
              Login
            </NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="Adminfeature" className="slider-link">
              Features
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AdminSlider;
