import React from 'react';
import { InputPage } from './InputPage.js';
import { useData } from './utilities/firebase.js';

const StudentList = ({ students, keyinsec }) => {
    return(
      <>
        {
          Object.entries(students).map(([key, value]) => {
            if (key > keyinsec-3600000 && key < keyinsec+7200000) {
                return <Student key={key} student={ value } />;
            } else {
                return null;
            }
                
          })
        }
      </>
    )};
  
const Student = ({ student }) => {
    console.log("student", student);
    return (
        <li>
            { student.name }'s flight arrives at { student.time }, contact { student.email } to share a ride
        </li>
)};
  
export const Results = ({ students, date, time, keyinsec }) => {
   // const currdate = new Date(date + "T" + time);
   // const currmilsec = currdate.getTime();
    
    let resultMessage = "";
  // pick user arriving within 1 hr before and 2 hrs after
    if (date !== "" && time !== "" && keyinsec !== undefined) {
        console.log("data(students)", students);
        console.log("Object.entries(students)", Object.entries(students));
        if (Object.entries(students).filter(student => student[0] > keyinsec-3600000 && student[0] < keyinsec+7200000).length === 0) {
            resultMessage = "No matches :( Please try a different time!";       //the one is the user himself
        } else {
            resultMessage = "These Wildcats are looking to rideshare too!";
        }
    }
  
    return (
        <>
            <h2 data-testid="result-message">{resultMessage}</h2>
            <ul>
                <StudentList students={students} keyinsec={keyinsec} />
            </ul>
        </>
    );
};

const ResultsPage = ({ navigation, keyinsec }) => {
    // const [time, setTime] = useState("");
    // const [date, setDate] = useState("");

    // const changeTimeHandler = (e) => {
    //     setTime(e.target.value);
    // }

    // const changeDateHandler = (e) => {
    //     setDate(e.target.value);
    // }

    const [students, loading, error] = useData('/');
    
    if (error) return <h1>{error}</h1>;
    if (loading) return <h1>Loading the results...</h1>;

    // const setData = () => {
    //     const data = {
    //     "name": "Alex",
    //     "email": "alexgold@gmail.com",
    //     "netid": "agp101",
    //     "date": "2021-11-01",
    //     "time": "11:00"
    //     };
    //     set(ref(database, '/1635782400000'), data);

    //     console.log("database", database);
    // };
    const { previous } = navigation;

    return (
        <>
            <h1>NUber</h1>
            
            {/* <h2>Enter in your flight arrival date and time</h2>
            <input type="time" onChange={(e) => changeTimeHandler(e)} />
            <input type="date"  date-cy="date" onChange={(e) => changeDateHandler(e)} /> */}
            {/* <button type="button" button-cy="button" onClick={() => setData()}>Button</button> */}
            <Results students={students} date={InputPage.date} time={InputPage.time} keyinsec={keyinsec} />

            <button className="button" onClick={previous}>Try a different time</button>
        </>
    );
};

export default ResultsPage;