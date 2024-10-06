import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-300 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: About Us */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-black">About Us</h4>
            <p className="text-black">
              Scorpion Farmers is dedicated to helping farmers maximize their yields by providing data-driven insights.
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="font-bold text-lg mb-4"></h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-black hover:text-white">Home</a></li>
              <li><a href="/services" className="text-black hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-black hover:text-white">Contact Us</a></li>
              <li><a href="/about" className="text-black hover:text-white">About Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            {/* <h4 className="font-bold text-lg mb-4">Contact Us</h4> */}
            <p className="text-black">sly@gmail.com</p>
            <p className="text-black">Phone: +123-456-7890</p>
            <p className="text-black">Scorpion street</p>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex justify-between items-center">
          <p className="text-gray-400">&copy; 2024 Scorpion . All rights reserved.</p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-white">Facebook</a>
            <a href="#" className="text-black hover:text-white">Twitter</a>
            <a href="#" className="text-black hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
