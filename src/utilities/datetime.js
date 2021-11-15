export const makeKey = (time, date) => {
    const [year, month, day] = date.split("-");
    const [hour, minutes] = time.split(":");
    const currdate = new Date(year, month-1, day, hour, minutes, 0);

    const utcdate = new Date(currdate.toLocaleDateString('en-US', { timeZone: "UTC" }));
    const locdate = new Date(currdate.toLocaleDateString('en-US', { timeZone: "America/Chicago" }));
    const offset = utcdate.getTime() - locdate.getTime();
    console.log("offset", offset);
    console.log("date", date, "time", time, "currdate", currdate, "currdate value", currdate.valueOf());
    console.log("currdate.getTime()", currdate.getTime());
    return currdate.getTime();
}