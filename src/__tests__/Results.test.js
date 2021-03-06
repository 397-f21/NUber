import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { Results } from '../ResultsPage';
import { makeKey } from '../utilities/datetime';

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
        expect(wrapper.text()).toEqual(expect.not.stringContaining("No matches :( Please try a different time!"));
        expect(wrapper.text()).toEqual(expect.not.stringContaining("These Wildcats are looking to rideshare too!"));
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

        const date = "2021-10-31";
        const time = "10:00";

        const keyinsec = makeKey(time, date)+Math.floor(Math.random() * 1000);

        const wrapper = shallow(<Results students={data} date={date} time={time} keyinsec={keyinsec} />);
        expect(wrapper.text()).toMatch("No matches :( Please try a different time!");
    });

    it("renders no match msg for correct date incorrect time", () => {
        const data = {
            "1635782400000": {
                "name": "Test",
                "email": "test@gmail.com",
                "netid": "test101",
                "date": "2021-11-01",
                "arrival": "11:00"
            }
        };

        const date = "2021-11-01";
        const time = "7:00";

        const keyinsec = makeKey(time, date)+Math.floor(Math.random() * 1000);

        const wrapper = shallow(<Results students={data} date={date} time={time} keyinsec={keyinsec} />);
        expect(wrapper.text()).toMatch("No matches :( Please try a different time!");
    });

    it("renders match message of one person", () => {
        const time = "11:10"
        const date = "2021-11-01"

        const data = {
            "1635782400000": {
                "name": "Test",
                "email": "test@gmail.com",
                "netid": "test101",
                "date": "2021-11-01",
                "arrival": "11:00"
            },
            "1635782700000": {
                "name": "Test2",
                "email": "test2@gmail.com",
                "netid": "test102",
                "date": "2021-11-01",
                "arrival": "11:05"
            }
        };

        const keyinsec = makeKey(time, date)+Math.floor(Math.random() * 1000);
        console.log("test keyinsec", keyinsec);

        const wrapper = shallow(<Results students={data} date={date} time={time} keyinsec={keyinsec} />);
        expect(wrapper.text()).toMatch("These Wildcats are looking to rideshare too!");
    });

});