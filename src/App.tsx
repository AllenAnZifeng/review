
import MentionComponent from "./Components/MentionComponent";
import {inputData} from "./input";
import {Mention} from "./structures";
import BlockComponent from "./Components/BlockComponent";

export default function App() {



    return (
        <div>
            {inputData.map((child, index) => {
                return <BlockComponent key={index} data={child}></BlockComponent>
            })}

        </div>
    )
}



