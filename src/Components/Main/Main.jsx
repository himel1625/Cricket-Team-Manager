import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
const Main = ({ selectedPlayers, handleDelete, showPlayerCard }) => {
  return (
    <div>
      {selectedPlayers.map((player) => {
        const { image, name, role, country, playerId } = player;

        return (
          <div
            key={playerId}
            className="sm:w-[1000px] w-[350px] h-[150px] mx-auto rounded-xl overflow-hidden shadow-2xl border pt-5 mb-4 flex items-center justify-between px-6 "
          >
            <div className="flex justify-between px-4 items-center">
              <div className="flex items-center gap-4">
                <img
                  className="w-24 h-24 rounded-full"
                  src={image}
                  alt={name}
                />
                <div>
                  <h1 className="font-extrabold text-2xl">{name}</h1>
                  <p className="font-bold">{role}</p>
                  <p className="font-bold">{country}</p>
                </div>
              </div>
            </div>

            <div
              onClick={() => handleDelete(playerId)}
              className="text-red-800 font-extrabold text-4xl cursor-pointer"
            >
              <MdDeleteForever />
            </div>
          </div>
        );
      })}
      <div className="px-20 pt-10 pb-10">
        <button onClick={showPlayerCard} className="btn bg-buttonColor">
          Added more player
        </button>
      </div>
    </div>
  );
};

Main.propTypes = {
  selectedPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      playerId: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  showPlayerCard: PropTypes.func.isRequired,
};

export default Main;
