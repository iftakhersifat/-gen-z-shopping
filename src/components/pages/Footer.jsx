import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-24">
      {/* Main Footer */}
      <footer className="bg-base-200 text-base-content p-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Services */}
          <div>
            <h6 className="footer-title text-lg font-bold mb-4 border-b-2 border-violet-400 inline-block">Services</h6>
            <div className="flex flex-col gap-2">
            <a className="link link-hover hover:text-violet-600">Branding</a>
            <a className="link link-hover hover:text-violet-600">Design</a>
            <a className="link link-hover hover:text-violet-600">Marketing</a>
            <a className="link link-hover hover:text-violet-600">Advertisement</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h6 className="footer-title text-lg font-bold mb-4 border-b-2 border-violet-400 inline-block">Company</h6>
            <div className="flex flex-col gap-2">
            <a className="link link-hover hover:text-violet-600">About us</a>
            <a className="link link-hover hover:text-violet-600">Contact</a>
            <a className="link link-hover hover:text-violet-600">Jobs</a>
            <a className="link link-hover hover:text-violet-600">Press kit</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h6 className="footer-title text-lg font-bold mb-4 border-b-2 border-violet-400 inline-block">Legal</h6>
            <div className="flex flex-col gap-2">
            <a className="link link-hover hover:text-violet-600">Terms of use</a>
            <a className="link link-hover hover:text-violet-600">Privacy policy</a>
            <a className="link link-hover hover:text-violet-600">Cookie policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <footer className="bg-base-200 border-t border-base-300 text-base-content px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <p className="text-sm">
              <h1 className="text-blue-700 font-bold text-2xl">Gen-Z Shopping</h1> <br />
              Trendy, fast, and personalized online shopping for the new generation.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a className="hover:text-blue-500 text-2xl transition-colors duration-200">
              <FaXTwitter />
            </a>

            <a className="hover:text-red-500 text-2xl transition-colors duration-200">
              <FaInstagram />
            </a>

            <a className="hover:text-blue-500 transition-colors duration-200 text-2xl">
              <FaFacebookF />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
