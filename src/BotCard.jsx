import React from "react";

//we want to display the details of a bot


function BotCard({ bot, addToBotArmy }){
    return(
        <div>
            <img src={bot.avatar_url} alt={bot.name} />  
            <h2>{bot.name}</h2>
            <p>{bot.catchPhrase}</p>  
            <p>Bot Class: {bot.bot_class}</p> 
            <p>Damage: {bot.damage}</p>
            <p>Health: {bot.health}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => addToBotArmy(bot)}>Add to Bot Army</button>
        </div>
    )
}



export default BotCard;