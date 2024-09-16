import React from 'react';
import './App.css';
import {Star} from './components/Star';
import {Accordion} from './components/Accordion/Accordion';
import {Title} from './components/Title';

function App() {
    return (
        <div className="App">

            <Title/>

            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>

            <Accordion/>

        </div>
    );
}

export default App;
