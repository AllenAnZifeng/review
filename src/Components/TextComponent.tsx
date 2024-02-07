
import {TextElement} from "../structures";
export default function TextComponent({data}:{data: TextElement}) {
    const text = data.text

    let elm= <>{text}</>;
    if (data.bold) {
        elm = <b>{elm}</b>;
    }
    if (data.underline) {
        elm = <u>{elm}</u>;
    }
    return elm
}