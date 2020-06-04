import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.restaurants.map((rest, index) => {
                        return (
                            <div key={index}>
                                <h2>{rest.name}</h2>
                                <p>{rest.address}</p>
                                <p>{rest.area}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStatetpProps(state) {
    return state;
}

export default connect(mapStatetpProps, null)(RestaurantList);