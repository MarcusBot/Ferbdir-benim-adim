const Discord = require('discord.js');

exports.run = async(client, message, args) => {
const emoji = message.client.emojis.get('📞');
      let isEnabled;
      message.reply("`Birazdan yetkili ekibimiz sizinle ilgilenecektir.`");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "517003343877505026";
      const embed = new Discord.RichEmbed()
        .addField('Dikkat', `Canlı Destek Talebi`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("00ff00")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek İsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajı**: ${mesaj}`)
        .setFooter("© Ferb | Canlı Destek")
        client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('**Canlı destek çağrısına bağlanmak için `bağlan`, iptal etmek için `iptal` yazınız.**')
    collector.on('message', (message) => {
      if (message.content === 'iptal') collector.stop('aborted')
      if (message.content === 'bağlan') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('``Canlı destek zaman aşımına uğradı.``')
      if (reason === 'aborted') {
        message.reply('``Canlı destek reddedildi.``')
        client.channels.get(destekKanal).send('``Canlı destek başarıyla reddedilmiştir.``')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('``Canlı destek talebi alındı.``')
        client.channels.get(destekKanal).send('**Destek talebini iptal etmek için `iptal` yazınız.**')
        chan.send(`${message.author}`)
        chan.send('``Destek talebiniz yetkili tarafından kabul edildi.``')
        chan.send('**Destek talebini iptal etmek için `iptal` yazınız.**')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('iptal')) {
              message.channel.send('``Canlı destek iptal edildi.``')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('``Canlı destek karşı taraf tarafından iptal edildi.``')

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`**Talepte Bulunan Kişi :** ${message.author.tag} : ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`**Yetkili :** ${message.author.tag} : ${message.content}`)
          }
          contact(client)
        })
      }
    })
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlıdestek'
};
