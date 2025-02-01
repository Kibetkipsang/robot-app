import React from 'react';
import BotCard from './BotCard';
 //here we display the list of the available bots

 function BotCollection({bots, addToBotArmy}){
     return(
         <div  className="bot-collection">
             <h2>Available Bots</h2>
             <div className='bot-list'>
                 {bots.map(bot => (
                     <BotCard key={bot.id} bot={bot} addToBotArmy={addToBotArmy}/>
                 ))}
             </div>
         </div>
     )
 }

 export default BotCollection;