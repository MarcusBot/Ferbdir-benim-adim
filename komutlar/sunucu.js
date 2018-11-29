const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setDescription('')
  .setColor("RANDOM")
  .addField(`**Sunucu Komutları**`, `\n \n**${prefix}kullanıcıbilgim** | Kullanıcının ayrıntılı bilgisini gösterir. **${prefix}sunucubilgi** | Sunucu hakkında ayrıntılı bilgi verir. \n**${prefix}davet** | Botun davet linkini atar. \n**${prefix}bilgi** | Bot hakkında bilgi verir. \n**${prefix}canlıdestek** | Canlı destek açar. \n**${prefix}rolbilgi** | Yazdığınız rolün bilgisini verir. \n${prefix}profil | Level ve puanına bakabilirsin.`)
  .setFooter('Ferb', client.user.displayAvatarURL)
  .setThumbnail(client.user.avatarURL)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
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
  aliases: ['server'],
  permLevel: 0
};  

exports.help = {
  name: 'sunucu',
  description: 'Botun sunucu komutlarını gösterir.',
  usage: 'sunucu'
};
