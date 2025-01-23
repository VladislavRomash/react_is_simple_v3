import React from 'react';

type AccordionTitleProps = {
    title: string;
    callback: () => void
}

export const ModifiedTitle = ({title, callback}: AccordionTitleProps) => <h3 onClick={callback}>{title}</h3>