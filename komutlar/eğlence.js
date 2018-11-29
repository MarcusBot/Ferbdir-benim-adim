const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setDescription('')
  .setColor("RANDOM")
  .addField(`**Eğlence Komutları**`, `\n**${prefix}wasted** | Wasted efekti ekler. \n**${prefix}missionpassed** | Mission Passed efekti ekler. \n**${prefix}sniper** | Sniper efekti ekler. \n**${prefix}hapishane** | Hapishane efekti ekler. \n**${prefix}galatasaray** | Galatasaray efekti ekler. \n**${prefix}şifre** | Şifre oluşturur. \n**${prefix}aşkölçer** | Etiketlediğiniz kişilerin aşkını ölçer. \n**${prefix}1vs1** | Etiketlediğiniz kişiler 1vs1 atar. \n**${prefix}gta** | GTA efekti ekler. \n**${prefix}tr** | Türkiye efekti ekler`)
  .setFooter('Ferb', client.user.displayAvatarURL)
  .setThumbnail(client.user.avatarURL)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.sendEmbed(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fun'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Botun eğlence komutlarını gösterir.',
  usage: 'eğlence'
};
