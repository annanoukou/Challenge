import React, { Component } from 'react';

import imghome from '../../assests/table.png';
import imgcommit from '../../assests/items.png';



class Commit extends Component {
    render () {
        return (
            <div className="commit">
                <div className="nav-Title-1"><img src={ imghome } width="15px" height="auto" />ΚΑΤΑΧΩΡΙΣΗ ΥΛΙΚΩΝ ΚΑΙ ΚΩΔΙΚΩΝ</div>
                <ul>
                    <li>
                        <img src={imgcommit} width="20px" height="auto" className="commitimg"/>Καταχώριση
                    </li>
                </ul>
            </div>
           
        )
    }
}

export default Commit;