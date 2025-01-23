import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Title} from './components/Title';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {ModifiedAccordion} from './components/ModifiedAccordion/ModifiedAccordion';
import {ModifiedRating} from './components/ModifiedRating/ModifiedRating';


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

            <OnOff initialData={true}/>
            <OnOff initialData={false}/>

            <ModifiedAccordion title={'Names'} initialData={true}/>

            <ModifiedRating initialData={0}/>

        </div>
    );
}

export default App;
