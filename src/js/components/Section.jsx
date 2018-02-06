import React, { Component } from 'react';

class Section extends Component {
    render() {
        const { containerStyle } = styles;
        return (
            <div id="test" style={containerStyle} />
        );
    }
}

const styles = {
    containerStyle: {
        backgroundImage: 'url(../img/03.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: 370,
        width: '100%',
        backgroundAttachment: 'fixed'
    }
};

export default Section;
