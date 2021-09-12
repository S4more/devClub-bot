import { MessageActionRow, MessageEmbed, MessageSelectMenu } from "discord.js";
import { Path } from './path';

export const programming_languages = ["Python", "Java", "Javascript", "Typescript"];

const components = [new MessageActionRow().addComponents(
    new MessageSelectMenu()
        .setCustomId("skillselect")
        .setPlaceholder('Nothing selected')
        .setMaxValues(programming_languages.length)
        .addOptions(generateDeveloperList())
)];

const embeds = [new MessageEmbed()
    .addField('Programming Language select!',
              'Select all the languages you know.')];

function generateDeveloperList() {
    const list: {label: string, value: string}[] = [];
    programming_languages.forEach(language => {
        list.push({label: language, value: language});
    })
    return list;
}

export const programming_path: Path = {
    components,
    embeds,
    ephemeral: true,
}
