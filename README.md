<!-- ABOUT THE PROJECT -->
## About The Project

## Splash Page
![frontpagescreenshot](https://user-images.githubusercontent.com/90157662/162717914-aa851377-6379-4958-a39b-915f4555d9df.JPG)

## Home Page
![songselectionss](https://user-images.githubusercontent.com/90157662/162728669-61272b1b-adf8-4454-944f-a854fcefc3d2.JPG)

## Upload Music Page
This page allows user to upload a new song with a valid imageUrl and songUrl.

![image](https://user-images.githubusercontent.com/90157662/171748442-815c9873-41a8-4ff3-8072-9891787c174f.png)

## Specific Song Page
This page allows user to play the song and leave a comment on the song.

![image](https://user-images.githubusercontent.com/90157662/171748647-f4996c63-7c04-42fd-bae9-23bd9e5af37c.png)

## Edit Song Page
This page allows user to edit Song Title and Song Image

![image](https://user-images.githubusercontent.com/90157662/171748803-17f2f515-f999-4483-84e8-41c9918850ea.png)

## Delete Song button
On Song SPecific Page, if user owned, Delete Song button shows. When clicked song is deleted and redirects user back to home page.

![image](https://user-images.githubusercontent.com/90157662/171748859-9a35e6cb-10dd-4fe4-9f58-25d953001d4d.png)




<p align="right">(<a href="#top">back to top</a>)</p>



### Built With
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://icongr.am/devicon/express-original.svg?size=128&color=ffffff" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Cmizell186/OnlySounds
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a PSQL user with CREATEDB PASSWORD
   ```js
   CREATE USER <name> WITH CREATEDB PASSWORD <'password'>;
   ```

4. Create a .env file to access the backend based on the .env.example within the respective directory
      - input desired information into .env


5. Create Database, Migrate, and Seed models.
   ```sh
   npx dotenv sequelize db:create
   npx dotenv sequelize db:migrate
   npx dotenv sequelize db:seed:all
   ```

6. Start the backend in the backend directory
   ```sh
   npm start
   ```

8. Start the frontend in the frontend directory, this should open the project in your default browser. If not, navigate to http://localhost:3000
   ```sh
   npm start
   ```

9. From here you can create and sign in as a user and begin using TBD NAME


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/Cmizell186/OnlySounds](https://github.com/Cmizell186/OnlySounds)
Live Site: [OnlySounds](https://onlysounds.herokuapp.com/)


<p align="right">(<a href="#top">back to top</a>)</p>
