import React, { Component } from 'react'

import imgsearch from '../../assests/Vector.png';

class TopBar extends Component {

    render () {

        return (
            <div className="row TopBar">
                
                <p className="col-md-5">Kεντρική σελίδα</p>
                <div class="col-md-3"></div>
                <div class="search col-md-4">
                    <button type="submit" class="searchButton">
                        <img src={ imgsearch } width="20px" height="auto" />
                    </button>
                    <input type="text" class="searchTerm" placeholder="Αναζήτηση υλικού, έλεγχος αποθεμάτων"></input>
                </div>
                
            </div>
           
        )
    }
}

export default TopBar;