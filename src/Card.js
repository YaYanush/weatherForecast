import React from 'react'
import styled from "styled-components";

export const Box= styled.div`
cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius:5px;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 250px;
  margin: 20px;
  background: linear-gradient(to top,${props => props.theme.boxColor1}, ${props => props.theme.boxColor});
  background-color: ${props => props.theme.boxColor};
  color: ${props => props.theme.textColor};
  &:hover {
    transform: scale(1.15)
  }
`;

export const Icon = styled.div`
color:${props => props.theme.textColorIcon};
`;

class Card extends React.Component {

    render() {
        const ms = this.props.day.dt * 1000;
        const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
        const imgURL = "owf owf-" + this.props.day.weather[0].id + " owf-5x icon-style";

        return (
            <div className={'wrapper'}>
                < div className="col-auto">
                    <Box>
                        <h3 className="card-title">{weekdayName}</h3>
                        <Icon><i className={imgURL}></i></Icon>
                        <h2>{Math.round(this.props.day.main.temp)} °C</h2>
                        <div className="card-body">
                            <p className="card-text">{this.props.day.weather[0].description}</p>
                        </div>
                    </Box>
                </div>
            </div>
        )
    }
}

export default Card