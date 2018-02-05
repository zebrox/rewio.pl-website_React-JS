import React, { Component } from 'react';
import Header from './Header.jsx';

class Background extends Component {
    render() {
        const { containerStyle, textStyle, imageContainerStyle, overlayStyle } = styles;
        return (
            <div>
                <Header text="REWIO BIURO RACHUNKOWE" />
                <div style={overlayStyle}>
                    <div style={containerStyle}>
                        <div style={imageContainerStyle}>
                            <h1 style={textStyle}>OTO NAPIS</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    overlayStyle: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundAttachment: 'fixed',
        zIndex: 1000,
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundImage: 'url(../img/01.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '62rem',
        backgroundAttachment: 'fixed',
        zIndex: 50,

    },
    imageContainerStyle: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white' 
    }
};

export default Background;
