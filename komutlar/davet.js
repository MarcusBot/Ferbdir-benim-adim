const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
	.setFooter(`${message.author.username} tarafından davet linki istendi.`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Botun davet linki için özel mesajlarınızı kontrol ediniz.');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
	.setThumbnail(client.user.avatarURL)
	.setFooter(`${message.author.username} tarafından kullanıldı.`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Ferb'ü sunucuna eklemek için [buraya](https://discordapp.com/oauth2/authorize?client_id=517052307792461864&permissions=8&scope=bot) tıklayabilirsin.`);
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
