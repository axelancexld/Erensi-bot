const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("Rolleri Yönet Yetkiniz Bulunmamakta.")
    let rolname = args[0]
    if (!rolname) return message.reply("Lütfen bir rol ismi gir!")
    message.guild.roles.create({name: rolname})
    message.reply("tm")
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "rol-oluştur"
};
