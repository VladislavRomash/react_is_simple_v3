import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Title} from './components/Title';
import {Rating} from './components/Rating/Rating';

function App() {

    return (
        <div className="App">

            <Title title={'Learning React'}/>
            <Title title={'Learning HTML'}/>

            Article 1
            <Rating count={1}/>
            Article 2
            <Rating count={4}/>

            <Accordion title={'Menu'}
                       click={false}/>
            <Accordion title={'List of products'}
                       click={true}/>

        </div>
    );
}

export default App;
