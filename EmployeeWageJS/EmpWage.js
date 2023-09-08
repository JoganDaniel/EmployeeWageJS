const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PER_HR = 20;

let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck == IS_ABSENT) {

    console.log("Employee is Absent");
}
else {
    console.log("Employee is present");
}
