import React from "react"
import Menu from './Menu'

const Layout=({title='Title',description='Description',className,children})=>{
    return (
    <div>
        <Menu />
        <div className="jumbotron">
        <div class="container">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
        </div>
        </div>
    <div className={className}>{children}</div>
    </div>)
}

export default Layout; 