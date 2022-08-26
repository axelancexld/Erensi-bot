const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.channel.send("Üyeleri Banla Yetkiniz Yok.")
let kullanıcı = args[0]
if (!kullanıcı) return message.reply("Lütfen bir kullanıcı ID gir!")
message.guild.members.ban(kullanıcı)
message.reply(kullanıcı + " idsi banlandı!")


}

  exports.conf = {
  aliases: []
};

exports.help = {
  name: "forceban"
};