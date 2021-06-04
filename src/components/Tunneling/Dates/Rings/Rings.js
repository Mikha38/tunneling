import React from "react";
import OneRing from './OneRing/OneRing'
import ButtonNewRing from "../Buttons/ButtonNewRing"
import ButtonDelRing from "../Buttons/ButtonDelRing"
import { getPumpActionCreator, updatePumpActionCreator, updateRingActionCreator } from "../../../../redux/store";

const Rings = (props) => {
    let segment = React.createRef();
    let pump = React.createRef();

    let changeSegment = () => {
        let action = updateRingActionCreator(props.id, segment.current.value, props.date)
        props.dispatch(action)
    }
    let PumpingMinusTwo = () =>{
        let action = getPumpActionCreator(props.id)
        return props.dispatch(action)
    }
    let pupmingUpdate = () => {
        let action = updatePumpActionCreator(props.id, pump.current.value)
        props.dispatch(action);
    }
    
        if(props.checkArrays(props.tunneling, props.date) && props.checkArrays(props.tunneling, props.montage) && props.admin){
            return (
                <OneRing variable={1}
                    id={props.id}
                    segment={props.segment}
                    date={props.date}
                    checkArrays={props.checkArrays}
                    dispatch={props.dispatch}
                />
            )
        }  else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && !props.segment && props.admin){
            return (
                <tr>
                    <td><ButtonDelRing id={props.id} dispatch={props.dispatch}/><textarea value={props.id}></textarea></td>
                    <td></td>
                    <td><textarea ref={segment} value={props.segment} onChange={changeSegment}></textarea></td>
                    <td></td>
                    <td>{props.id-2}</td>
                    <td>
                        <textarea ref={pump} value={PumpingMinusTwo()} onChange={pupmingUpdate}></textarea>
                        <ButtonNewRing date={props.date} id={props.id} dispatch={props.dispatch}/>
                    </td>
                </tr>
            )
        }  else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && props.admin){
            return (
                <tr>
                    <td><ButtonDelRing id={props.id} dispatch={props.dispatch}/><textarea value={props.id}></textarea></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{props.id-2}</td>
                    <td>
                        <textarea ref={pump} value={PumpingMinusTwo()} onChange={pupmingUpdate}></textarea>
                        <ButtonNewRing date={props.date} id={props.id} dispatch={props.dispatch}/>
                    </td>
                </tr>
            )
        } else if (props.admin) {
            return (
                <tr>
                    <td><ButtonDelRing id={props.id} dispatch={props.dispatch}/></td>
                    <td><textarea value={props.id}></textarea></td>
                    <td><textarea ref={segment} value={props.segment} onChange={changeSegment}></textarea></td>
                    <td>{props.segment+7}</td>
                    <td></td>
                    <td>
                        <ButtonNewRing date={props.date} id={props.id} dispatch={props.dispatch}/>
                    </td>
                </tr>
            )
        }
        else if(props.checkArrays(props.tunneling, props.date) && props.checkArrays(props.tunneling, props.montage) && !props.admin){
            return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.id}</td>
                    <td>{props.segment}</td>
                    <td>{props.segment+7}</td>
                    <td>{props.id-2}</td>
                    <td>{PumpingMinusTwo()}</td>
                </tr>
            )
        } else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && !props.admin){
            return (
                <tr>
                    <td>{props.id}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{props.id-2}</td>
                    <td>{PumpingMinusTwo()}</td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td></td>
                    <td>{props.id}</td>
                    <td>{props.segment}</td>
                    <td>{props.segment+7}</td>
                    <td></td>
                    <td></td>
                </tr>
            )
        }

    }

export default Rings;