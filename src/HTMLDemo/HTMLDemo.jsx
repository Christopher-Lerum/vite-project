import { createRoot } from "react-dom/client"
import './HTMLDemo.css'

const root = createRoot(document.getElementById("root"))
root.render(
    <HtmlDemoFunction />

    /*
    <HtmlDemoFunction />
    <Page />
    */
)

function HtmlDemoFunction(){
    return(
        <main>
            <img src="/src/HTMLDemo/react.svg" width="40px" alt="React logo"/>
            <h1>Fun facts about React!</h1> 
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

function Page(){
    return(
        
        <ol>
            <li>React is the first language im learning on my own</li>
            <li>React will hopefully make my projects look cooler</li>
            <li>React is very simple to learn</li>
        </ol>
    )
}