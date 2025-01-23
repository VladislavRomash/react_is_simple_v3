type StarProps = {
    checked: boolean
    callback: () => void;
}

export const ModifiedStar = ({checked, callback}: StarProps) => {
    return (
        <span onClick={callback}>
            {
                checked
                    ? <b><span>star </span></b>
                    : <span>star </span>
            }
        </span>
    );
};