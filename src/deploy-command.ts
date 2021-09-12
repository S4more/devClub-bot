import { REST } from '@discordjs/rest';
import { Routes }from 'discord-api-types/v9';
import fs from 'fs';
import { Command } from './commands/command';

const { clientId, guildId, token } = require('../config.json');
const commands: any[] = [];
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.ts') && file !== "command.ts");
const rest = new REST({ version: '9' }).setToken(token);

async function populate() {
    for (const file of commandFiles) {
        let obj = await import(`./commands/${file}`);

        const command: Command = obj[file.slice(0, file.length - 3)];
        commands.push(command.data.toJSON());
    }
}

(async () => {
	try {
        await populate();
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
})();
