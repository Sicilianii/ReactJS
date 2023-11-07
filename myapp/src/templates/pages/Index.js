import {useDispatch, useSelector} from "react-redux";

export default function IndexX() {
    const Checkbox = useSelector(state => state);
    const dispatch = useDispatch();

    return(
        <>
            <h1>Главная</h1>
            <p>Выберите чат, да общения</p>
            <input type={"checkbox"} checked={Checkbox} value={Checkbox} onChange={ () => { dispatch( { type: 'CHANGE' } ) }}></input>
        </>
    );
}
