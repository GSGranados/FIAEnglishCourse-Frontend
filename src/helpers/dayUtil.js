import dayjs from "dayjs";

/**
 * @function getMonth It returns a 5*7 Matrix with all month days
 * @param {*} month The month you want to get (from 0 to 11)
 */
export function getMonth(month = dayjs().month()){
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year,month,1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(5).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount++;
            return dayjs(new Date(year,month,currentMonthCount));
        })
    })
    return daysMatrix;
}