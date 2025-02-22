/* Your Code Here */
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(arrOfArrays) {
    const arrayOfObjects = [];
    arrOfArrays.forEach(subarray => {
        arrayOfObjects.push(createEmployeeRecord(subarray))
    });
    return arrayOfObjects
}

function createTimeInEvent(dateStamp) {
    const dateArray = dateStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number(dateArray[1]),
        date: dateArray[0]
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    const dateArray = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number(dateArray[1]),
        date: dateArray[0]
    })
    return this
}

function hoursWorkedOnDate(hoursWorkedOnDateDateStamp) {
    const timeIn = this.timeInEvents.find((timeIn) => timeIn.date === hoursWorkedOnDateDateStamp)
    const timeOut = this.timeOutEvents.find((timeOut) => timeOut.date === hoursWorkedOnDateDateStamp)
    return ((timeOut.hour - timeIn.hour) / 100)
}

function wagesEarnedOnDate(wagesEarnedOnDatedateStamp) {
    let returnNumber = hoursWorkedOnDate.call(this, wagesEarnedOnDatedateStamp) * this.payPerHour
    return returnNumber
}

function findEmployeeByFirstName(srcArray, firstName) {
    let returnRecord = {}
    srcArray.forEach(record => {
        if (record.firstName === firstName) {
            returnRecord = record
        }
    })
    return returnRecord
}

function calculatePayroll(arrOfEmployeeRecords) {
    let sumToPay = 0;
    arrOfEmployeeRecords.forEach(employee => {
        sumToPay = sumToPay + allWagesFor.call(employee)
    })
    return sumToPay
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

