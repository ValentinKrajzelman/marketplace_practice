import { selectorBox } from './boxSlicer';

import { useAppSelector } from "../../app/hooks";

export const Component2 = () => {
    const selector = useAppSelector(selectorBox);

    function color(estado: boolean) {
        console.log(estado);

        if (estado == true) {
            return "rojoo";
        }
        else {
            return <div>azul</div>;
        }
    }

    return (<div>{color(selector)}
    </div>
    )
};