import React from 'react'
import './App.css';
import {Content} from "./App";
import {bounce} from "react-animations";
import styled, {keyframes} from 'styled-components'
import Coordinates from "./Coordinates";

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

export default class Container extends React.Component {
    render() {
        return (
            <>
                <Content>
                   <Bounce><div className={'title'}>WEATHER FORECAST IN YOUR CURRENT GEOLOCATION</div></Bounce>
                    <Coordinates/>
                </Content>
            </>
        )
    }
}