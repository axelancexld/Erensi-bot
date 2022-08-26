
const ms = require('ms');
const db = require('croxydb');
const Discord = require('discord.js');


module.exports.run = async(client, message, args, tools) => {
  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  let sayi = args[1]
  let kanal = message.mentions.channels.first()
  if(!kanal) return message.reply({ content: "Bir sayı yazmalısın.  Örnek `e!sayaç #kanal 100`", allowedMentions: { repliedUser: false }})
  if(!sayi) return message.reply({ content: "Bir sayı yazmalısın.  Örnek `e!sayaç #kanal 100    `", allowedMentions: { repliedUser: false }})
  if(isNaN(sayi)) return message.reply({ content: "Üzgünüm Sadece `sayı` Olması Gerekiyor", allowedMentions: { repliedUser: false }})
  
  if(sayi < message.guild.memberCount) return message.reply({ content: "Üzgünüm Gireceğiniz Sayı Sunucu Sayısından Büyük Olması Gerekiyor."})
  
  const embed = new Discord.EmbedBuilder()
  .setAuthor({name: message.author.tag, iconURL: message.author.displayAvatarURL({dynamic: true})})
  .setColor("Red")
  .setDescription(`╔▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
   ║
   ║ • Ayarlanan Kanal: ${kanal}
   ║
   ║ • Ayarlanan Sayı: ${sayi}
   ║
   ║ • Sayaç Sistemi Aktif Edildi, Hedefimize Ulaşmak İçin **${sayi - message.guild.memberCount}** Kişi Kaldı 
   ║
   ╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ `)
  .setFooter({ text: client.user.username+' Sayaç Sistemi', iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setTimestamp();
 
    
    message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})


  db.set(`sayac_${message.guild.id}`, {sayi: sayi , kanal: kanal.id })
  
};


exports.conf = {
  aliases: ["sayaç","sayac"],
  permLevel: 0,
};
exports.help = {
  name: 'sayaç',
   description: 'Susturma',
  usage: 'timeout <@kullanıcı> <süre>'
};