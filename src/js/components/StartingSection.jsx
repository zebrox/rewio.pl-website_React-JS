import React, { Component } from 'react';
import Header from './Header.jsx';

class Background extends Component {
    render() {
        const { containerStyle, textStyle, imageContainerStyle, overlayStyle } = styles;
        return (
            <div>
                <Header text="REWIO BIURO RACHUNKOWE" />
                    <div style={containerStyle}>
                        <div style={overlayStyle} />
                        <div style={imageContainerStyle}>
                            <h1 style={textStyle}>TEXT</h1>
                        </div>
                    </div>
            </div>
        );
    }
}

const styles = {
    overlayStyle: {
        background: 'radial-gradient(ellipse at center, rgba(69,72,77,0.55) 0%,rgba(0,0,0,1) 100%)',
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        opacity: 0.75,
        zIndex: -1,
    },
    containerStyle: {
        backgroundImage: 'url(../img/01.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '62rem',
        backgroundAttachment: 'fixed',
        zIndex: 50,
        position: 'relative'

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
