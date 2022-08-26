const Discord = require('discord.js');
const math = require('math-expression-evaluator') 

exports.run = function(client, message, args) {
    const owner = message.guild.members.cache.get(message.guild.ownerId);
message.reply(owner.user.tag)


};  

exports.conf = {
aliases: []
}; 

exports.help = {
name: 'kurucu-kim'
};
