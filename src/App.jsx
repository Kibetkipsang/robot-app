import { useEffect, useState } from 'react';
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';
import './App.css';

function App() {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBots(data);
        } else {
          console.error('Expected an array but got:', data);
        }
      })
      .catch(error => console.error('Error fetching the bots:', error));
  }, []);

  function addToBotArmy(bot) {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function releaseFromArmy(bot) {
    const updatedArmy = army.filter(b => b.id !== bot.id);
    setArmy(updatedArmy);
  }

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8080/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        const updatedBots = bots.filter(b => b.id !== bot.id);
        setBots(updatedBots);
      })
      .catch(error => console.error('Error deleting the bot:', error));
  };

  return (
    <div className="App">
      <h1>Robot Battlr</h1>
      <BotArmy
        botsInArmy={army}
        releaseFromArmy={releaseFromArmy}
        dischargeBot={dischargeBot}
      />
      <BotCollection
        bots={bots}
        addToBotArmy={addToBotArmy}
      />
    </div>
  );
}

export default App;