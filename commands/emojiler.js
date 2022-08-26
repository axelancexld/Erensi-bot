const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let animEmotes = [], staticEmotes = [];
message.guild.emojis.cache.forEach((x) => {
x.animated ? animEmotes.push(`<a:${x.name}:${x.id}>`) : staticEmotes.push(`<:${x.name}: ${x.id}>`);
})
const msg = new Discord.EmbedBuilder()
.setTimestamp()
.setColor('#a400ff')
.setTitle(`Buyur`)
.setDescription(`${animEmotes} ${staticEmotes}`)
message.reply({embeds : [msg]}).catch(error => {message.reply('bir hata oluştu')})

    };
exports.conf = {
  aliases: ['emojiler']
};

exports.help = {
  name: "emojiler"
};