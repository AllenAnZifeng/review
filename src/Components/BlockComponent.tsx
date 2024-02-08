import {Block, Numbering} from "../structures";
import TextComponent from "./TextComponent";
import MentionComponent from "./MentionComponent";
import ListItemComponent from "./ListItemComponent";
import ClauseComponent from "./ClauseComponent";
import TextBlockComponent from "./TextBlockComponent";
import ParagraphComponent from "./ParagraphComponent";
export default function BlockComponent({data,numbering}:{data: Block,numbering: Numbering}) {

     if (data.type === "ul") {
        return  <ul>
            {data.children.map((child, index) => {
                if ("type" in child && child.type === "li") {
                    return <ListItemComponent key={index} data={child}/>
                }
                return <>ErrorUL</>
            })}
        </ul>

    } else { // type: Block
        return <div>
            {data.children.map((child, index) => {
                if ("type" in child &&  child.type === "clause"){
                    numbering.number+=1
                    return <ClauseComponent key={index} data={child} numbering={{
                        layer: numbering.layer,
                        number: numbering.number,
                    }} />
                }

                if ("type" in child && child.type ==="h1") {
                    return <TextBlockComponent key={index} data={child}/>
                }
                if ("type" in child && child.type ==="h4") {
                    return <TextBlockComponent key={index} data={child}/>
                }
                if ("type" in child && child.type ==="p") {
                    return <ParagraphComponent key={index} data={child} numbering={{
                        layer: numbering.layer,
                        number: numbering.number,
                    }}/>
                }
                if ("type" in child && child.type ==="block") {
                    return <BlockComponent key={index} data={child} numbering={{
                        layer: numbering.layer,
                        number: numbering.number
                    }}></BlockComponent>
                }
                return <>{child.type}</>
            })}
        </div>

    }
}