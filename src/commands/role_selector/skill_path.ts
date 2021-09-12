import {MessageActionRow, MessageEmbed, MessageSelectMenu} from "discord.js";
import { Path } from './path';


const embeds = [new MessageEmbed()
    .addField('SKILL SELECT', 'the devClub will use this in order to assign tasks for projects. ' + 
              'You can always change your roles if you think that the assigned tasks don\'t reflect your experience level')];

const components = [new MessageActionRow()
    .addComponents(
    new MessageSelectMenu()
        .setCustomId("skillselect")
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
        ]),
)];

export const skill_path: Path = {
    components,
    embeds
}
