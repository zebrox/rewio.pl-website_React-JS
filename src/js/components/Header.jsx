import React, { Component } from 'react';
import Container from './Container.jsx';

class Header extends Component {

    render() {
        const menuItems = [
            'O nas',
            'Księgowość',
            'Kadre i płace',
            'Doradztwo',
            'Nieruchomości',
            'Kontakt'];

        const items = menuItems.map(item => {
            return (
                <p style={{ marginLeft: '1rem', textTransform: 'uppercase' }}> {item} </p>
            );
        });

        const styles = {
            containerStyle: {
                height: 70,
                position: 'fixed',
                top: 0,
                width: '100%',
                backgroundColor: 'rgba(34,34,34,0)'

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
                            <div style={logoStyle}>{this.props.text}</div>
                            <div style={navigationItemsStyle}> {items} </div>
                        </div>
                    </Container>
                </header>
            </div>
        );
    }
}

export default Header;
