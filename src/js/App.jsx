import React from 'react';
import ReactDOM from 'react-dom';
// import { StickyContainer, Sticky } from 'react-sticky';
import ReallySmoothScroll from 'really-smooth-scroll';
// require('../sass/main.scss');

ReallySmoothScroll.shim();

class App extends React.Component {
    render() {
        return (
            <div>
                <p>TEST</p>
                <p>TEST</p>
                <p>TEST</p>
                <p>TEST</p>
                <p>TEST</p>
                <p>TEST</p>
                {/* <StickyContainer style={{ maxWidth: 1000, margin: '0 auto', width: '100%', backgroundColor: 'rgba(0,0,0,1)', backgroundImage: 'url(../images/texture.png)', opacity: '0.9' }}>
                        <Sticky>
                            {({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
                                return (
                                    //tutaj komponent header
                                )
                            }
                            }
                        </Sticky>
                </StickyContainer> */}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)