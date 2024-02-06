import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import logo from './../../assets/footerlogo.png'
const Footer = () => {
          return (
            <div className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
          <div className="max-w-7xl mx-auto  text-xl">
          <footer className="footer p-10 text-black">
          <aside>
          {/* <img className="w-32" src={logo}  /> */}
          <h1 className='text-[30px] '>Andalib</h1>
          <p>Elevate Your Style, Empower Your Journey. <br/> Curate your fashion story with our exquisite collection .<br/>Where elegance meets functionality .</p>
          </aside>
          <div className='grid grid-flow-col lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-16'>
          <nav className='hidden lg:grid md:grid' >
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
          </nav> 
          <nav className='lg:grid md:grid'>
          <header className="footer-title">Quick Links</header> 
          <a className="link link-hover">About us</a>
          <br className='lg:hidden md:hidden' />
          <a className="link link-hover">Contact</a>
          <br className='lg:hidden md:hidden' />
          <a className="link link-hover">Jobs</a>
          <br className='lg:hidden md:hidden' />
          <a className="link link-hover">Press kit</a>
          </nav> 
          <nav className='lg:grid md:grid'>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a>
          <br className='lg:hidden md:hidden' />
          <a className="link link-hover">Privacy policy</a>
          <br className='lg:hidden md:hidden' />
          <a className="link link-hover">Cookie policy</a>
          </nav>
            </div> 
          </footer> 
          <div className="flex flex-col-reverse lg:justify-between  pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
        <p className="text-[16px] text-black text-center">
        স্বত্ব © ২০২৩ - ২০২৪ আন্দালিব কর্তৃক সর্বস্বত্ব সংরক্ষিত
        </p>
        <div className="flex items-center justify-center mt-4 mb-4 space-x-4 sm:mt-0">

        <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaGithub className='text-2xl text-black'></FaGithub>
          </a>

          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaTwitter className='text-2xl text-black'></FaTwitter>
          </a>
          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaFacebook className='text-2xl text-black'></FaFacebook>
          </a>
        </div>
      </div>
    </div>                            
     </div>
          );
};

export default Footer;