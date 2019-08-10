This is a simple project made with the use of Javascript es7, babel and Webpack to create a Hangman Based Word Guessing Game.
You can try it out at -> https://rehaan-hangman-project.netlify.com/
This is a simple project made with the use of Javascript es7, babel and Webpack to create a Hangman Based Word Guessing Game.

## INSTALLATION
This command will install all the npm_modules.
```bash
npm install
```
## USAGE
Open https://rehaan-hangman-project.netlify.com/ in your browser and then you have to start typing a random word on your keyboard
You have only 5 chances/lives to guess a wrong word. To see the correct answer it will be avialable in the console window
![1111](https://user-images.githubusercontent.com/20107730/62825417-db620c00-bbc8-11e9-97ae-5d0046d3cbda.JPG)
![222222](https://user-images.githubusercontent.com/20107730/62825427-f9c80780-bbc8-11e9-8f37-bd9bd83b5d44.JPG)
![33333](https://user-images.githubusercontent.com/20107730/62825431-09475080-bbc9-11e9-8e37-99f3eef87236.JPG)
You can click on RESET , If you want to play it onc again.

## IMPORTANT POINTS
-> This project uses Babel &amp; Webpack
-> When uploading it to Netlify, only upload the public folder directly and make sure than when you change something inside a script , and you want to upload the project, You have to run the following code
```bash
npm run build
```
Above line will create a bundle.js file which is being used with Babel to convert the code into a single file which can be used by every Browser , irrespective of the browser version
When you want to run the project and test it in your local enviroment you have to write the following npm code
```bash
npm run dev-server
```
For adding more commands, you have to go in package.json 
```bash
{
  "name": "boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "input.js",
  "scripts": {
    "dev-server": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-loader": "^7.1.5",
    "babel-polyfill": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "live-server": "^1.2.1",
    "webpack": "^4.39.1",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.8.0"
  }
}

```
## HOW PROJECT WORKS
We are using API by andrew mead which return back a Unique JSON string consisting of 2 words.
http://puzzle.mead.io/puzzle?wordCount=numberOfWords
It is Avialable in src/requests.js file

## request.js

```bash
const getPuzzle = async (wordCount) => {
const response =  await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

 if(response.status === 200){
const data = await response.json()
return data.puzzle
 }else{
   throw new Error('Unable to get Puzzle')
 }
}




const getCurrentCountry = async () => {

  const location = await getLocation()
  const country = await getCountryDetails(location)
  return country
     }



 const getCountryDetails = async (code) => {
const response = await fetch('https://restcountries.eu/rest/v2/all')
if(response.status === 200){
  const data = await response.json()
  const filter = data.find((index,item) => {
    return index.alpha2Code === code
  })
  return filter.name

  //return  data.find((index, item) => { return index.alpha2Code === code})
}else{
  throw new Error('Invalid Request Brother!')
}

 }








 const getLocation = async () => {
   const response = await fetch('http://ipinfo.io/json?token=77818e0f4fc770')
   if(response.status === 200){
     const data = await response.json()
     return data.country
   }else{
    throw new Error('Not Avialable')
   }
 }


export { getPuzzle as default }
```

Here we, are using export since we are export to export the functions to the index.js file where we import them back.
you can use 
-> getLocation() to get current location of the user and as wee can see in the code that it will return a JSON response which we parse and only show the name of the country.
-> getCountryDetails('IN') is being used with RestCountries API to get information about a specific country and matching it with the country code. Such as IN stands for INDIA.
You can look at the JSON response here :: https://restcountries.eu/rest/v2/all















## License
[MIT](https://choosealicense.com/licenses/mit/)
n-hangman-project.netlify.com/
