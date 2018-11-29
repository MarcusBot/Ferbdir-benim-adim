const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  let komut = ('yardim komutu')
  const embedyardim = new Discord.RichEmbed()
  .setAuthor("Komutlar", client.user.displayAvatarURL)
  .setDescription(`${prefix}**sunucu** - Sunucu komutları \n${prefix}**eğlence** - Eğlence komutları \n${prefix}**matematik** - Matematik komutları \n${prefix}**moderasyon** - Moderasyon komutları`)
    .addField("Kullanılabilir Linkler", "[Destek Sunucusu](https://discord.gg/Ax3vpaq) | [Sunucuna Ekle](https://discordapp.com/oauth2/authorize?client_id=517052307792461864&permissions=8&scope=bot)")
  .setColor("RANDOM")
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
  aliases: ['commands', 'yardım', 'help'],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Tüm komutları gösterir.',
  usage: 'komutlar [komut]'
};
