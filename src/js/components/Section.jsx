import React, { Component } from 'react';

class Section extends Component {
    render() {
        const { containerStyle } = styles;
        return (
            <div style={containerStyle} />
        );
    }
}

const styles = {
    containerStyle: {
        backgroundImage: 'url(../img/03.jpg)',
        height: '800px',
        width: '100%',
        backgroundAttachment: 'fixed'
    }
};

export default Section;
