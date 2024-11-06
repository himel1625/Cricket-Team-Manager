import logofooter from '../assets/logo-footer.png';
const Footer = () => {
  return (
    <footer className="relative">
      <div className="container mx-auto px-4 ">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-300 rounded-lg p-8  text-center relative z-10 sm:h-[250px] Sm:pt-4 ">
          <h2 className="text-2xl font-extrabold mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-4 font-bold">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-4 rounded-l-lg "
            />
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-lg font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 top-[50%] sm:top-[50%]   ">
        <div className="bg-gray-900 text-white py-4">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between sm:gap-2 items-start px-2 sm:px-6 sm:pt-[13%] ">
            {/* About Us */}
            <div className="mb-6 md:mb-0 sm:w-[30%] pt-24 sm:pt-4" >
              <h3 className="text-lg font-bold mb-2">About Us</h3>
              <p className="text-gray-400 ">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="pb-6 ">
              <img src={logofooter} alt="logo" />
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Quick Links</h3>
              <ul>
                <li className="text-gray-400 hover:text-white cursor-pointer">
                  {' '}
                  Home
                </li>
                <li className="text-gray-400 hover:text-white cursor-pointer">
                  Services
                </li>
                <li className="text-gray-400 hover:text-white cursor-pointer">
                  {' '}
                  About
                </li>
                <li className="text-gray-400 hover:text-white cursor-pointer">
                  {' '}
                  Contact
                </li>
                <li className="text-gray-400 hover:text-white cursor-pointer">
                  Subscribe
                </li>
              </ul>
            </div>
            {/* Subscribe */}
            <div>
              <h3 className="text-lg font-bold mb-2">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-l-lg "
                />
                <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-lg font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="text-center mt-10 text-gray-500">
            <hr className="w-[95%] mx-auto pb-4" />
            &copy;2024 Your Company. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
