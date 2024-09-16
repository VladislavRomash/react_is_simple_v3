import React from 'react';
import {Star} from './Star';

type RatingProps = {
    count: number
}

export const Rating = ({count}: RatingProps) => {
    return (
        <div>
            <Star checked={count >= 1}/>
            <Star checked={count >= 2}/>
            <Star checked={count >= 3}/>
            <Star checked={count >= 4}/>
            <Star checked={count >= 5}/>
        </div>
    );
};