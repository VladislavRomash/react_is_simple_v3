type StarProps = {
    checked: boolean
}

export const Star = ({checked}: StarProps) => {
    return (
        <>
            {
                checked
                    ? <b><span>star </span></b>
                    : <span>star </span>
            }
        </>
    );
};