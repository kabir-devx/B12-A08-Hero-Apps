import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#00172B] text-white mt-20">
      <div className="grid grid-cols-1 gap-10 p-10 mx-auto max-w-7xl sm:grid-cols-3">
        <div>
          <Link  to="/" className="flex items-center gap-2 mb-3">
            <img src="/logo.png" alt="logo" className="w-10 h-10" />
            <h1  className="text-xl font-bold">HERO.IO</h1>
          </Link>

          <p className="text-gray-400">
            A modern app store UI built with React and Tailwind.
          </p>
        </div>


        <div>
          <h6 className="mb-3 text-lg font-semibold text-gray-300">Navigation</h6>
          <ul className="space-y-2">
            <li><Link to="/" className="transition-colors duration-200 link link-hover">Home</Link></li>
            <li><Link to="/apps" className="transition-colors duration-200 link link-hover">Apps</Link></li>
            <li><Link to="/installation" className="transition-colors duration-200 link link-hover">Installation</Link></li>
          </ul>
        </div>


        <div>
          <h6 className="mb-3 text-lg font-semibold text-gray-300">Connect</h6>

          <div className="flex gap-5 mb-5 text-xl">
            <a className="hover:text-gray-300"><FaFacebookF /></a>
            <a className="hover:text-gray-300"><FaTwitter /></a>
            <a className="hover:text-gray-300"><FaInstagram /></a>
          </div>

          <a
            href="https://github.com/kabir-devx"
            target="_blank"
            className="inline-block px-5 py-2 btn hover: text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold"
          >
            Contribute on GitHub
          </a>
        </div>
      </div>

      <div className="py-5 text-sm text-center text-gray-400 border-t border-white/10">
        © {new Date().getFullYear()} HERO.IO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
