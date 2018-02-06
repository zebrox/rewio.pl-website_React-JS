import React from 'react';
import ReactDOM from 'react-dom';
import ReallySmoothScroll from 'really-smooth-scroll';
import Test from './components/Test.jsx';
import StartingSection from './components/StartingSection.jsx';
import Section from './components/Section.jsx';
import Container from './components/Container.jsx';
import Form from './components/Form.jsx';

ReallySmoothScroll.shim();

class App extends React.Component {
    render() {
        return (
            <div>
                <StartingSection />
                <Container>
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                </Container>
                <Section />
                    <Test />
                    <Test />
                    <Test />
                    <Test />
                    <Section />
                    <Container>
                        <Form />
                    </Container>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
