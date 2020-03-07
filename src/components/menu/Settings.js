import React, { Component } from 'react';

import imgsettings from '../../assests/items.png';

class Settings extends Component {
    render () {
        return (
            <div className="settings">
                <div className="nav-Title-1"><img src={ imgsettings } width="15px" height="auto" />ΡΥΘΜΙΣΕΙΣ</div>
            </div>
           
        )
    }
}

export default Settings;