import { SlashCommandBuilder} from "@discordjs/builders";
import { CommandInteraction, SelectMenuInteraction} from "discord.js";

export interface Command {
    data: SlashCommandBuilder,
}

export interface InteractionCommand extends Command {
    execute: (arg0: CommandInteraction) => Promise<void>;
}

export interface SelectMenuCommand extends InteractionCommand {
    handleInteraction: (arg0: SelectMenuInteraction) => Promise<void>;
}


