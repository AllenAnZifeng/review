
import {ListItemContent} from "../structures";
import TextComponent from "./TextComponent";
import MentionComponent from "./MentionComponent";

export default function ListItemContentComponent({data}:{data: ListItemContent}) {
    return <span>
        {data.children.map((child, index) => {
            if('type' in child) {
                return <MentionComponent key={index} data={child}></MentionComponent>
            }
            else{
                return <TextComponent key={index} data={child}></TextComponent>
            }

        })}
    </span>

}