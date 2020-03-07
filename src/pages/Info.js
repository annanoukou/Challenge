import React, { Component } from 'react';
import './pages.css';

class Info extends Component {


    state = {
        userData: [
            { id: '1', name: 'ΕΞΑΓΩΓΗ', desc: 'Εξαγωγή υλικών ή ρεταλιών από την αποθήκη', color: "#C2566D" },
            { id: '2', name: 'ΜΕΤΑΚΙΝΗΣΗ', desc: 'Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη', color: "#F0C17D" },
            { id: '3', name: 'ΕΙΣΑΓΩΓΗ', desc: 'Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη', color: "#2BC3A7" }
        ]
    };
    
    deleteUser = id => {
        
    };
    
    renderItems = () => {
        const data = this.state.userData;
    
        const mapRows = data.map((item, index) => (
            <div className="attributes row col-md-4" key={item.id}>
                <div className="circle" style={{background:item.color}}></div>
                <li className="">

                    {}
                    
                    <div className="item-name">{item.name}</div>
                    <div className="item-desc">{item.desc}</div>
                    
                </li>
            </div>
        ));
        
        return mapRows;
    };

    render () {
        return (
            <div className="info">

                <ul>{this.renderItems()}</ul>

            </div>
           
        )
    }
}

export default Info;