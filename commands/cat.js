const { request } = require("undici");
const { SlashCommandBuilder } = require("discord.js");

// commands interaction with api

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("Photo de chat totalement random"),
  async execute(interaction) {
    const catResult = await request("https://aws.random.cat/meow");
    const { file } = await catResult.body.json();
    await interaction.editReply({ files: [file] });
  },
};
