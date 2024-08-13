import React,{useState} from 'react';

const Tab = ({arr})=>{
    const [cont,setCont] = useState("This is content for Tab 1");
    return(
        <ul>
            {
                arr.map((obj,ind)=>{
                    return <li key={ind} onClick={()=>setCont(obj.content)}>{obj.title}</li>
                })
            }
            <p>{cont}</p>
        </ul>
    )
}

export default Tab;