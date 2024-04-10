/*1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/


function displayTime(){
    let date =  new Date();
    let day = date.getDay();

    switch(day){
        case 0 : console.log("Sunday");
        break;
        case 1 : console.log("Monday");
        break;
        case 2 : console.log("Tuesday");
        break;
        case 3 : console.log("Wednesday");
        break;
        case 4 : console.log("Thursday");
        break;
        case 5 : console.log("Friday");
        break;
        case 6 : console.log("Saturday");
        break;
    }

    let hour = date.getHours();
    let min = date.getMinutes() ;
    let sec = date. getSeconds() + 1;


 (hour > 12) ? console.log(hour - 12 + "PM" + ":" + min + ":" + sec ) : (hour  + "AM" + ":" + min + ":" + sec )




}


//displayTime();

/*2. Write a JavaScript program to print the current window contents.*/
function WinPrint(){
    window.print();
}

//WinPrint();


/*3. Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/

function  currDate(){
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();


    console.log(month +"-"+day+"-"+year);
    console.log(month +"/"+day+"/"+year);
    console.log(day +"-"+month+"-"+year);
    console.log(day +"/"+month+"/"+year);
}
//currDate()

/*4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7*/


function Triangle(a,b,c){
    let SemiPerimeter  = (a+b+c)/2;
    let area = Math.sqrt(SemiPerimeter * (SemiPerimeter - a) * (SemiPerimeter - b) * (SemiPerimeter -c));

    console.log(area);
}

//Triangle(5,6,7)

/*5. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  */

function leapYear(year){
    if(year % 4 ===0 || year % 100 ===0 || year % 400 === 0){
        console.log("Its a Leap Year")
    }
    else{
        console.log("Its not a Leap Year")
    }
}

//leapYear(2001);

/*7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  */
function sundayFinder(){
    for(let i = 2014; i<= 2050; i++){
        let newYear = new Date();
        newYear.setFullYear(i, 0, 1);
        if(newYear.getDay() === 0){
            console.log("Its a Sunday, In Year : " + i)
        }
    }
   
}


sundayFinder();

/*8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  */

function randomNumber(){
    let random = Math.floor(Math.random()*10 + 1);
    let user = parseInt(prompt("Enter Your Number"));
    if(random == user){
        console.log("Good Work");
    }
    else{
        console.log("Not Matched");
    }

}

//randomNumber();


/*9. Write a JavaScript program to calculate the days left before Christmas.  */

/*10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  */

function calculator(){
    let f_number = document.getElementById("f_number");
    let S_number = document.getElementById("s_number");
    let divide = document.getElementById("Div");
    let multiply  = document.getElementById("Mul");
    let Output = document.getElementById("Output")

    console.log(f_number.value)
    divide.addEventListener('click', ()=>{
        Output.innerText = ( f_number.value / S_number.value);
    });
    multiply.addEventListener('click', ()=>{
        Output.innerText = ( f_number.value * S_number.value);
    });

}
//calculator()

/*11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C*/


function tempConvertor(Celsius){
    let Fahrenheit =  (9/5 * Celsius) + 32;
    console.log(Fahrenheit + " F");
}
//tempConvertor(60);

/*12. Write a JavaScript program to get the website URL (loading page).  */

function urlF(){
    console.log(document.URL);
}

//urlF();