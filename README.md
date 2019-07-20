[![Build Status](https://travis-ci.org/TunedChaos/smm2coursemanager-discord-bot.svg?branch=master)](https://travis-ci.org/TunedChaos/smm2coursemanager-discord-bot) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# SMM2CourseManager Discord Bot
This is a Discord bot meant for handling interaction with the SMM2 Course Manager Server.

SMM2CourseManager Server is a utility meant for serving up an interface between the database that the SMM2Coursemanager uses, and any clients that wish to connect to it.

## Installation, Configuration, and Usage
Available in the [Wiki](https://github.com/TunedChaos/smm2coursemanager-discord-bot/wiki)

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
