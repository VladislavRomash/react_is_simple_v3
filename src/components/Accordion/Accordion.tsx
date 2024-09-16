import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionProps = {
    title: string;
}

export const Accordion = ({title}: AccordionProps) => {
    return (
        <div>
            <AccordionTitle title={title}/>
            <AccordionBody/>
        </div>

    );
};