require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.api.applications(client.user.id).commands.post({
    data: {
      name: "ping",
      description: "ping pong!",
    },
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(process.env.BOT_TOKEN);
