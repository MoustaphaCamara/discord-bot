const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("responds with Pong!"),
  async execute() {
    await interaction.reply("Pong!");
  },
};
