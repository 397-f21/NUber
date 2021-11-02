import { render, fireEvent } from "@testing-library/react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { Results } from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe("result message", () => {
    it("renders no match msg", () => {
        const data = {
            "/1635782400000": {
                "name": "Test",
                "email": "test@gmail.com",
                "netid": "test101",
                "date": "2021-11-01",
                "arrival": "11:00"
            }
        };

        // const { getByTestId } = render(<Results students={data} date={"10:00"} time={"2021-10-31"} />);
        const { wrapper } = shallow(<Results students={data} date={"10:00"} time={"2021-10-31"} />);
        expect(wrapper.text()).toMatch("No matches :( Please try a different time!");
        // const resultMessage = getByTestId("result-message");
        // console.log("resultMessage", resultMessage);
        // expect(resultMessage).toBeTruthy();
        // expect(resultMessage).stringMatching("No matches :( Please try a different time!");
    });
});