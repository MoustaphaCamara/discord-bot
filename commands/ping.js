const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Prépare la réception du Pong!"),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};
