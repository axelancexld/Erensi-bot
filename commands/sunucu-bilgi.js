const Discord = require("discord.js")
const apii = require("useful-tools")
exports.run = async (client, message, args) => {
  
 
    const owner = message.guild.members.cache.get(message.guild.ownerId);
const embed = new Discord.EmbedBuilder()
    .setTitle(message.guild.name + " Sunucu Bilgileri")
    .setColor("#ff0000")
    .setDescription(`Sunucu Sahibi: <@${owner.user.id}>\nKanal Sayıları: ${message.guild.channels.cache.filter(m => m.type === "text").size}\nEmoji Sayısı: ${message.guild.emojis.cache.size}\nRol Sayısı: ${message.guild.roles.cache.size}\nKuruluş: ${apii.tarih(message.guild.createdTimestamp)}`)
    .setThumbnail(message.guild.iconURL())
    .setTimestamp()
  message.channel.send({embeds: [embed]})
}

exports.conf = {
  aliases: ["sb"]
}

exports.help = {
  name: "sunucubilgi"
}