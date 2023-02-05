const fs = require("node:fs");
const path = require("node:path");
const { Client, Events, GatewayIntentBits } = require("discord.js");
const config = require("./config.json");

// new client -- discordjs guild refers to server
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// load commands
client.commands = new Collection();

// create a path to the /commands directory with path.join()
const commandsPath = path.join(__dirname, "commands");
// commandFiles = all files in commandsPath filtered to get .js only
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));
// loop in commandfiles
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // set new item in the collection with key = command name and value = exported module -->
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] Command at ${filePath} is missing required "data" or "execute" property.`
    );
  }
}
//
//
// c = event parameter to separate with "client"
client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.tag}`);
});

// login with token
client.login(config.token);
