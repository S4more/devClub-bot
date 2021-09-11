import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, MessageActionRow, MessageEmbed, MessageSelectMenu, SelectMenuInteraction } from "discord.js";
import { SelectMenuCommand } from "./command";

const embedMessage = new MessageEmbed()
    .addField('SKILL SELECT', 'the devClub will use this in order to assign tasks for projects. ' + 
              'You can always change your roles if you think that the assigned tasks don\'t reflect your experience level');

export const server: SelectMenuCommand = {
    data: new SlashCommandBuilder()
        .setName("server")
        .setDescription("Sends info about the server."),

    execute: async (interaction: CommandInteraction) => {
            const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId("server")
                        .setPlaceholder('Nothing selected')
                        .addOptions([
                            {
                                label: 'Developer',
                                description: 'Select to join the club as a developer.',
                                value: 'Developer',
                            },
                            {
                                label: 'Designer',
                                description: 'Select to join the club as a designer.',
                                value: 'Designer',
                            },
                            {
                                label: 'Other',
                                description: 'Select if your role is not listed on\n' +
                                                'the above options. Please contact an admin',
                                value: 'third_option',
                            }
                        ]),
                );
            await interaction.reply({embeds: [embedMessage], components: [row] });
    },

    handleInteraction: async (interaction: SelectMenuInteraction) => {
        let selected = interaction.values[0];
        switch(selected) {
            case 'Developer':
                await interaction.reply("Developer selected.");
                break;
            case 'Designer':
                await interaction.reply('Designer selected.');
                break;
            case 'Other':
                await interaction.reply('Other');
                break;
        }
    }
}
