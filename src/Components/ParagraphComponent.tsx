import {Numbering, Paragraph} from "../structures";
import ClauseComponent from "./ClauseComponent";

import TextComponent from "./TextComponent";
import MentionComponent from "./MentionComponent";

import './ParagraphComponent.css';
export default function ParagraphComponent({data, numbering}:{data: Paragraph,numbering:Numbering}) {


        return <span className={"paragraph"}>

            {data.text ?<span>{data.text}</span>:null}

            {data.children?.map((child, index) => {
                if ('type' in child && child.type ==="clause"){
                    numbering.number+=1
                    return <ClauseComponent key={index} data={child} numbering={{
                        layer: numbering.layer,
                        number: numbering.number,
                    }}/>
                }
                if ('type' in child && child.type ==="mention"){
                    return <MentionComponent key={index} data={child}/>
                }
                if ('text' in child && !('type' in child)){
                    return <TextComponent key={index} data={child}/>
                }
                if ("type" in child && child.type ==="p") {
                    return <ParagraphComponent key={index} data={child} numbering={{
                        layer: numbering.layer,
                        number: numbering.number,
                    }}/>
                }
                return <>error</>



            })}
    </span>



}