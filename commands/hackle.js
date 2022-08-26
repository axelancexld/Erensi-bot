const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

  
 const user = message.mentions.users.first()
 if(!user) return message.channel.send("**Kimi hackleyeceğini belirt**")
  
  message.channel.send({
    embeds: [
      new EmbedBuilder()
      .setDescription("**<@"+user.id+"> Hackleniyor... 🧑‍💻**")
    ]
  }).then(msg => {
    setTimeout(() => {
      msg.delete()
    }, 5000)
  })
  

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "hackle"
};
