const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
	.setFooter(`${message.author.username} tarafından botun bilgi mesajı istendi.`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot ile ilgili bilgi mesajı yollandı! Özel mesajlarınıza bakınız!');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Bot Bilgi Menüsü", client.user.displayAvatarURL)
    .setDescription("")
  .addField("Bot Prefix", `${ayarlar.prefix}`)
	.addField("Bot Sahibi", `[Marcus#7950](www.twitch.tv/wtcN)`)
	.addField("Destek Sunucusu", "[Destek sunucusuna katılın!](https://discord.gg/G5MpESq)")
	.setFooter(`${message.author.username} tarafından istendi.`)
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
