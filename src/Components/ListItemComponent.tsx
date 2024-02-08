
import {ListItem} from "../structures";
import ListItemContentComponent from "./ListItemContentComponent"


export default function ListItemComponent({data}:{data: ListItem}) {
    return <li>
        {
            data.children.map((child, index) => {
                if('type' in child && child.type === "lic"){
                    return <ListItemContentComponent key={index} data={child}></ListItemContentComponent>
                }

            })
        }
    </li>
}