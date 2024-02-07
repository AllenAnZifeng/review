
import {Mention} from "../structures";
import TextComponent from "./TextComponent";
import './MentionComponent.css';

export default function MentionComponent({data}:{data: Mention}) {

    const css = data.color ? {
        background: data.color,
        color: "white",
    } : {};

    return <span className={"mention"} style={css}>
            {data.children.map((child, index) => {
                return <TextComponent key={index} data={child}></TextComponent>
            })}
        </span>
}