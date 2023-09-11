const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_A_MONTH=160;

let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck == IS_ABSENT) {

    console.log("Employee is Absent");
}
else {
    console.log("Employee is present");
}
let emphrs = 5;

empCheck = Math.floor(Math.random() * 10) % 3;

switch (empCheck) {
    case IS_PART_TIME: emphrs = PART_TIME_HR;

        break;

    case IS_FULL_TIME: emphrs = FULL_TIME_HR

        break;

    case IS_ABSENT: emphrs = IS_ABSENT;
}
let empWage = emphrs * WAGE_PER_HR;
console.log(empWage);


function getWorkingHrs()
{
    switch(empCheck)
    {
    case IS_PART_TIME: 
        return PART_TIME_HR;
        break;
    case IS_FULL_TIME: return FULL_TIME_HR;
    break;
    case IS_ABSENT: return IS_ABSENT 
    }
}

let totalEmphrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
totalEmphrs = getWorkingHrs(empCheck);
let totalEmpwage = emphrs * WAGE_PER_HR;
console.log(totalEmpwage);

let  hrs=0;
for(let i=0;i<NUM_OF_WORKING_DAYS;i++)
{
    empcheck=Math.floor(Math.random()*10)%3;
    hrs+=getWorkingHrs(empcheck);
}
totalempwage=hrs*WAGE_PER_HR;
console.log(totalempwage);

let totalemphr=0;
let totalWorkingDays=0;
while(totalemphr<MAX_HRS_IN_A_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS) 
{
    totalWorkingDays++;
    let empcheck=Math.floor(Math.random()*10)%3;
    totalemphr+=getWorkingHrs(empcheck);
} 
let empwage1 = totalemphr*WAGE_PER_HR;
console.log("Total Days : "+ totalWorkingDays+" Total hours: "+ totalemphr+"Emp Wage :"+ empwage1);