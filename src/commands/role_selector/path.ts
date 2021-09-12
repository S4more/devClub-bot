import {MessageActionRow, MessageEmbed} from "discord.js";

type Path = {
    components: MessageActionRow[],
    embeds: MessageEmbed[],
    ephemeral?: boolean,
    fetchReply?: boolean,
}

export { Path } ;
