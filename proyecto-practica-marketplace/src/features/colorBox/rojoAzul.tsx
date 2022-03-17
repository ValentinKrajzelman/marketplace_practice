import { toggle } from './boxSlicer';

import { useAppDispatch } from "../../app/hooks";

export const Component1 = () => {
    const dispatch = useAppDispatch();

    return (<div>
        clickea para ver que pasa
        <button onClick={() => dispatch(toggle())}>
            aca
        </button>
    </div>
    )
};
