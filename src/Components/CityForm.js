import React, { Component } from 'react';

class CityForm extends Component {
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="city">City:</label>
                    <input id="city" name="city" type="text" placeholder="City Name" />
                </div>
                <br />
                <button>Submit</button>
            </form>
        );
    }
}

export default CityForm;