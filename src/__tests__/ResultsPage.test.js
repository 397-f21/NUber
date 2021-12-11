import { render } from "@testing-library/react";
import { Results } from "../ResultsPage";
import { makeKey } from '../utilities/datetime.js';

describe("Displays inputted names", () => {
    
    it("Render names", () => {
        const time = "11:00";
        const date = "2021-11-01";
        const key = makeKey(time, date);
        const student = {
                "name": "Alex",
                "email": "alexgold@gmail.com",
                "netid": "agp101",
                "date": date,
                "time": time
                };

        // { students, date, time, keyinsec }
        const { getByTestId } = render(<Results time = { "11:00" } keyinsec = { key } date={ "2021-11-01" } students = { [student] }/>);
        const input = getByTestId("student-list");
        expect(input).toBeTruthy();
    })
})