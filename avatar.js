const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
  name: "avatar",
  category: "fun",
  description: "Get avatar of your or mentions",
  usage: "avatar <user>",
  run: async (client, message, args) => {
    const member = message.mentions.users.first() || message.author;

    const Embed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`${member.username}`)
      .setImage(member.displayAvatarURL())
      .addField(`Link`, `[Click Me](${member.displayAvatarURL()})`);

    message.channel.send(Embed);
  }
};
