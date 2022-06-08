# **[Self Care Backend](https://selfcarecentralserver.herokuapp.com/)**

![Badge](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents
---
* [License](#license)
* [Installation](#installation)
* [Packages](#packages)
* [Description](#description)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)

<br>

## License 
---
[MIT License](./LICENSE) <br>

Copyright (c) 2022 Haley Seymour

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 <br>

<br>

## Installation
---
To install this project: 
1. Start by forking this repository on Github. 
2. Clone this project to your machine by using the "git clone + URL" command. 
3. Open the project with your favorite text editor, like VS Code (in your terminal, first type "cd foldername" then "code ."). 
4. Install Node.js from their website, if you have not already. Here are some additional [instructions](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).
5. Install MySQL from their website, if you have not already. Here are some additional [instructions](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide).
6. Suggest installing [Nodemon](https://www.npmjs.com/package/nodemon) if you have not already.
7. Suggest installing [Insomnia](https://insomnia.rest/download) if you have not already. 
8. This project includes a package.json file that specifies dependencies for this project, so be sure to run "npm install". This will install the packages specified in the next section. 
10. If you are working in correlation with the [front end](https://github.com/Interrubble/SelfCareCentral), make sure to change the front end to send fetch requests to your local server rather than the deployed heroku URL. Make this change in `src/utils/API.js` by changing the `BASE_URL` on line 1. 

<br>

## Packages
---
General Technologies: 
- Javascript
- Node.js
- Git
- Heroku 
- Insomnia

NPM Packages
- mysql2
- sequelize 
- express
- cors
- dotenv
- bcrypt
- jsonwebtoken
- nodemon 

<br>

## Description
---
This project is a MySql server for our project 'Self Care Central'. The project is a hub for tracking all things self care. The server contains models for users, sleep, mindfulness, hydration, goals and fitness. Users have a one-to-many relationship with all but goals; users have a one-to-one relationship with goals. The controller routes are built out with full CRUD functionality for sleep, mindfulness, hydration, goals and fitness. 
<br><br>
Check out the front end [Github](https://github.com/Interrubble/SelfCareCentral) and [deployed project](https://selfcarecentral.herokuapp.com/). 
<br><br>
To view this server deployed, click [here](https://selfcarecentralserver.herokuapp.com/). <br><br>

## Usage 
---
After following the instructions in installation: 
1. Open the database file in your terminal. 
2. Run command "mysql -uroot -p" and enter your password (note: keystrokes will not show).
3. Run command "SOURCE schema.sql" to set up the database and tables.
4. Optionally, run command "npm run resetdb" to replace steps 2 and 3 (enter password when prompted).
5. OK to 'quit' MySql.
6. Create a file called ".env" in the root folder of the program. In this folder include the following information: <br>
DB_NAME='' <br>
DB_USER='' <br>
DB_PW='' <br>
JWT_SECRET=''<br>
7. Open the "index.js" file in your integrated terminal. 
8. Run command "npm run seed" (or "node seed/seed.js") to seed the database if desired.
9. Run command "npm run start" (or "node index.js"). Alternatively, if you have Nodemon installed, run "npm run watch" (or "nodemon index.js"). 
10. Open 'localhost:3001' in your browser and see the site in action.
11. When finished, run CONTROL-C in terminal to end stop nodemon, and trash the session. 
<br>

## Contributing 
---
This project was completed as a group as 'project 3' for the University of Washington Web Development Bootcamp. If you would like to contribute, please feel free and contact us with questions. 

<br>

## Questions?
---
If you have any questions, please feel free to contact our team: 
1. Project Manager: Haley Seymour | [Github](https://github.com/hseymo) | [email](mailto:haleycseymour@comcast.net)
2. Git Administrator: Chris DeLaGarza | [Github](https://github.com/Interrubble) | [email](delagarzachris@icloud.com)
3. Kalif Purce | [Github](https://github.com/Unconditionallove47) | [email](kpurcedesigns@gmail.com)
4. Jaden | [Github](https://github.com/eminss) | [email]()