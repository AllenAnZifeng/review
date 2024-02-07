import {Clause, Numbering} from "../structures";

import BlockComponent from "./BlockComponent";
import './ClauseComponent.css';
import TextBlockComponent from "./TextBlockComponent";
import ParagraphComponent from "./ParagraphComponent";

const chars = 'abcdefghijklmnopqrstuvwxyz';
export default function ClauseComponent({data,numbering}:{data: Clause,numbering:Numbering}) {
let nextNumbering:Numbering={
    layer: numbering.layer+1,
    number: 0,
}

let num;
if (numbering.layer %2 === 1){
    num = "("+chars[numbering.number-1]+") ";
}else{
    num = numbering.number + ". ";
}
    return <div>
        <div className={'empty'}>{"new line"}</div>
        <span>{num}</span>
        {data.children.map((child, index) => {
            if ("type" in child && child.type === "h1") {
                return <TextBlockComponent key={index} data={child}/>
            }
            if ("type" in child && child.type === "h4") {
                return <TextBlockComponent key={index} data={child}/>
            }
            if ("type" in child && child.type === "p") {
                return <ParagraphComponent key={index} data={child} numbering={{
                    layer: nextNumbering.layer,
                    number: nextNumbering.number,

                }}/>
            }
            if ("type" in child && (child.type === "block" || child.type === "ul")) {
                return <BlockComponent key={index} data={child} numbering={{
                    layer: nextNumbering.layer,
                    number: nextNumbering.number,

                }}></BlockComponent>
            }
            if ("type" in child && child.type === "clause") {
                nextNumbering.number += 1;
                return <ClauseComponent key={index} data={child} numbering={{
                    layer: nextNumbering.layer,
                    number: nextNumbering.number,
                }}/>
            }

        })}
    </div>


}