import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setRestaurants } from '../Store/action';

const api = "http://opentable.herokuapp.com/api/restaurants";

class CityForm extends Component {

    // CALL TO OPENTABLE API THAT SETS DATA TO REDUX STORE
    getRestraunt = (e) => {
        e.preventDefault();
        axios.get(api, {
            params: {
                city: document.querySelector(".city").value,
                per_page: 100,
                name: document.querySelector(".name").value,
            }
        }).then((res) => {
            const list = res.data.restaurants
            this.props.setRestaurants(list)
        })
    }

    render() {
        return (
            <form>
                <div className="form">
                    <label className="visuallyHidden" htmlFor="city">City: </label>
                    <input className="city" id="city" name="city" type="text" placeholder="City Name" />
                </div>
                <div className="form">
                    <label className="visuallyHidden" htmlFor="name">Name: </label>
                    <input className="name" id="name" name="name" type="text" placeholder="Name of Restaurant"/>
                </div>
                
                <div className="form">
                    <button onClick={this.getRestraunt}>Submit</button>
                </div>
            </form>
        );
    }
}

export default connect(null, {setRestaurants}) (CityForm);