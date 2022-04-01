import {strictMode} from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
import './style.css'

const root = document.getElementById ('root');


ReactDom.render (
    <strictMode>
        <App />
     </strictMode>,root
        
)