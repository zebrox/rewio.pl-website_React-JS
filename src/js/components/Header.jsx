import React, { Component } from 'react';
import Container from './Container.jsx';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'rgba(34,34,34,0)',
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const test = (pageYOffset > 900) ? 
        (this.setState({ backgroundColor: 'black' })) : 
        (this.setState({ backgroundColor: 'rgba(34,34,34,0)' }));
    }

    handleClick(e) {
        e.preventDefault();
        console.log(e.target.innerText)
        const elementOffsetTop = document.getElementById(e.target.innerText).offsetTop;
        window.scrollTo(0, elementOffsetTop);
    }

    handleUp(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    }

    render() {
        const menuItems = [
            { menuItem: 'O nas', link: 'About' },
            { menuItem: 'Księgowość', link: 'Ksiegowosc' },
            { menuItem: 'Kadre i płace', link: 'Kadre' },
            { menuItem: 'Doradztwo', link: 'Doradztwo' },
            { menuItem: 'Nieruchomości', link: 'nieruchomosci' },
            { menuItem: 'Kontakt', link: 'kontakt' }
        ];

        const items = menuItems.map(item => {
            const styles = {
                linkStyle: {
                    textDecoration: 'none',
                    color: 'white',
                    cursor: 'pointer'
                },
                textStyle: {
                    marginLeft: '1rem',
                    textTransform: 'uppercase'
                }
            };

            const { linkStyle, textStyle } = styles;

            return (
                <a onClick={e => this.handleClick(e)} key={item.link} style={linkStyle}>
                    <p style={textStyle}> {item.menuItem} </p>
                </a>
            );
        });

        const styles = {
            containerStyle: {
                height: 70,
                position: 'fixed',
                top: 0,
                width: '100%',
                backgroundColor: this.state.backgroundColor,
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
