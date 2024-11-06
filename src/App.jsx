import { useEffect, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Condition from './Components/Conditions/condition';
import Footer from './Components/Footers/Footer';
import Navbar from './Components/Headers/Navbar';
import Hero from './Components/Heros/Hero';

function App() {
  const [players, setPlayers] = useState([]); // State to hold player data
  const [amount, setAmount] = useState(0); // State to hold available amount
  const [choosePlayerCount, setChoosePlayerCount] = useState(0); // State to track selected player count

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // handleDelete
  const handleDelete = (playerId) => {
    // Filter out the player with the given id
    const updatedPlayers = selectedPlayers.filter(
      (player) => player.playerId !== playerId,
    );
    if (updatedPlayers.length !== selectedPlayers.length) {
      toast.warn('Player removed', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      setSelectedPlayers(updatedPlayers);
      setChoosePlayerCount(choosePlayerCount - 1);
    }
  };

  // Handle adding amount
  const handleAddAmount = () => {
    setAmount(amount + 7000000);
    toast.success('Credit Added to your Account', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  // Handle choosing players
  const handleChoosePlayers = (player) => {
    if (choosePlayerCount >= 6) {
      toast.info('You can only add up to 6 players!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      return;
    }

    let playerAmount = player.biddingPrice;
    if (playerAmount > amount) {
      toast.error('Not enough money to buy the player. Claim some credit.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      return;
    }

    // Deduct player amount and update states
    const isExist = selectedPlayers.find((p) => p.playerId === player.playerId);
    if (isExist) {
      toast.error(`${player.name} is already in your squad!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } else {
      setAmount(amount - playerAmount);
      setSelectedPlayers([...selectedPlayers, player]);
      setChoosePlayerCount(choosePlayerCount + 1);
    }
    if (!isExist) {
      toast.success(`Congrats! ${player.name} is now in your squad`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };

  // Data fetching
  useEffect(() => {
    fetch('./Players.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className="sm:max-w-[1440px] w-full sm:w-full mx-auto sm:mx-auto  scroll-smooth  h-auto font-sora">
        <Navbar Amount={amount} />
        <Hero HandleAddAmount={handleAddAmount} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />

        <Condition
          ChoosePlayer={choosePlayerCount}
          players={players}
          HandleChoosePlayers={handleChoosePlayers}
          selectedPlayers={selectedPlayers}
          handleDelete={handleDelete}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
