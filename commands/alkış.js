const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
exports.run = async (client, message, args) => {
    
   
const embed = new EmbedBuilder()

.setImage("https://media4.giphy.com/media/fnK0jeA8vIh2QLq3IZ/giphy.gif")

message.channel.send({embeds: [embed]})

}



exports.conf = {
  aliases: []
}

exports.help = {
  name: "alkış"
}