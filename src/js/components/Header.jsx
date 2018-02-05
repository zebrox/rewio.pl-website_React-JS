import React, { Component } from 'react';
import Container from './Container.jsx';

class Header extends Component {

    handleClick(e) {
        e.preventDefault();
        const elementOffsetTop = document.getElementById('test').offsetTop;
        window.scrollTo(0, elementOffsetTop);
        console.log(elementOffsetTop);
    }

    handleUp(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    }

    render() {
        const menuItems = [
            'O nas',
            'Księgowość',
            'Kadre i płace',
            'Doradztwo',
            'Nieruchomości',
            'Kontakt'];

        const items = menuItems.map(item => {
            const styles = {
                linkStyle: {
                    textDecoration: 'none',
                    color: 'white'
                },
                textStyle: {
                    marginLeft: '1rem',
                    textTransform: 'uppercase'
                }
            };

            const { linkStyle, textStyle } = styles;

            return (
                <a onClick={e => this.handleClick(e)} href="test" style={linkStyle}>
                    <p style={textStyle}> {item} </p>
                </a>
            );
        });

        const styles = {
            containerStyle: {
                height: 70,
                position: 'fixed',
                top: 0,
                width: '100%',
                backgroundColor: 'rgba(34,34,34,0)',
                zIndex: 20000,

            },
            headerStyle: {
                height: 70,
            },
            navigationStyle: {
                height: '100%',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.9rem'
            },
            navigationItemsStyle: {
                display: 'flex',
            },
            logoStyle: {
                fontSize: '1.3rem',
                cursor: 'pointer'
            }

        };
        const { headerStyle, 
            containerStyle, 
            navigationStyle, 
            navigationItemsStyle, 
            logoStyle
            } = styles;

        return (
            <div style={containerStyle}>
                <header style={headerStyle} ref='header'> 
                    <Container>
                        <div style={navigationStyle}>   
                            <a onClick={e => this.handleUp(e)} style={logoStyle}>
                                <div>{this.props.text}</div>
                            </a>
                            <div style={navigationItemsStyle}> {items} </div>
                        </div>
                    </Container>
                </header>
            </div>
        );
    }
}

export default Header;
