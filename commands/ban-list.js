const {EmbedBuilder} = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
exports.run = async (client, message, args) => {
    var userlist = message.guild.bans.fetch()
    userlist.then(collection => {
    if(collection.first() == null){
      
    const embed = new MessageEmbed()
    .setDescription("Sunucunuzda Banlanan Kimse Yok!")      
    .setColor("RED")
    .setTitle(":x: Hata!")
    message.channel.send({embeds: [embed]})
      
    } else {
    const data = collection.map(mr => "`"+mr.user.username+"`").slice(0, 60).join(", ")
    const embed2 = new EmbedBuilder()
    .setTitle("ErensiBOT - Ban List")
    .setColor("#ff0000")
    .setDescription(data)
    
    message.channel.send({embeds: [embed2]})
    }
})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ban-list"
};
