import React from "react";
import DisplayItems from "./DisplayItems";
import { useHome } from "./useHome";
import * as S from './style'
import SlideBar from "../../components/SlideBar";

const Home = () => {

    const {
        translators,
        createNewTranslateApp,
        downLoadXLSX,
        deploySave
    } = useHome();

    return (
        <>
            <SlideBar/> 
           <S.HomeContainer>
                <DisplayItems 
                    translators={translators} 
                    downLoadXLSX={downLoadXLSX}
                    createNewTranslateApp={createNewTranslateApp}
                    deploySave={deploySave} 
                 /> 
           </S.HomeContainer>
        </>
    )
}

export default React.memo(Home);