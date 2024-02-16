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
          <p className=" text-[16px]">Hotline: +88015 8575 3020 <br /> support@andalib.xyz <br />
          351/4, kandapara, Jatrabari, Dhaka-1200, Bangladesh</p>
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
          <div className=" w-14 h-2">
          <hr className="border-pink-500 border-2 rounded-full" />
        </div> 
          <a href="/trackorder" className="link link-hover">Track Order</a>
          <a href="/complain" className="link link-hover">I Have a Complain</a>
          <a className="link link-hover">Career Oppurtunity</a>
          <a className="link link-hover">FAQ</a>
          </nav> 
          <nav className='lg:grid md:grid'>
          <header className="footer-title">Quick Links</header>
          <div className=" w-14 h-2">
          <hr className="border-pink-500 border-2 rounded-full" />
        </div>  
          <a href="/" className="link link-hover">Home</a>
          <br className='lg:hidden md:hidden' />
          <a href="/shop" className="link link-hover">Shop</a>
          <br className='lg:hidden md:hidden' />
          <a className="link link-hover">About us</a>
          <br className='lg:hidden md:hidden' />
          <a className="link link-hover">Contact</a>
          </nav> 
          <nav className='lg:grid md:grid'>
          <header className="footer-title">Legal</header>
          <div className=" w-10 h-2">
          <hr className="border-pink-500 border-2 rounded-full" />
        </div>  
          <a href="/refund" className="link link-hover">Return Policy</a>
          <br className='lg:hidden md:hidden' />
          <a className="link link-hover">Privacy policy</a>
          <br className='lg:hidden md:hidden' />
          <a className="link link-hover">Terms & Conditions</a>
          </nav>
            </div> 
          </footer> 
          <div className="flex flex-col-reverse items-center lg:justify-between  pt-5 pb-10 border-t border-black sm:flex-row">
            <div>
        <p className="text-[16px] text-black text-center hidden lg:flex">
        আন্দালিব © ২০২৩ – ২০২৪ | Developed By  <a href="https://tareqazizmahim.netlify.app/">Tareq Aziz Mahim</a> 
        </p>
        <p className="text-[16px] text-black text-center lg:hidden md:hidden">
        আন্দালিব © ২০২৩ – ২০২৪ <br /> Developed By <a href="https://tareqazizmahim.netlify.app/">Tareq Aziz Mahim</a> 
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