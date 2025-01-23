import React, {useState} from 'react';
import {ModifiedStar} from './ModifiedStar';
import {StarCount} from '../../types/StarCount';

type RatingProps = {
    initialData: StarCount
}

export const ModifiedRating = ({initialData}: RatingProps) => {

    const [count, setCount] = useState<StarCount>(initialData)

    const clickHandler = (id: StarCount) => setCount(id)

    return (
        <div>
            <ModifiedStar checked={count >= 1} callback={() => clickHandler(1)}/>
            <ModifiedStar checked={count >= 2} callback={() => clickHandler(2)}/>
            <ModifiedStar checked={count >= 3} callback={() => clickHandler(3)}/>
            <ModifiedStar checked={count >= 4} callback={() => clickHandler(4)}/>
            <ModifiedStar checked={count >= 5} callback={() => clickHandler(5)}/>
        </div>
    );
};