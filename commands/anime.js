const { request } = require("undici");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
// commands interaction with api
const trim = (str, max) =>
  str.length > max ? `${str.slice(0, max - 3)}...` : str;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("anime")
    .setDescription(
      "Tu cherches un nouvel anime à regarder? Je t'en propose un random :)"
    ),
  async execute(interaction) {
    const ApiResult = await request("https://api.jikan.moe/v4/random/anime");
    const animeData = await ApiResult.body.json();
    const anime = animeData.data;
    const embed = new EmbedBuilder()
      .setColor("#" + Math.floor(Math.random() * 16777215).toString(16))
      .setTitle(anime.title)
      .setURL(anime.url)
      .setAuthor({
        name: "MyAnimeList",
        iconURL:
          "https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAiC8a86sHufn_jOI-JGtoCQ",
        url: anime.url,
      })
      .setDescription(trim(anime.synopsis, 200))
      .setThumbnail(anime.images.jpg.image_url)
      .addFields({ name: "Lien", value: anime.url })
      .setImage(anime.images.jpg.image_url);
    await interaction.editReply({ embeds: [embed] });
  },
};
