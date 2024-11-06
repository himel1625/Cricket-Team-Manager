import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
const Navbar = ({ Amount }) => {
  return (
    <div className="w-full mx-2 h-24 sticky top-0 z-10 backdrop-filter backdrop-blur-lg flex items-center justify-between px-4 sm:px-6 pt-5 ">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="flex gap-4 items-center">
        <div className="hidden sm:block cursor-pointer">
          <div className="flex gap-2">
            <p className="font-bold text-pColor text-lg">Home</p>
            <p className="font-bold text-pColor text-lg">Fixture</p>
            <p className="font-bold text-pColor text-lg">Teams</p>
            <p className="font-bold text-pColor text-lg">Schedules</p>
          </div>
        </div>

        <div className="border border-white rounded-lg">
          <div className="font-extrabold text-lg text-pColor bg-white rounded-md px-4 py-3 shadow-md">
            {Amount} Coin 🪙
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  Amount: PropTypes.string.isRequired,
};
export default Navbar;
