/* Write a while loop to calc the sum of all numbers from 1 to 5
and stores the result in a variable named sum*/

let sum=0;
let i=1;
while (i<=5) {
    sum+=i;
    i++;   
}
console.log(sum);

/* Write a while loop to countdown from 5 to 1
and stores the result in the array named countdown*/

let countdown=[];
let j=5;
while (j>=1) {
    countdown.push(j);
    j--;   
}
console.log(countdown);
/* Write a do while loop that prmpts a user to enter their favourite tea type until they enter stop
store each tea type in an array named teaCollection*/
// let teaCollection=[];
// let tea;
// do {
//     tea=prompt(`Enter your favourite tea(type "stop" to finish)`);
//     if(tea!=="stop"){
//         teaCollection.push(tea);
//     }
    
// } while (tea!=="stop");
//this code will run in browser due to prompt

/*Write a do while loop that adds numbers from 1 to 3
 and stores the result in a variable named 'total" */
let total=0;
let k=1;
 do { total+=k;   
    k++;
    console.log(total);
    
} while (k<=3);

/*write a for loop that multiplies each element in the array [2,4,6]
 and stores the result in a new array named multiplication*/

 let multipliedNumber=[];
 let number=[2,4,6]
 for (let l = 0; l < number.length; l++) {
    multipliedNumber.push(number[l]*2);   
 }
 console.log(multipliedNumber); 

 /* write a for loop that lists all the cities in the array ["Paris","New York","Tokyo","London"]
 and stores each city in a new array named "cityList"*/

let cities= ["Paris","New York","Tokyo","London"];
let cityList=[];

for (let c = 0; c < cities.length; c++) {
      cityList.push(cities[c]); 
}
console.log(cityList);  