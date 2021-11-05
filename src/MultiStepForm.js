import React from 'react';
import { useStep } from 'react-hooks-helper';

import ResultsPage from './ResultsPage';

const steps = [
    // { id: "login" },
    // { id: "input" },
    { id: "results" }
];

const MultiStepForm = () => {
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    switch (id) {
        case "login":
            return null;
        case "input":
            return null;
        case "results":
            return <ResultsPage />;
    }
};

export default MultiStepForm;