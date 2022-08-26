const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
   message.reply(`**${client.ws.ping}** ms`)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ping"
};
