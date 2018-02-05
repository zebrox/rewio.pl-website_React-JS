import React from 'react';

const Container = (props) => {
    const styles = {
        containerStyle: {
            maxWidth: 1100,
            margin: '0 auto',
            height: '100%'
        }
    };
    const { containerStyle } = styles;
    return (
        <div style={containerStyle}>
            {props.children}
        </div>
    );
};

export default Container;
