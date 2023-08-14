import {
    FaFacebookF,
    FaHome,
    FaInstagramSquare,
    FaLinkedinIn,
    FaTwitter,
    FaRegEnvelope,
    FaYoutube,
    FaPhoneAlt,
    FaAngleRight,
  } from "react-icons/fa";
  import './Footer.css'
  
  const Footer = () => {
    return (
      <div className="w-full relative">
        <div className="mt-60 md:mt-32">
          {/* Form section */}
          <div className="flex justify-center">
            <div className="bg-gradient w-10/12 mx-auto rounded-2xl absolute -top-60 md:-top-28">
              <div>
                <div className="flex flex-col md:flex-row justify-evenly  p-8">
                  <div className="text-white md:w-8/12 p-4">
                    <h1 className="text-4xl font-bold mb-2">
                      Subscribe us for the latest special offers
                    </h1>
                    <p>
                    Discover classic & new menu items, find deals and enjoy
                    </p>
                  </div>
                  <div className="input-field p-1 md:w-4/12">
                    <input type="text" placeholder="Enter Email" className="input w-full" />{" "}
                    <br />
                    <button className="btn bg-yellow-600 hover:bg-yellow-700 text-white btn-md w-full">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form section end */}
  
          <footer className="footer p-12  pt-36 text-white bg-[#000] text-lg">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-white">
                <span className="font-bold text-2xl">Working Hours</span>
                <hr className="w-1/2 h-[3px] bg-yellow-600 my-3" />
                <div className="flex items-center">
                  <FaAngleRight />
                  <a className="link link-hover">Mon - Fri: 08:00 - 22:00</a>
                </div>
                <div className="flex items-center">
                  <FaAngleRight />
                  <a className="link link-hover">Sat - Sun: 10:00 - 23:00</a>
                </div>
              </div>
  
              <div className="text-white">
                <span className="font-bold text-2xl">Quick Links</span>
                <hr className="w-1/2 h-[3px] bg-yellow-600 my-3" />
                <div className="flex items-center">
                  <FaAngleRight />
                  <a className="link link-hover">Blog</a>
                </div>
                <div className="flex items-center">
                  <FaAngleRight />
                  <a className="link link-hover">Events and Contest</a>
                </div>
                <div className="flex items-center">
                  <FaAngleRight />
                  <a className="link link-hover">Contact Us</a>
                </div>
              </div>
  
              <div className="text-white">
                <span className="font-bold text-2xl">Our Menu</span>
                <hr className="w-1/2 h-[3px] bg-[#D1A054] my-3" />
                <div className="flex items-center">
                  <FaAngleRight />
                  <a className="link link-hover">Salad</a>
                </div>
                <div className="flex items-center">
                  <FaAngleRight />
                  <a className="link link-hover">Pizza</a>
                </div>
                <div className="flex items-center">
                  <FaAngleRight />
                  <a className="link link-hover">Soap</a>
                </div>
                <div className="flex items-center">
                  <FaAngleRight />
                  <a className="link link-hover">Desserts</a>
                </div>
                <div className="flex items-center">
                  <FaAngleRight />
                  <a className="link link-hover">Drinks</a>
                </div>
              </div>
  
              <div className="text-white">
                <span className="font-bold text-2xl">Contact Us</span>
                <hr className="w-1/2 h-[3px] bg-gradient my-3" />
                <div className="flex items-center gap-x-2">
                  <FaHome className="text-4xl p-2 bg-gradient rounded-xl text-white"></FaHome>
                  <a className="link link-hover">
                  4th Floor,Space No-68 <br /> Mirpur-1, Dhaka, Bangladesh
                  </a>
                </div>
                <div className="flex items-center gap-x-2">
                  <FaRegEnvelope className="text-4xl p-2 bg-gradient rounded-xl text-white"></FaRegEnvelope>
                  <a className="link link-hover">support@flavourfly.com</a>
                </div>
                <div className="flex items-center gap-x-2">
                  <FaPhoneAlt className="text-4xl p-2 mt-2 bg-gradient rounded-xl text-white"></FaPhoneAlt>
                  <a className="link link-hover">+8801617854906</a>
                </div>
                <div className="flex text-4xl gap-x-4 relative mt-4">
                  <FaFacebookF className="bg-gradient cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaFacebookF>
                  <FaInstagramSquare className="bg-gradient cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaInstagramSquare>
                  <FaTwitter className="bg-gradient cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaTwitter>
                  <FaYoutube className="bg-gradient cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaYoutube>
                  <FaLinkedinIn className="bg-gradient cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaLinkedinIn>
                </div>
              </div>
            </div>
          </footer>
        </div>
  
        <div className="p-8 bg-gradient text-base-content">  
            <p className="text-center text-lg text-white">Copyright © 2023 FlavourFly. All Rights Reserved</p>  
        </div>
  
      </div>
    );
  };
  
  export default Footer;