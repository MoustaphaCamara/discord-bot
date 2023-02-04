const Discord = require("discord.js");
// initiate new discord client
const bot = new Discord.Client({ intents: "" });
// events

const config = require("./config");

bot.on("ready", function () {
  console.log("clovis is On...");
  // bot.user.setActivity("try me", {
  //   type: "STREAMING",
  //   url: "https://www.twitch.tv/monstercat",
  // });
});
// login with token
bot.login(config.token);
