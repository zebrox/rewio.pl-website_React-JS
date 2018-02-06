import React, { Component } from 'react';
import Form from './Form.jsx';

class Contact extends Component {
    render() {
        const { headerStyle, containerStyle } = styles;
        return (
            <div>
                <div style={containerStyle}>
                    <h3 style={headerStyle} id='KONTAKT'> <b>zapraszamy</b> do kontaktu </h3>
                    <p>05-502 Wólka Kozodawska,</p>
                    <p>ul. Czarodziejska 28</p>
                    <p>REGON: 368966453, NIP: 1231381422</p>
                    <p>Numer KRS: 0000708896</p>
                </div>
                <Form />
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    headerStyle: {
        fontSize: '2rem',
        textTransform: 'uppercase'
    }
};

export default Contact;
