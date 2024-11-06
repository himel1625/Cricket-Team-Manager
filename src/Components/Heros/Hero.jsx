import PropTypes from 'prop-types';
import bannerImage from '../assets/banner-main.png';
import backgroundImage from '../assets/bg-shadow.png';
const Hero = ({ HandleAddAmount }) => {
  return (
    <div className="mt-10 relative  bg-black h-auto ">
      <div
        className="object-cover  w-auto h-[300px] sm:h-auto   "
      >
        <img src={backgroundImage} alt="backgroundImage" />
      </div>

      <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          className="object-cove  w-[150px] sm:w-auto pb-3 sm:pb-6"
          src={bannerImage}
          alt="bannerImage"
        />

        <div className="w-[430px] sm:w-screen ">
          <h1
            className="text-white font-extrabold text-xl sm:text-2xl
          sm:w-full sm:mx-auto sm:flex sm:items-center sm:justify-center
          "
          >
            Assemble Your Ultimate Dream 11 Cricket Team Beyond Boundaries
            Beyond
          </h1>
          <p className="text-white font-bold pt-3 sm:mx-auto sm:flex sm:items-center sm:justify-center">
            Beyond Boundaries Beyond Limits
          </p>

          <div className="flex items-center justify-center pt-3">
            <button
              onClick={HandleAddAmount}
              className="bg-buttonColor btn text-pColor font-extrabold text-lg  "
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Hero.propTypes = {
  HandleAddAmount: PropTypes.func.isRequired,
};
export default Hero;
