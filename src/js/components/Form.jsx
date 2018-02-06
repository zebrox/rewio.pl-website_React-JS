import React, { Component } from 'react';

class Form extends Component {
    render() {
        const { formStyle, nameStyle, containerStyle, textareaStyle, emailStyle } = styles;
        return (
            <form style={formStyle}> 
                <div style={containerStyle}>
                    <input style={nameStyle} type="text" placeholder="Imię i nazwisko" />
                    <input style={emailStyle} type="text" placeholder="Email" />
                </div>
                <textarea style={textareaStyle} placeholder="Wiadomość" />
            </form>
 
        );
    }
}

const styles = {
    formStyle: {
        margin: '2rem 0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerStyle: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center'
    },
    nameStyle: {
        width: '100%',
        height: '2rem',

    },
    emailStyle: {
        width: '100%',
        height: '2rem',
        marginLeft: '2rem',
    },
    textareaStyle: {
        margin: '2rem 0',
        width: '80%',
        height: '5rem',
        boxSizing: 'border-box',
    }
};

export default Form;
