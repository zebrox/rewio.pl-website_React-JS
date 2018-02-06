import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: '#ffffff',
            color: '#000000',
            nameValue: '',
            emailValue: '',
            textareaValue: '',
        };
    }

    handleName(e) {
        this.setState({ nameValue: e.target.value });
    }

    handleEmail(e) {
        this.setState({ emailValue: e.target.value });
    }

    handleTextarea(e) {
        this.setState({ textareaValue: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handldeHoverOn() {
        this.setState({ 
            backgroundColor: '#c91010',
            color: '#ffffff' 
        });
    }

    handleHoverOut() {
        this.setState({ 
            backgroundColor: '#ffffff',
            color: '#000000'
         });
    }

    render() {
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
            },
            submitStyle: {
                backgroundColor: this.state.backgroundColor,
                width: '10rem',
                height: '2rem',
                border: '0.5px solid grey',
                borderRadius: '5px',
                textTransform: 'uppercase',
                color: this.state.color,
                cursor: 'pointer'
            }
        };
        const { formStyle, 
                nameStyle, 
                containerStyle, 
                textareaStyle, 
                emailStyle, 
                submitStyle } = styles;

        return (
            <form style={formStyle}> 
                <div style={containerStyle}>
                    <input 
                        style={nameStyle} 
                        type="text" 
                        placeholder="Imię i nazwisko" 
                        onChange={e => this.handleName(e)} 
                        value={this.state.nameValue}
                    />
                    <input 
                        style={emailStyle} 
                        type="text" 
                        placeholder="Email" 
                        onChange={(e) => this.handleEmail(e)}
                        value={this.state.emailValue}
                    />
                </div>
                <textarea 
                    style={textareaStyle} 
                    placeholder="Wiadomość" 
                    onChange={(e) => this.handleTextarea(e)}
                    value={this.state.textareaValue}
                />
                <input
                    type="submit"
                    value="WYŚLIJ" 
                    style={submitStyle} 
                    onClick={(e) => this.handleSubmit(e)} 
                    onMouseOver={() => this.handldeHoverOn()} 
                    onMouseOut={() => this.handleHoverOut()}
                />            
            </form>
 
        );
    }
}

export default Form;
