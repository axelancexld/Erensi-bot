const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
  
   const random = Math.floor(Math.random() * 99) + 1
   
   message.channel.send(":thinking: Hmm... Şanslı sayın `"+random+"` mi?")
  
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "şanslısayım"
};
