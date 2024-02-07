
import MentionComponent from "./Components/MentionComponent";
import {inputData} from "./input";
import {Mention, Numbering} from "./structures";
import BlockComponent from "./Components/BlockComponent";





export default function App() {

    const rootNumbering:Numbering = {
        layer: 0,
        number: 0,
    }


    return (
            <div>
                {inputData.map((child, index) => {
                    return <BlockComponent key={index} data={child} numbering={rootNumbering}></BlockComponent>
                })}
            </div>)


}



