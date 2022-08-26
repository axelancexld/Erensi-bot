
const ms = require('ms');
const db = require('croxydb');
const Discord = require('discord.js');


module.exports.run = async(client, message, args, tools) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  
  const msg = args.slice(0).join(" ")
  if(!msg) return message.reply({ content: "Şu şekilde kullanın e!oto-cevap komut,cevap" })
  
  const cmd = msg.split(",")[0]
  const cmdAnswer = msg.split(",")[1]
  
  const data = db.fetch(`otocevap_${cmd}`)
  if(data) return message.channel.send("> **Böyle komut zaten bulunuyor**")
  
  
  const embed = new Discord.EmbedBuilder()
  .setColor("Red")
  .setTitle("Komut başarıyla kaydedildi")
  .setDescription(`Komut: ${cmd}
Cevap: ${cmdAnswer}`)
  
  message.channel.send({ embeds: [embed] })
  db.set(`otocevap_${cmd}`, { cmd: cmd, answer: cmdAnswer })
  
  
};


exports.conf = {
  aliases: ["otocevap"],
  permLevel: 0,
};
exports.help = {
  name: 'oto-cevap',
   description: 'Susturma',
  usage: 'timeout <@kullanıcı> <süre>'
};