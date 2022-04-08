/*
1. Replace all the bands country with Canada
  a. Iterate through all the array and update the country with Canada
2. Replace all the names with capitalized names
  a. Iterate through all the array
  b. Split the name into an array of words
  c. Replace the first letter with a capitalized letter
  d. Join the array
  e. Replace the '.' with a ''
3. return band array
*/
function changeName(name) {
  let splitName = name.split (' ');
  let capitalizedName = splitName.map(name => {
    let capitalized = name.split('');
    capitalized[0] = capitalized[0].toUpperCase();
    return capitalized.join('');
  }).join(' ');

  return capitalizedName.replace('.','');

}
function processBands(data) {
  let correctedData = data.map(band => {
    return{
      name: changeName(band.name),
      country: 'Canada',
      active: band.active
    };
  });

  console.log(data);
  console.log(correctedData);
  return correctedData;
}

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

processBands(bands);
