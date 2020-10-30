import React, { Component } from 'react'
import {Link}   from 'react-router-dom'

export default class navigate extends Component {
    render() {
        return (
            <div className="container">
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <Link className="navbar-brand" to='/' >Fiscalias del Ministerio Publico</Link>
            </nav>
            </div>
            
      
        )
    }
}
