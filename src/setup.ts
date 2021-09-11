import {GuildManager, RoleManager, Role} from 'discord.js';
import fs from 'fs';
import { IRole } from './roles/roles';

const { guildId } = require('../config.json');
const file = fs.readdirSync('./roles').filter(file => file == "roles.ts")[0];

export function createAllRoles(guildManager: GuildManager) {

    const roleManager = guildManager.cache.get(guildId)?.roles;
    let createdRoles : {[name: string]: string} = {};
    let rolePromises: (Promise<Role> | undefined)[] = [];

    import(`./roles/${file}`).then(obj=> {

        for (const roleArray of Object.values(obj)) {

            for (const r of Object.values(<any>roleArray)) {
                const role: IRole = <any>r;

                roleManager?.cache
                    .filter(x => x.name == role.name)
                    .forEach(x => x.delete())

                let rolePromise = roleManager?.create(
                    {
                        name: role.name,
                        color: role.color
                    }
                )

                rolePromises.push(rolePromise)


            }
        }

        Promise.all(rolePromises).then(solvedPromises => {

            for (const role of solvedPromises) {
                if (role) createdRoles[role.name] = role.id;
            }

            console.log(createdRoles);
            fs.writeFileSync('../roles.json', JSON.stringify(createdRoles));
        });

    });
}

//createRoles();
