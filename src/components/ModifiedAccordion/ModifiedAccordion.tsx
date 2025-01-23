import React, {useState} from 'react';
import {ModifiedTitle} from './ModifiedTitle';
import {ModifiedAccordionBody} from './ModifiedAccordionBody';

type AccordionProps = {
    title: string;
    initialData: boolean;
}

export const ModifiedAccordion = ({title, initialData}: AccordionProps) => {

    const [compressed, setCompressed] = useState<boolean>(initialData)

    const changeCondition = () => setCompressed(!compressed)

    return (
        <div>
            <ModifiedTitle title={title} callback={changeCondition}/>
            {compressed && <ModifiedAccordionBody/>}
        </div>
    );
};