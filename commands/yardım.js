const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const value = args[0]

  const embed = new diskord.EmbedBuilder()
  .setTitle("Kategoriler")
  .setDescription(`<a:lyertia_settings:1011572953902764052> **e!yardım ayarlamalı |** Ayarlamalı yetkili komutlarını gösterir.\n\n<a:panda:1011574000507420754> **e!yardım eğlence |** Eğlence Komutlarını Gösterir.\n\n<a:sadpikacu:1011574712331145298> **e!yardım kullanıcı |** Kullanıcı Komutlarını Gösterir.\n\n<:yetkili:1011575382497046538> **e!yardım yetkili |** Yetkili Komutlarını Gösterir.\n\n<a:Zplayanimen:1011575677453082746> **e!yardım bot |** Bot Komutlarını Gösterir\n<a:zil:1010619183375065160> **ErensiBOT Bağlantılar** <a:zil:1010619183375065160>\n[Botu Sunucuna Ekle](${davet})\n[Destek Sunucum](${destek})\n[Bota Oy Ver](${topgg})`)
  if(!args[0]) return message.channel.send({embeds: [embed]})
if(value === "bot") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:Zplayanimen:1011575677453082746> Ana Komutlar <a:Zplayanimen:1011575677453082746>")
.setDescription("**e!istatistik |** Botun istatistiklerini gösterir\n**e!linkler |** Botla Alakalı Linkleri Alırsınız\n**e!oyver |** Botun oy verme linkini ve birkaç bilgi alırsınız\n**e!ping |** Botun pingini gösterir")
message.channel.send({embeds: [embed]})
}
if(value === "yetkili") {
const embed = new diskord.EmbedBuilder()
.setTitle("<:yetkili:1011575382497046538> Yetkili Komutları <:yetkili:1011575382497046538>")
.setDescription("**e!ban | ** Etiketlediğiniz kişiyi sunucudan yasaklar\n**e!ban-list |** Sunucundan Banlanan üyeleri gösterir\n**e!forceban |** ID'sini belirttiğiniz kullanıcıyı sunucudan yasaklar\n**e!kanal-açıklama |** Bulunduğunuz kanalın konusunu/açıklamasını değiştirir\n**e!kick |** İstediğiniz kişiyi sunucudan atar\n**e!rol-al** | Belirtilen kullanıcıdan istediğiniz rolü alır\n**e!rol-oluştur** | Yazılan Adda Rol Oluşturulur\n**e!rol-ver** | Belirtilen kullanıcıya istediğiniz rolü verir")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**e!sesli-çek |** Etiketlediğiniz kullanıcıyı yanınıza çeker\n**e!temizle |** Belirtilen miktar mesajı siler\n**e!unban |** Belirtilen kişinin banını kaldırır\n**e!slowmode** | Kanalda yavaşmod'u ayarlarsınız")
message.channel.send({embeds: [embed2]})
}
if(value === "eğlence") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:panda:1011574000507420754> Eğlence Komutları <a:panda:1011574000507420754>")
.setDescription("**e!alkış |** Bot Alkışlar\n**e!aşkölçer |** Bot etiketlediğiniz kişiye karşı olan aşkını ölçer\n**e!emojiyazı |** Bot mesajınızı emoji haline getirir\n**e!hackle |** Etiketlediğiniz kişiyi hackler\n**e!kaçcm |** Malafatının uzunluğunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**e!sarıl |** Etiketlediğiniz kişiye sarılırsınız\n**e!slot |** Slots oyununu oynar\n**e!şanslısayım |** Bot Şanslı sayınızı tahmin eder")
message.channel.send({embeds: [embed2]})
}
if(value === "kullanıcı") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:sadpikacu:1011574712331145298> Kullanıcı Komutları <a:sadpikacu:1011574712331145298>")
.setDescription("**e!afk |** AFK olunca seni etiketleyen kişiye sebebini yazar\n**e!atatürk |** Rastgele bir Atatürk fotoğrafı gönderir\n**e!avatar |** Etiketlediğiniz kişinin avatarını gösterir\n**e!emojiler |** Sunucuda bulunan emojileri gösterir\n**e!hesapla |** Belirtilen işlemi yapar\n**e!kurucu-kim |** Sunucunun kurucusunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**e!minecraft |** Belirlediğiniz Minecraft sunucusunun bilgilerini verir\n**e!not-al |** Bot not alır\n**e!notum |** Notunuzu gösterir\n**e!radyo |**  Sesli kanaldan Radyo dinlersiniz\n**e!sunucubilgi |** Bulunduğun sunucu hakkında bilgi verir")
message.channel.send({embeds: [embed2]})
}
if(value === "ayarlamalı") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:lyertia_settings:1011572953902764052> Ayarlamalı Komutları <a:lyertia_settings:1011572953902764052>")
.setDescription("**e!küfürengel |** Küfür engelleme sistemini ayarlamanızı sağlar\n**e!reklamengel |** Reklam engelleme sistemini ayarlamanızı sağlar\n**e!oto-cevap |** Belirtilen yazıyı biri yazarsa bot belirtilen cevabı vermeye ayarlanır\n**e!otorol |** Sunucuya girenlere verilecek olan otorolü ayarlar\n**e!ototag |** Bot belirtilen tagı sunucuya girenlerin isimlerinin başına koyar\n**e!sa-as |** Oto sa-ası ayarlarsınız\n**e!sayaç |** Sayacı ayarlarsınız")
message.channel.send({embeds: [embed]})
}
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "yardım"
}