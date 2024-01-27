import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
const Footer = () => {
          return (
          <div className="max-w-7xl mx-auto  text-xl">
          <footer className="footer p-10  text-base-content">
          <aside>
          <img className="w-44" src="https://andalib.xyz/wp-content/uploads/2024/01/Yellow-and-Black-Modern-Streaming-Platform-Logo-2.png"  />
          <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
          </aside> 
          <nav>
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
          <div className="hidden lg:flex flex-col lg:justify-between  pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
        <p className="text-sm text-black">
          © Copyright 2023 Event Crafter Inc. All rights reserved.
        </p>
        <div className="hidden lg:flex items-center mt-4 space-x-4 sm:mt-0">

        <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaGithub className='text-2xl'></FaGithub>
          </a>

          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaTwitter className='text-2xl'></FaTwitter>
          </a>
          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaFacebook className='text-2xl'></FaFacebook>
          </a>
        </div>
      </div>
    </div>                            
          );
};

export default Footer;