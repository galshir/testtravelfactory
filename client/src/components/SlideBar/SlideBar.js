import React from "react";
import useSlideBar from "./useSlidebar";
import { useHistory } from "react-router-dom";
import * as S from './style';

const SlideBar = ({appTranslator}) => {
    const history = useHistory();
    const {
        translationApp
    } = useSlideBar(appTranslator)

    const handleChangeApp = ({id}) => {
        history.push(`/translator/${id}`);
    }
    return (
        <S.SlideBarContainer>
            <S.SlidBarTitle>MyApps</S.SlidBarTitle>
            {translationApp && (translationApp?.map((translator, index) => (
                <S.SlidBarButtons selected={translator.select} onClick={() => handleChangeApp(translator)} key={index} >
                    {translator.appName}
                </S.SlidBarButtons>
            )))}
        </S.SlideBarContainer>
    )
}

export default SlideBar;

const LOCAL_URL = 'http://localhost:3000'