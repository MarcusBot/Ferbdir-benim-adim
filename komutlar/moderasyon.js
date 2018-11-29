const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setDescription('')
  .setColor("RANDOM")
  .addField("**Moderasyon Komutları**", '\n' + prefix + '**at** | İstediğiniz kullanıcıyı sunucudan atar. \n' + prefix + '**sustur** | İstediğiniz kullanıyı susturur. \n' + prefix + '**uyar** | İstediğiniz kullanıcıyı uyarır. \n' + prefix + '**duyuru** | Daha iyi bir duyuru görünümü sağlar. \n' + prefix + '**temizle** | 1 ile 100 arası mesajları siler. \n' + prefix +'**otorol-ayarla** | Otorolü ayarlar. \n' + prefix + '**rolver** | Etiketlediğiniz kişiye yazdığınız rolü verir. \n' + prefix +'**rolsil** | Etiketlediğiniz kişinin yazdığınız rolünü alır. \n' + prefix +'**kanalaç** | Konuşma kanalı açar.')
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
  aliases: ['admin'],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Botun moderasyon komutlarını gösterir.',
  usage: 'moderasyon'
};
