const { Client, GatewayIntentBits, Partials, EmbedBuilder } = require("discord.js");
const config = require("./config.js");
const db = require("croxydb")
const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isButton()) return;
  let message = await interaction.channel.messages.fetch(interaction.message.id)
  if(interaction.customId == "evet") {
const db = require("croxydb")
db.push(`evet_${interaction.message.id}`, interaction.user.id)
interaction.reply({content: "Başarıyla Oyunu **Evet** Olarak Verdin!", ephemeral: true})

const evet = db.get(`evet_${interaction.message.id}`).length;
const hayir = db.get(`hayir_${interaction.message.id}`).length;
const aciklama = db.get(`oylama_${interaction.message.id}`)
const embed = new EmbedBuilder()
.setTitle("Godzilla - Oylama Sistemi!")
.setDescription(`Oylama: **${aciklama}**\n\nEvet: **${evet}**\n\nHayır: **${hayir}**`)
.setColor("#ff0000")
await message.edit({embeds: [embed]})
  }
});
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isButton()) return;
  let message = await interaction.channel.messages.fetch(interaction.message.id)
  if(interaction.customId == "hayır") {
const db = require("croxydb")
db.push(`hayir_${interaction.message.id}`, interaction.user.id)
interaction.reply({content: "Başarıyla Oyunu **Hayır** Olarak Verdin!", ephemeral: true})

const evet = db.get(`evet_${interaction.message.id}`).length;
const hayir = db.get(`hayir_${interaction.message.id}`).length;
const aciklama = db.get(`oylama_${interaction.message.id}`)
const embed = new EmbedBuilder()
.setTitle("Godzilla - Oylama Sistemi!")
.setDescription(`Oylama: **${aciklama}**\n\nEvet: **${evet}**\n\nHayır: **${hayir}**`)
.setColor("#ff0000")
await message.edit({embeds: [embed]})
  }
});

client.on("messageCreate", async message => {
  const db = require("croxydb");

  if (await db.get(`afk_${message.author.id}`)) {
   
    db.delete(`afk_${message.author.id}`);

    message.channel.send("Artık afk degilsin");
  }

  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await db.get(`afk_${kullanıcı.id}`);

  if (sebep) {
    message.reply("adam afk");
  }
});

client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let kufur = db.fetch(`kufurengel_${message.guild.id}`)
  if(!kufur) return;
  
  if(kufur) {
  const kufurler = [
    
    "amk",
    "piç",
    "yarrak",
    "oç",
    "göt",
    "amq",
    "yavşak",
    "amcık",
    "amcı",
    "orospu",
    "sikim",
    "sikeyim",
    "aq",
    "mk"
       
  ]
  
if(kufurler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`Hey <@${message.author.id}>, Bu Sunucuda Küfür Engel Sistemi Aktif! `)
}
}
})
client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let reklamlar = db.fetch(`reklamengel_${message.guild.id}`)
  if(!reklamlar) return;
  
  if(reklamlar) {

  const linkler = [
    
    ".com.tr",
    ".net",
    ".org",
    ".tk",
    ".cf",
    ".gf",
    "https://",
    ".gq",
    "http://",
    ".com",
    ".gg",
    ".porn",
    ".edu"
       
  ]
  
if(linkler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`Hey <@${message.author.id}>, Bu Sunucuda Reklam Engel Sistemi Aktif! `)
}
}
})

client.on('guildMemberAdd', async member => {
  let sayac = db.fetch(`sayac_${member.guild.id}`)
  let kalan = sayac.sayi - member.guild.memberCount || '?'
  if(!kalan) return;
  if(!sayac) return;
  
  client.channels.cache.get(sayac.kanal).send(":mega: Hoşgeldin **"+member.user.username+"** Seninle Beraber `"+member.guild.memberCount+"` Kişi Olduk, `"+sayac.sayi+"` Kişi Olmamıza Son `"+kalan+"` Kişi Kaldı! <:blurple_check:948646981260148747>")
  
});
client.on('guildMemberRemove', async member => {
  
  let sayac = db.fetch(`sayac_${member.guild.id}`)
  let kalan = sayac.sayi - member.guild.memberCount
  if(!sayac) return;
  
  client.channels.cache.get(sayac.kanal).send(":mega: Görüşürüz **"+member.user.username+"** Senin Yüzünden `"+member.guild.memberCount+"` Kişi Olduk! <:blurple_cross:948649220355801108>")
  
});

client.on('guildMemberAdd', async member => {
  
  let otorol = db.fetch(`otorol_${member.guild.id}`)
  if(!otorol) return;
  
  client.channels.cache.get(otorol.kanal).send(":mega: **"+member.user.tag+"** Kullanıcı Katıldı! Gerekli Rolleri Verdim. <:blurple_check:948646981260148747>")
  member.roles.add(otorol.rol).catch(() => {})
  
});


client.on("messageCreate", (message) => {
  
  let saas = db.fetch(`saas_${message.guild.id}`)
  if(!saas) return;
  
  if(saas) {
  
  let selaamlar = message.content.toLowerCase()  
if(selaamlar === 'sa' || selaamlar === 'slm' || selaamlar === 'sea' || selaamlar === ' selamünaleyküm' || selaamlar === 'Selamün Aleyküm' || selaamlar === 'selam'){

message.channel.send(`<@${message.author.id}> Aleykümselam, Hoşgeldin ☺️`)
}
}
})

client.on("messageCreate", async message => {
  
  const cmd = db.fetch(`otocevap_${message.content}`)
  if(!cmd) return;
  
  if(cmd) {
    message.reply({ content: `${cmd.answer}` })
  }
  
});
client.on("guildMemberAdd", async member => {
  let ototag = db.get(`ototag_${member.guild.id}`);;
  if (ototag) return member.setNickname(`${ototag} ${member.user.username}`)
})
client.login(config.token)