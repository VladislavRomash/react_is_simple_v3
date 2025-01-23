import React, {useState} from 'react';

type Props = {
    initialData: boolean
}

export const OnOff = ({initialData}: Props) => {

    const [switcher, setSwitcher] = useState<boolean>(initialData);

    const clickHandler = () => {
        setSwitcher(!switcher)
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '50px',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: switcher ? 'red' : 'green',
    };
    const buttonRedStyle = {backgroundColor: switcher ? 'red' : 'white'};
    const buttonGreenStyle = {backgroundColor: switcher ? 'white' : 'green'};

    return (
        <div>
            <button style={buttonRedStyle}
                    onClick={clickHandler}>off
            </button>
            <button style={buttonGreenStyle}
                    onClick={clickHandler}>on
            </button>
            <div style={indicatorStyle}></div>
        </div>
    );
};