const { REST, Routes } = require('discord.js');
require('dotenv').config({path: ['./configs/KEYS.env'], quiet:true});
const fs = require('fs');
const path = require('path');

const commands = [];
const commandPath = path.join(__dirname, 'Commands');
const commandFiles = fs.readdirSync(commandPath);

for(const file of commandFiles)
{
    const command = require(path.join(commandPath, file));
    commands.push(command.data.toJSON());
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Registring Commands...');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands}

        );
        console.log('✅ Commands registred successfully !');
    } catch(error){
        console.error(error);
    }
})();