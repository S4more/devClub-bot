import { MessageActionRow, MessageEmbed, MessageSelectMenu } from "discord.js";
import { Path } from './path';


const embeds = [new MessageEmbed()
    .addField('Language proficiency select', 'You can change this at any time.')];

export function generatePath(language_names: string[]): Path {


    let menus = []

    for (const language_name of language_names) {
        menus.push(
            new MessageSelectMenu()
                .setCustomId("skillselect")
                .setPlaceholder(`Select ${language_name} proficiency.`)
                .addOptions(
                {
                    label: `${language_name} - Beginner`,
                    value: `${language_name} - Beginner`,
                },
                {
                    label: `${language_name} - Intermediate`,
                    value: `${language_name} - Intermediate`,
                },
                {
                    label: `${language_name} - Advanced`,
                    value: `${language_name} - Advanced`,
                }
                )
        );
    }

    let components = [new MessageActionRow().addComponents(menus)];


    return {
        components,
        embeds,
        ephemeral: true,
    }

};
