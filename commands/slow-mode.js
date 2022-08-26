const Discord = require('discord.js')
const config = require("../config.js")
const token = config.token

exports.run = async(client, message, args) => {
if (message.channel.type !== Discord.ChannelType.GuildText) return;
const limit = args[0] ? args[0] : 0;

if(!limit) return message.reply(`Doğru kullanım: \`!yavaşmod [0/21600]\``)

if(isNaN(limit)) return message.reply(`Lütfen sayı belirt.\nDoğru kullanım: \`!yavaşmod 120\``)

if (limit > 21600) return message.reply("Süre limiti maksimum **6** saat olabilir.")

message.reply(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`)

var request = require('request');
request({
url: `https://discordapp.com/api/v9/channels/${message.channel.id}`,
method: "PATCH",
json: {
rate_limit_per_user: limit
},
headers: {
"Authorization": `Bot ${token}`
},
})

}

exports.conf = {
aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod']
}

exports.help = {
name: 'yavaş-mod'
}