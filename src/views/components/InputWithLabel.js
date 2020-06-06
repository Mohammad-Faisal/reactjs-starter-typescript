import React from "react";
import { Input } from 'semantic-ui-react'



export function InputWithLabel(props) {
    return (
        <div className={"container-label-input"}>
            <label style={{ marginBottom: "20px" }}> {props.label}</label>
            <Input
            placeholder={props.placeholder}
                style={{ width: "100%" , height:"100px" }}
                rows={3}
                onChange={props._handleInputChange}
                iconPosition='left'
                icon={props.icon}
                value={props.value}
                disabled={props.disabled}
                name={props.name} />
        </div>
    )
}


export function ComponentWithLabel(props) {
    return (
        <div className={"container-label-input"}>
            <label style={{ marginBottom: "20px" }}> {props.label}</label>
            <div>{props.component}</div>
        </div>
    )
}