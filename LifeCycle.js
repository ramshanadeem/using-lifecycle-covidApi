import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import MediCard from './MediCard';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';


class LifeCycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


            confirmed: 0,
            recovered: 0,
            deaths: 0

        }
    }


    componentDidMount() {

        Axios.get('https://covid19.mathdro.id/api')
            .then((res) => {
                console.log(res.data)
                this.setState({
                    confirmed: res.data.confirmed.value,
                    recovered: res.data.recovered.value,
                    deaths: res.data.deaths.value
                })

            })

    }



    render() {


        return (
            <div>
                <li>{this.state.confirmed}</li>
                <li>{this.state.recovered}</li>
                <li>{this.state.deaths}</li>
                <MediCard text='Confirmed Cases' value={this.state.confirmed} color='blue' />
            </div>
        )
    }
}
export default LifeCycle;
