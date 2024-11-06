import PropTypes from 'prop-types';
import { GrUserManager } from 'react-icons/gr';
import { IoFlagSharp } from 'react-icons/io5';

const PlayerCard = ({ players, HandleChoosePlayers }) => {
  const { image, name, country, role, biddingPrice, battingType } = players;
  return (
    <div>
      <div className="max-w-lg rounded-xl overflow-hidden shadow-2xl border p-4 w-[90%] mx-auto mt-10 mb-10 bg-white">
        {/* Image Placeholder */}
        <div className="pb-6">
          <img
            className="object-cover w-full h-[200px] rounded-xl"
            src={image}
            alt="img"
          />
        </div>

        <h2 className="text-2xl font-extrabold flex">
          <GrUserManager />
          {name}
        </h2>
        {/* Player Details */}

        <div
          className="text-center mb-4 flex
      items-center justify-between "
        >
          <p className="text-gray-500 flex items-center font-bold">
            <IoFlagSharp />
            {country}
          </p>
          <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-lg font-bold mt-2 ">
            {role}
          </span>
        </div>

        <hr className='pb-2' />
        {/* Additional Info */}
        <div className="text-sm text-gray-700">
          <p className="flex justify-between font-bold">
            <span>Rating</span>
            <span>{battingType}</span>
          </p>
          <p className="flex justify-between font-bold">
            <span>Price</span>
            <span>{biddingPrice}</span>
          </p>
        </div>

        {/* Button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => HandleChoosePlayers(players)}
            className="btn bg-buttonColor font-bold px-4 py-2 rounded-lg"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  players: PropTypes.shape({
    playerId: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    biddingPrice: PropTypes.string.isRequired,
    battingType: PropTypes.string.isRequired,
  }).isRequired,
  HandleChoosePlayers: PropTypes.func.isRequired,
};

export default PlayerCard;
