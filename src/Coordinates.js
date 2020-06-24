import React from 'react'
import './App.css';
import * as axios from "axios";
import Card from "./Card";

class Coordinates extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            days: []
        };
    }

   componentDidMount() {
       navigator.geolocation.getCurrentPosition(
           (position) => {
               axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&lang=ru&units=metric&APPID=8f363606550bca615345331a1c3aeff9`)
                   .then(res => {
                       const dailyData = res.data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                       this.setState({days: dailyData})
                   })
           }
       )
   }

    formatCards = () => {
        return this.state.days.map((day, index) => <Card day={day} key={index}/>)
    };

    render() {
        return (
            <div className={'container'}>
                {this.formatCards()}
            </div>
        )
    }
}

export default Coordinates