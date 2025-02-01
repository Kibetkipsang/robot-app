import React from 'react';
import BotCard from './BotCard';

//here we are going to display the list of bots in the users army

 function BotArmy({botsInArmy, releaseFromArmy, dischargeBot}){

    
     return(
         <div  className="bot-army">
             <h2>Bots in Army</h2>
             <div className='bot-army'>
                {botsInArmy.map((bot) => (
                    <div key={bot.id}>
                    <BotCard  bot={bot}/>
                    <button onClick={() =>releaseFromArmy(bot)}>Release</button> 
                    <button onClick= {() => dischargeBot(bot)}>Discharge</button>
                     </div>
                ))}
             </div>
         </div>
     )
 }

 export default BotArmy;
