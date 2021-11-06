import React, { Component } from 'react';
import Section from './Components/Section/Section';

import {DataProvider} from './Components/Context/Context.jsx'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

class App extends Component {
    state = {
    }

    render() {
        return (
            <DataProvider>
                <React.Fragment>
                    <Navbar />
                    < Section />
                    <Footer/>
                </React.Fragment>
            </DataProvider>
        );
    }
}
export default App;