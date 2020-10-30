import React, { Component } from 'react'
import {Link}   from 'react-router-dom'

export default class btcrearFiscalia extends Component {
    render() {
        return (
            <div className='container p-4'>
              <Link className="btn btn-primary " to='/crear' >Crear nueva fiscalia</Link>
            </div>
            
        )
    }
}
