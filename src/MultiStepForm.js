import React from 'react';
import { useStep } from 'react-hooks-helper';
import InputPage from './InputPage';
import ResultsPage from './ResultsPage';

const steps = [
    // { id: "login" },
    { id: "input" },
    { id: "results" }
];

const MultiStepForm = () => {
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    switch (id) {
        case "login":
            return null;
        case "input":
            return <InputPage navigation={navigation} />;
        case "results":
            return <ResultsPage />;
        default:
            return <inputPage navigation={navigation} />;
    }
};

export default MultiStepForm;