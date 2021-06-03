import React from "react";
import ButtonNewRing from "../../Buttons/ButtonNewRing"
import ButtonDelRing from "../../Buttons/ButtonDelRing"

const OneRing = (props) => {
    //Ссылки
    let segment = React.createRef();
    let pump = React.createRef();

    //Функции
    let changeSegment = () => {
        let action = {type : 'UPDATE-RING', id : props.id, seg : segment.current.value, date : props.date}
        props.dispatch(action)
    }
    let PumpingMinusTwo = () =>{
        let action = {type : 'GET-PUMP', id : props.id}
        return props.dispatch(action)
    }
    let pupmingUpdate = () => {
        let action = {type : 'UPDATE-PUMP', id : props.id, value : pump.current.value}
        props.dispatch(action);
    }

    return(
        <tr>
            <td>
                <ButtonDelRing id={props.id} dispatch={props.dispatch}/>
                <textarea value={props.id}></textarea>
            </td> {/*Проходка*/}
            <td><textarea value={props.id}></textarea></td> {/*Монтаж*/}
            <td><textarea ref={segment} value={props.segment} onChange={changeSegment}></textarea></td> {/*А сегмент*/}
            <td>{props.segment+7}</td> {/*К Сегмент*/}
            <td>{props.id-2}</td>  {/* № нагнетания */}
            <td>
                <textarea ref={pump} value={PumpingMinusTwo()} onChange={pupmingUpdate}></textarea>
                <ButtonNewRing date={props.date} id={props.id} dispatch={props.dispatch}/>
            </td> {/*V нагнетания*/}
        </tr>
    );
}

export default OneRing;