import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-skyblue text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p> Appointment Booking</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Useful Links</h2>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/doctor">Doctors</a></li>
            <li><a href="/history">Appointments</a></li>
            <li><a href="contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-semibold mb-2">Contact Info</h2>
          <p>434 Linda Nairobi, Kenya</p>
          <p>Phone: +798840098</p>
          <p>Email: info@linda.com</p>
        </div>
      </div>
      <div className="border-t border-white mt-4 pt-4 text-center">
        <p>&copy; 2024 Linda. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
