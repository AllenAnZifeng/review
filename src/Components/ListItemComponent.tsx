
import {ListItem} from "../structures";
import ListItemContentComponent from "./ListItemContentComponent"


export default function ListItemComponent({data}:{data: ListItem}) {
    return <li>
        {
            data.children.map((child, index) => {
                return <ListItemContentComponent key={index} data={child}></ListItemContentComponent>
            })
        }
    </li>
}