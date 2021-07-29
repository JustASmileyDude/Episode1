const discord = require('discord.js');
const client = new discord.Client();

const { prefix, token } = require('./config.json')

client.on("ready", () => {
    console.log(`${client.user.username} Is now online!`)
})

client.on("message", (message) => {
    if(message.content === prefix + "helloworld"){
        message.channel.send(`Hello ${message.author.username}!`).then(sentMessage => {
            sentMessage.react("👋")
          });
    }
})

client.login(token)