const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Récupère l'avatar d'un des utilisateurs")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription(
          "L'utilisateur dont tu veux l'avatar. Laisse vide pour récupérer ton propre url."
        )
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("target");
    if (user)
      return interaction.reply(
        `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`
      );
    return interaction.reply(
      `Your avatar: ${interaction.user.displayAvatarURL()}`
    );
  },
};
