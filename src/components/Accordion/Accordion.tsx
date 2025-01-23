import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionProps = {
    title: string;
    click: boolean;
}

export const Accordion = ({title, click}: AccordionProps) => {
    return (
        <div>
            <AccordionTitle title={title}/>
            {click && <AccordionBody/>}
        </div>
    );
};