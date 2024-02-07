import {Paragraph} from "../structures";
import ClauseComponent from "./ClauseComponent";

import TextComponent from "./TextComponent";
import MentionComponent from "./MentionComponent";

import './ParagraphComponent.css';
export default function ParagraphComponent({data}:{data: Paragraph}) {


        return <div className={"paragraph"}>

            {data.text ?<div>{data.text}</div>:null}


            {data.children.map((child, index) => {
                if ('type' in child && child.type ==="clause"){
                    return <ClauseComponent key={index} data={child}/>
                }
                if ('type' in child && child.type ==="mention"){
                    return <MentionComponent key={index} data={child}/>
                }
                if ('text' in child && !('type' in child)){
                    return <TextComponent key={index} data={child}/>
                }
                if ("type" in child && child.type ==="p") {
                    return <ParagraphComponent key={index} data={child}/>
                }
                return <>error</>



            })}
    </div>



}