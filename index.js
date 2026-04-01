require('dotenv').config({ path: ['./configs/KEYS.env'], quiet: true });

const { Client, GatewayIntentBits } = require('discord.js');
const loadCommands = require('./Handlers/LoadCommands')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
    ]
});

loadCommands(client)

client.once('clientReady', () => {
    console.log(`🤖 Logged as ${client.user.tag} sucessfully`)
});
client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === "!hello") {
        message.reply(`Hello ${message.author.displayName} !`)
    }

});
client.on('interactionCreate', async interaction => {
    if(!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if(!command)
    {
        console.error(`No valid ${interaction.commandName} command was found`);
        return;
    }

    try{
        await command.execute(interaction);
    } catch(error){
        console.error(error);
        await interaction.reply({content:"A Error Ocorred while executing this command,\n try again later"});
    }
})

client.login(process.env.DISCORD_TOKEN);