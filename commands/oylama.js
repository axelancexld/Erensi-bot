const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
let aciklama = args.slice(0).join(" ")
if (!aciklama) return message.reply("Lütfen oylamanı yaz!")
const embed = new EmbedBuilder()
.setTitle("Godzilla - Oylama Sistemi!")
.setDescription(`Oylama: **${aciklama}**\n\nEvet: **1**\n\nHayır: **1**`)
.setColor("#ff0000")
const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("Evet")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("evet"),
new Discord.ButtonBuilder()
.setLabel("Hayır")
.setStyle(Discord.ButtonStyle.Danger)
.setCustomId("hayır")
)
message.channel.send({embeds: [embed], components: [row]}).then((mesaj) => {
db.set(`oylama_${mesaj.id}`, aciklama)
db.push(`evet_${mesaj.id}`, message.author.id)
db.push(`hayir_${mesaj.id}`, message.author.id)
})
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "oylama"
};
