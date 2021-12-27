const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// //It's not a string but a data buffer (represent binary data)
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

//Read json
const dataBuffer = fs.readFileSync("1-json.json");

//parse the data to an JSON object (JS)
const dataString = dataBuffer.toString();
const dataJSON = JSON.parse(dataString);

//Change some properties
dataJSON.name = "Gino";
dataJSON.age = 35;

//Re-write the original file
fs.writeFileSync("1-json.json", JSON.stringify(dataJSON));
