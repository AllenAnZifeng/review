import {Clause} from "../structures";

import BlockComponent from "./BlockComponent";
import './ClauseComponent.css';
import TextBlockComponent from "./TextBlockComponent";
import ParagraphComponent from "./ParagraphComponent";
export default function ClauseComponent({data}:{data: Clause}) {

    return <div>
        {data.children.map((child, index) => {
            if ("type" in child && child.type ==="h1") {
                return <TextBlockComponent key={index} data={child}/>
            }
            if ("type" in child && child.type ==="h4") {
                return <TextBlockComponent key={index} data={child}/>
            }
            if ("type" in child && child.type ==="p") {
                return <ParagraphComponent key={index} data={child}/>
            }
            if ("type" in child && (child.type === "block" || child.type === "ul")) {
                return <BlockComponent key={index} data={child}></BlockComponent>
            }

        })}
    </div>


}