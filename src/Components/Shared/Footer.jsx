import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import logo from './../../assets/footerlogo.png'
const Footer = () => {
          return (
            <div className='bg-black'>
          <div className="max-w-7xl mx-auto  text-xl">
          <footer className="footer p-10 text-white">
          <aside>
          <img className="w-32" src={logo}  />
          <p>Elevate Your Style, Empower Your Journey. <br/> Curate your fashion story with our exquisite collection .<br/>Where elegance meets functionality .</p>
          </aside> 
          <nav className='hidden lg:grid md:grid' >
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
          </nav> 
          <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
          </nav> 
          <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          </nav>
          </footer> 
          <div className="flex flex-col lg:justify-between  pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
        <p className="text-[16px] text-white text-center">
          © Copyright 2024 Andalib. All rights reserved.
        </p>
        <div className="flex items-center justify-center mt-4 space-x-4 sm:mt-0">

        <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaGithub className='text-2xl text-white'></FaGithub>
          </a>

          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaTwitter className='text-2xl text-white'></FaTwitter>
          </a>
          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaFacebook className='text-2xl text-white'></FaFacebook>
          </a>
        </div>
      </div>
    </div>                            
     </div>
          );
};

export default Footer;