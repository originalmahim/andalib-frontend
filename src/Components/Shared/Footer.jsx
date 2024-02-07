import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
          return (
            <div className='bg-[#f2f0fd]'>
          <div className="max-w-7xl mx-auto  text-xl">
          <footer className="footer p-10 text-black">
          <aside>
          {/* <img className="w-32" src={logo}  /> */}
          <h1 className='text-[30px] '>Andalib</h1>
          <p className=" text-[16px]">Elevate Your Style, Empower Your Journey. <br/> Curate your fashion story with our exquisite collection .<br/>Where elegance meets functionality .</p>
          <div className='flex items-center justify-center gap-2'>
          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <AiFillFacebook className='text-3xl text-pink-500 '></AiFillFacebook>
          </a>

          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaTwitterSquare className='text-3xl text-pink-500'></FaTwitterSquare>
          </a>
          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaWhatsappSquare className='text-3xl text-pink-500'></FaWhatsappSquare>
          </a>
          </div>
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
          <div className="flex flex-col-reverse items-center lg:justify-between  pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <div>
        <p className="text-[16px] text-black text-center">
        স্বত্ব © ২০২৩ - ২০২৪ আন্দালিব কর্তৃক সর্বস্বত্ব সংরক্ষিত
        </p>
            </div>
            
        <div className="flex items-center justify-center ">
        <img className='w-60' src="https://pbookbd.com/wp-content/uploads/2022/08/Online.svg" />
        </div>
      </div>
    </div>                            
     </div>
          );
};

export default Footer;