<a href="https://travis-ci.org/TunedChaos/smm2coursemanager-discord-bot" target="_blank"><img src="https://travis-ci.org/TunedChaos/smm2coursemanager-discord-bot.svg?branch=master" alt="Build Status"></a> <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
# SMM2CourseManager Discord Bot
This is a Discord bot meant for handling interaction with the SMM2 Course Manager Server.

SMM2CourseManager Server is a utility meant for serving up an interface between the database that the SMM2Coursemanager uses, and any clients that wish to connect to it.

## Prerequisites
- <a href="https://nodejs.org" target="_blank">Node.js&reg;</a>
- <a href="https://github.com/TunedChaos/smm2coursemanager-server" target="_blank">SMM2CourseManager Server</a>
  - Or access to someone who has it deployed
## Installation
Clone this repository to the device you intend to use as your server.
```bash
git clone https://github.com/TunedChaos/smm2coursemanager-discord-bot.git
```

Use the Node.js&reg; Package Manager to install prerequisites.
```bash
npm install
```

## Discord Bot Creation
1. Go to the (Discord Developer Page)[https://discordapp.com/developers/applications/] and click **New Application** it will look something like this.<br />
![Discord Developer Page](https://user-images.githubusercontent.com/399379/61584228-11ecbf80-ab12-11e9-85f1-7a16c2e53b0a.png)
2. Give your application a name, you can give it an avatar if you want<br />
![Applicatoin Name](https://user-images.githubusercontent.com/399379/61584256-a1926e00-ab12-11e9-8020-e896188dc8c6.png)
3. Copy and/or remember the **Client ID**, or place it into your `.env` file right now as `BOT_USER_ID`.<br />
![ClientID](https://user-images.githubusercontent.com/399379/61584319-94c24a00-ab13-11e9-8a38-1cce23315e87.png)
4. On the left click the **Bot** selection under Settings<br />
![Click Bot](https://user-images.githubusercontent.com/399379/61584276-f635e900-ab12-11e9-9062-3f7c8441b491.png)
5. Click on **Add Bot** then click on **Yes, do it!**<br />
![Add Bot](https://user-images.githubusercontent.com/399379/61584293-25e4f100-ab13-11e9-83a0-817bcb9c2479.png)
6. You should get a message saying **"A wild bot has appeared!"**<br />
![A wild bot!](https://user-images.githubusercontent.com/399379/61584346-026e7600-ab14-11e9-8fa7-ce5da28e4f53.png)
7. Below your bots **Username** you can see something that looks like this.<br />
![Token](https://user-images.githubusercontent.com/399379/61584361-4b262f00-ab14-11e9-8aab-b0113b1f560d.png)<br />
Click on **Copy** and either save it somewhere, or add it to your `.env` as `BOT_TOKEN`

Alright, the bot creation in the Discord Developer Panel is complete!

## Configuring the Bot
Rename `.env.example` to `.env` and assign the variables as appropriate

Note that if you are deploying via Heroku you **must** set each item in the .env in your settings panel or else it will not work.

## Running
At this point you can just attempt to run the server with `npm start`.

If you wish to have some more detailed monitoring you can run `npm run dev`

## Commands
The bot currently consists of the following commands.
- !add
  - Syntax
    - !add XXX-XXX-XXX
  - Returns
    - Success or failure from server
- !status
  - Syntax
    - !status XXX-XXX-XXX
  - Returns
    - Current status of the course that is requested
- !list
  - Syntax
    - !list
  - Returns
    - A message with a link to LIST_ADDRESS from your .env or settings on Heroku
- !next
  - Syntax
    - !next
  - Returns
    - A message with the next unplayed course and who submitted it.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
