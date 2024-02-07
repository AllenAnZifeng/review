
import {TextBlock} from "../structures";
import TextComponent from "./TextComponent";

import './TextBlockComponent.css';

export default function TextBlockComponent({data}:{data:TextBlock}) {
    if (data.type ==="h1"){
        return <h1>
            {data.children.map((child, index) => {
                return <TextComponent key={index} data={child}/>
            })}
        </h1>
    }
    else if (data.type ==="h4"){
        return <h4>
            {data.children.map((child, index) => {
                return <TextComponent key={index} data={child}/>
            })}
        </h4>
    }else{
        return <div>Error</div>
    }
}

