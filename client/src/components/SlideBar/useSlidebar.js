import React, { useEffect, useState } from "react";

const useSlideBar = (appTranslator) => {
    const [translationApp, setTranslationApp] = useState([]);

    useEffect(() => {
        translationApp && setTranslationApp([...TRANSLATORS.map((translate) => translate?.id == appTranslator ? {...translate, select: true}  : translate)])
    }, [appTranslator]);
    

    return {
        translationApp
    }
}

export default useSlideBar;

const TRANSLATORS = [
    {
        id: 1,
        appName: 'Apple',
        lastDeployment: '2024-01-01 12:00:00',
        select: false
    },
    {
        id: 2,
        appName: 'Banana',
        lastDeployment: '2023-06-01 12:00:00',
        select: false
    },
    {
        id: 3,
        appName: 'Chocolate',
        lastDeployment: '2023-05-01 12:00:00',
        select: false
    },
    {
        id: 4,
        appName: 'Orange',
        lastDeployment: '2023-03-01 12:00:00',
        select: false
    }
]