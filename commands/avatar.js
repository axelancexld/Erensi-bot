const { EmbedBuilder } = require("discord.js");
exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || message.author;
  
    return message.reply(user.displayAvatarURL({ dynamic: true, size: 1024 }))

}

exports.conf = {
aliases: []
}

exports.help = {
name: "avatar"
};