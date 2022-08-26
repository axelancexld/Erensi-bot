const Discord = require('discord.js');
const axios = require('axios');

exports.run = async (client, message, args) => {

axios({
method: 'get',
url: "https://ataturk-resimleri-api.herokuapp.com/"
}).then(async image => {
const attachment = new Discord.AttachmentBuilder(image.data.image)
return message.channel.send({files: [attachment]}).catch(err => {})

})
}

exports.conf = {
aliases: []
}

exports.help = {
name: "atatürk"
}