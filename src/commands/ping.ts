import {SlashCommandBuilder} from "@discordjs/builders";
import {CommandInteraction } from "discord.js";
import { InteractionCommand } from "./command";

 export const ping: InteractionCommand = {
    data: new SlashCommandBuilder()
            .setName("ping")
            .setDescription("Returns pong."),

    execute: async (interaction: CommandInteraction): Promise<void> => {
        return await interaction.reply("Pong!");
    }
}
                
