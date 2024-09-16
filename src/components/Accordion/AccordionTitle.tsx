import React from 'react';

type AccordionTitleProps = {
    title: string;
}

export const AccordionTitle = ({title}: AccordionTitleProps) => <h3>{title}</h3>