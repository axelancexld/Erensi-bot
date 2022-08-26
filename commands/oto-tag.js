const Discord = require("discord.js");
const db = require("croxydb");

exports.run = async (client, message, args) => {

  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator))return message.channel.send("⚠ Bu Komutu Kullana Bilmek için `Sunucuyu Yönet` Yetkisine Sahip Olman Gerek!");

  let mesaj = args.slice(0).join(" ")
  if (!mesaj) return message.channel.send("Lütfen bir tag gir!");

  message.channel.send(`tmm`);
  db.set(`ototag_${message.guild.id}`, mesaj);
};

exports.conf = {
  aliases: []
};
exports.help = {
  name: "ototag"
};