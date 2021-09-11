# devClub-bot
### THIS IS A WIP

This bot was created to help to administrate the Dawson's devClub discord.

TODO LIST
---  
- [x] Script to register commands
- [ ] Student name-id check on log-in
- [ ] Command redirection (_partially implemented_)
- [ ] Role creation system (_partially implemented_)
- [ ] Role assign system
- [ ] Roles for non programmers
- [ ] Help line
- [ ] Log system
- [ ] Database to store information and stop using json files 

How to set up the bot
---
1. Create a file called `config.json` on the root foolder
2. Put your credentials inside the json file
``` json
{
  "clientId": "your_bot_discord_id",
  "guildId": "your_test_server_id",
  "token": "your_bot_token"
}
```
3. Run `npm install` to download all node_modules
4. Run `npm run deploy` to register the commands to your server
5. Uncomment line 17 on `index.ts` and run `npm run start`. You can comment it again after your first run.
