import {useState, useEffect} from 'react'
import { themes } from '../data'
import ThemesItem from './ThemesItem'
import { FaCog } from 'react-icons/fa'
import "./Themes.css"

const getStorageColor = ()=>{
    let color:any = "hsl(252, 35% 51%)";
    if(localStorage.getItem("color")){
        color=localStorage.getItem("color")
    }
    return color
}

const Themes = () => {
    const [show, setShow] = useState(false)
    const [color, setColor] = useState(getStorageColor())

    const changeColor = (color:any) =>{
        setColor(color)
    }

   

    useEffect(()=>{
        document.documentElement.style.setProperty("--first-color", color)
        localStorage.setItem("color", color)
    }, [color])

    
  return (
    <div>
        <div className={`${show ? "show-switcher" : ""} style__switcher`}>
            <div className="style__switcher-toggler" onClick={()=>setShow(!show)}>
            <FaCog/>
            </div>
             
             <h3 className="style__switcher-title">
                Style Swticher
             </h3>
             <div className="style__switcher-items">
                {themes.map((theme, index)=>{
                    return <ThemesItem key={index} {...theme} changeColor={changeColor}/>
                })}
             </div>
             <div className="style__switcher-close" onClick={()=>setShow(!show)}>&times;</div>
        </div>
    </div>
  )
}

export default Themes 