import PropTypes from 'prop-types';
import { useState } from 'react';
import PlayerCard from '../Cards/PlayerCard';
import Main from '../Main/Main';

const Condition = ({
  ChoosePlayer,
  players,
  HandleChoosePlayers,
  selectedPlayers,
  handleDelete,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showCount, setShowCount] = useState(false);

  const showPlayerCard = () => {
    setIsVisible(true);
    setShowCount(false); // Hide the count when showing player cards
  };
  const showMain = () => {
    setIsVisible(false);
    setShowCount(true); // Show the count when showing the main section
  };

  return (
    <div className="pt-10 mx-4 ">
      <div className="flex justify-between items-center sm:px-6">
        <p className="font-extrabold text-lg sm:text-2xl">
          Available Players {showCount && `(${ChoosePlayer}/6)`}
        </p>
        <div className="flex items-center">
          <button
            onClick={showPlayerCard}
            className={`px-4 py-2 rounded ${
              isVisible
                ? 'border-none font-bold bg-buttonColor sm:px-4  sm:py-3 rounded-l-lg'
                : 'sm:px-4 sm:py-3  font-bold border border-yellow-500 rounded-l-lg'
            }`}
          >
            isActive
          </button>
          <button
            onClick={showMain}
            className={`px-4 py-2 rounded ${
              !isVisible
                ? 'border-none font-bold bg-buttonColor sm:px-4 sm:py-3 rounded-r-lg'
                : 'sm:px-4 sm:py-3 border font-bold border-yellow-500 rounded-r-lg'
            }`}
          >
            Selected ({ChoosePlayer})
          </button>
        </div>
      </div>

      <div className="mt-4">
        {!isVisible ? (
          <div>
            <Main
              selectedPlayers={selectedPlayers}
              handleDelete={handleDelete}
              showPlayerCard={showPlayerCard}
            />

            {/* {selectedPlayers.map((i) => (
              <Main
                key={i.playerId}
                data={i}
                handleDelete={handleDelete}
                showPlayerCard={showPlayerCard} 
                />
            ))} */}
          </div>
        ) : (
          <div className="sm:grid sm:grid-cols-3 sm:gap-2 gap-1 sm:justify-center mx-auto">
            {players.map((p) => (
              <PlayerCard
                HandleChoosePlayers={HandleChoosePlayers}
                key={p.playerId}
                players={p}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Condition.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedPlayers: PropTypes.arrayOf(PropTypes.object).isRequired,
  ChoosePlayer: PropTypes.number.isRequired,
  HandleChoosePlayers: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Condition;
