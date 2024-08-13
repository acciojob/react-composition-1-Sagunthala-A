
import React from "react";
import './../styles/App.css';
import Tab from './Tab';

const App = () => {
  const arr =[
    {
      title:"Tab 1",
      content: "This is content for Tab 1"
    },
    {
      title:"Tab 2",
      content: "This is content for Tab 2"
    },
    {
      title:"Tab 3",
      content: "This is content for Tab 3"
    }
  ]
  return (
    <div>
        {/* Do not remove the main div */}
        <Tab arr={arr}/>
    </div>
  )
}

export default App
