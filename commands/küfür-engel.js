const Discord = require("discord.js");
const db = require("croxydb")


module.exports.run = async (client, message, args) => {

  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
   const embed = new Discord.EmbedBuilder()
   .setColor("Red")
   .setDescription("✅ **Sistem Kapatıldı** \n Küfür Edildiğinde Bot Artık Onları Sansürlemicek.")
   const embed2 = new Discord.EmbedBuilder()
   .setColor("Red")
  .setDescription("✅ **Sistem Açıldı** \n Küfür Edildiğinde Bot Artık Onları Sansürlicek.")

let küfür = db.fetch(`kufurengel_${message.guild.id}`);

if (küfür)  {

    db.delete(`kufurengel_${message.guild.id}`);
    message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})

    return
}

if (!küfür)  {

    db.set(`kufurengel_${message.guild.id}`, true);
    message.reply({embeds: [embed2], allowedMentions: { repliedUser: false }})

    return
}



},
  
  exports.conf = {
   
    aliases: ["küfür"]
    
  }
  
exports.help = {
name: "küfürengel",
description: "Reklam Engel Sistemini Açarsın/Kapatırsın.",
kategori: "mod",
usage: "",
}