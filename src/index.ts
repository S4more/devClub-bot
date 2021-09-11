import { Client, Intents, Interaction, CommandInteraction, ButtonInteraction, SelectMenuInteraction, ContextMenuInteraction, MessageComponentInteraction } from "discord.js";
import { token } from '../config.json';
import { InteractionCommand, SelectMenuCommand } from "./commands/command";
import { ping } from './commands/ping';
import { server } from './commands/server';
import { createAllRoles } from './setup';

const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

let interactionCommands: InteractionCommand[] = [
    ping,
    server,
]

client.once('ready', () => {
    //createAllRoles(client.guilds);
    console.log("ready.");
});

client.on('interactionCreate', (interaction: Interaction) => {
    if (interaction.isCommand()) return handleCommand(interaction);
    if (interaction.isButton()) return handleButton(interaction);
    if (interaction.isSelectMenu()) return handleSelectMenu(interaction);
    if (interaction.isContextMenu()) return handleContextMenu(interaction);
    if (interaction.isMessageComponent()) return handleMessageComponent(interaction);
});

function handleCommand(interaction: CommandInteraction) {
    let command = interactionCommands.find(command => command.data.name == interaction.commandName);
    console.log('new Command interaction: ' + command?.data.name);
    command?.execute(interaction);
}

function handleButton(interaction: ButtonInteraction) {
    console.log('new Button interaction: ' + interaction);
}

function handleSelectMenu(interaction: SelectMenuInteraction) {
    console.log('new Select menu interaction: ' + interaction);
    // Assuming that all Menu interactions will have their custom id being the same as the original command name.
    let command = interactionCommands.find(command => command.data.name == interaction.customId);
    if (command) {
        return (<SelectMenuCommand>command).handleInteraction(interaction);
    }
}

function handleContextMenu(interaction: ContextMenuInteraction) {
    console.log('new Handle interaction: ' + interaction.commandName);
}

function handleMessageComponent(interaction: MessageComponentInteraction) {
}


client.login(token);
