export const makeKey = (time, date) => {
    const [year, month, day] = date.split("-");
    const [hour, minutes] = time.split(":");
    // const currdate = new Date(date + "T" + time);
    const currdate = new Date(year, month-1, day, hour, minutes, 0);
    return currdate.getTime();
}