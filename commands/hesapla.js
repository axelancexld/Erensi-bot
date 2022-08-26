const Discord = require('discord.js');
const math = require('math-expression-evaluator') 

exports.run = function(client, message, args) {
var soru = args.slice(0).join(' ');

if(!soru) return message.reply('Bir işlem belirtin. **Doğru Kullanım**: !hesapla <işlem>')
else {
let cevap;
try {
cevap = math.eval(soru)
} catch(err) {
return message.channel.send('Hatalı işlem: lütfen sadece bilinen tarzda işlem yapınız.')
}

const embed = new Discord.EmbedBuilder()
.setColor(Discord.Colors.Blue)
.setTitle('Hesaplama Sonucu')
.setDescription(`**Soru: \`${soru}\`\nCevap: \`${cevap}\`**`)
.setFooter({text: `Kullanıcı: ${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true})})
return message.channel.send({embeds: [embed]})
}


};  

exports.conf = {
aliases: []
}; 

exports.help = {
name: 'hesapla'
};
