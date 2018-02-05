import React from 'react';
import ReactDOM from 'react-dom';
import ReallySmoothScroll from 'really-smooth-scroll';
import Test from './components/Test.jsx';
import StartingSection from './components/StartingSection.jsx';
import Section from './components/Section.jsx';

ReallySmoothScroll.shim();

class App extends React.Component {
    render() {
        return (
            <div>
                <StartingSection />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                <Section />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
