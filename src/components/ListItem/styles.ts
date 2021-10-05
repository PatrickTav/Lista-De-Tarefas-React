import { type } from "os";
import styled from "styled-components";

type ContainerProps = {
    done:boolean;
} 

export const Container = styled.div(({done}: ContainerProps)=>(
    `

    display:flex;
    flex-direction:row;
    background-color:#20212C;
    padding:10px;
    border-radius:10px;
    margin-bottom:10px;
    align-items:center;

    input{
        width:20px;
        height:20px;
        margin-right:5px;
    }

    label{
        color:#CCC;
        text-decoration:${done ? "line-through": 'inicial'};

    }
`
))

