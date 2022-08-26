
const ms = require('ms');
const db = require('croxydb');
const Discord = require('discord.js');


module.exports.run = async(client, message, args, tools) => {
  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  
  if(!db.fetch(`saas_${message.guild.id}`)) {
    
    db.set(`saas_${message.guild.id}`, true)
    message.channel.send("✅ | SA-AS sistemi açıldı.")
    
 } else {
    
    db.delete(`saas_${message.guild.id}`)
    message.channel.send("✅ | SA-AS sistemi kapatıldı.")
    
  }

  
  
};


exports.conf = {
  aliases: ["sa-as"],
  permLevel: 0,
};
exports.help = {
  name: 'sa-as',
   description: 'Susturma',
  usage: 'timeout <@kullanıcı> <süre>'
};