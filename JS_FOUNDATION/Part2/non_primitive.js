const username ={
    firstname:"geetanjali",
    lastname:"kushwaha"
};

console.log(username.firstname);
//we can't change const means username but we can chnge its attribute

username.firstname="saurabh";
username.lastname="kumar";

console.log(username.firstname);
console.log(typeof username);

//if the firstname have space or in quotes then we can use [] to display it

const company={
    "employee dept":"IT",
     salary:2000000
}

console.log(company["employee dept"]);
console.log(typeof company);

let today =new Date(); //Date fnction is to get the date with month year etc

console.log(today.getDate()); //to get the exact date 
;
//Array

let arr = ["geetanjali",33,"cse",true]
console.log(arr[2]);  //indexing

//type conversion
let value = "2abc";
console.log(Number(value));
console.log(typeof value);

console.log(Number(null));
console.log(Number(undefined));





