import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { Results } from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe("result message", () => {
    it("renders no msg if no date & time input", () => {
        const data = {
            "1635782400000": {
                "name": "Test",
                "email": "test@gmail.com",
                "netid": "test101",
                "date": "2021-11-01",
                "arrival": "11:00"
            }
        };
        const wrapper = shallow(<Results students={data} date={""} time={""} />);
        expect(wrapper.text()).toMatch("");
    });

    it("renders no match msg", () => {
        const data = {
            "1635782400000": {
                "name": "Test",
                "email": "test@gmail.com",
                "netid": "test101",
                "date": "2021-11-01",
                "arrival": "11:00"
            }
        };

        const wrapper = shallow(<Results students={data} date={"2021-10-31"} time={"10:00"} />);
        expect(wrapper.text()).toMatch("No matches :( Please try a different time!");
    });

    it("renders match message of one person", () => {
        const data = {
            "1635782400000": {
                "name": "Test",
                "email": "test@gmail.com",
                "netid": "test101",
                "date": "2021-11-01",
                "arrival": "11:00"
            },
            "/1635782700000": {
                "name": "Test",
                "email": "test@gmail.com",
                "netid": "test101",
                "date": "2021-11-01",
                "arrival": "11:05"
            }
        };

        const wrapper = shallow(<Results students={data} date={"2021-11-01"} time={"11:10"} />);
        console.log("wrapper text:" + wrapper.text());
        expect(wrapper.text()).toMatch("These Wildcats are looking to rideshare too!");
    });

});