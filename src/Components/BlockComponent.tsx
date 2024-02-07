import {Block} from "../structures";
import TextComponent from "./TextComponent";
import MentionComponent from "./MentionComponent";
import ListItemComponent from "./ListItemComponent";
import ClauseComponent from "./ClauseComponent";
import TextBlockComponent from "./TextBlockComponent";
import ParagraphComponent from "./ParagraphComponent";
export default function BlockComponent({data}:{data: Block}) {

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
                if ("title" in child &&  child.type === "clause"){
                    return <ClauseComponent key={index} data={child}/>
                }

                if ("type" in child && child.type === "mention") {
                    return <MentionComponent key={index} data={child}/>
                }
                if ("type" in child && child.type ==="h1") {
                    return <TextBlockComponent key={index} data={child}/>
                }
                if ("type" in child && child.type ==="h4") {
                    return <TextBlockComponent key={index} data={child}/>
                }
                if ("type" in child && child.type ==="p") {
                    return <ParagraphComponent key={index} data={child}/>
                }
                if ("title" in child) {
                    return <BlockComponent key={index} data={child}></BlockComponent>
                }
                return <>{(child as any).type}</>
            })}
        </div>

    }
}