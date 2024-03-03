import { useCallback, useEffect, useState } from "react"
import { apiCreateNewTranslateApp, apiDeploySave, apiDownLoadXLSX, getTranslateApps } from "../../services";

export const useHome = () => {
    const [translators, setTranslators] = useState([]);

    useEffect(() => {
        translators &&  setTranslators([...getApps()]);
    }, [MANY_PRODUCTS]);

    const getApps = async () => {
        try {
           const {data} = await getTranslateApps();
           return data;
        } catch (error) {
            return [];
        }
    }

    const createNewTranslateApp = useCallback(async (index) => {
        try {
            const {data} = await apiCreateNewTranslateApp();
        } catch (error) {
            
        }
    }, [translators]);

    const downLoadXLSX = useCallback(async (index) => {
        try {         
            const {data} = await apiDownLoadXLSX();
        } catch (error) {
            
        }
    }, [translators]);
    
    const deploySave = useCallback(async (index) => {
        try {        
            const {data} = await apiDeploySave();
        } catch (error) {
            
        }
    }, [translators]);

    return {
        translators,
        createNewTranslateApp,
        downLoadXLSX,
        deploySave
    }
}

const MANY_PRODUCTS = [
    {
        id: 1,
        appName: 'App1',
        lastDeployment: '2024-01-01 12:00:00'
    },
    {
        id: 2,
        appName: 'App2',
        lastDeployment: '2023-06-01 12:00:00'
    },
    {
        id: 3,
        appName: 'App3',
        lastDeployment: '2023-05-01 12:00:00'
    },
    {
        id: 4,
        appName: 'App4',
        lastDeployment: '2023-03-01 12:00:00'
    }
]

