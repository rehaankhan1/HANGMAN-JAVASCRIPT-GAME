// const getPuzzle = (callback) => {
//     const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', (e) => {
//   if(e.target.readyState === 4 && e.target.status === 200){
//     const data = JSON.parse(e.target.responseText)
//    callback(undefined,data.puzzle)
   
//   }else if(e.target.readyState === 4){
   
//     callback('Invalid Request!',undefined)
//   }
// })
// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
// request.send()
// }


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