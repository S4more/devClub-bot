import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, MessageSelectMenu, SelectMenuInteraction } from "discord.js";
import { SelectMenuCommand } from "./command";
import { skill_path, programming_path, programming_languages, generatePath } from './role_selector/role_selector';

export const server: SelectMenuCommand = {
    data: new SlashCommandBuilder()
        .setName("skillselect")
        .setDescription("Sends info about the server."),

    execute: async (interaction: CommandInteraction) => {
            await interaction.reply(skill_path);
    },

    handleInteraction: async (interaction: SelectMenuInteraction) => {
        let selected = interaction.values;
        switch(true) {
            case ('Developer' === selected[0]):
                await interaction.reply(programming_path);
                break;
            case ('Designer' === selected[0]):
                await interaction.reply('Designer selected.');
                break;
            case programming_languages.some(l => selected.includes(l)):
                await interaction.reply(generatePath(selected));
                break;
        }
    }
}
