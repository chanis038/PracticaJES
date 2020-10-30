import React, { Component } from 'react'
import  axios from 'axios'
import BtcrearFiscalia from './btcrearFiscalia'
import {Link}   from 'react-router-dom'

export default class FiscaliasList extends Component {
state ={
  Afiscalias :[],
  i :0
}

 componentDidMount(){
    this.allFiscalias();
    }



async allFiscalias(){
    const res = await axios.get('http://127.0.0.1:5000/api/fiscalias')
    this.setState({
        Afiscalias : res.data
    }          
        );

   }

async delete(id){
    console.log(id)
   const res = await axios.delete('http://127.0.0.1:5000/api/eliminar/'+id)
    var response = res.data;
     alert(response.response)
     this.allFiscalias();
   }


  sum (){
    this.setState({i : this.state.i+1});
    return this.state.i;
  }

 

    render() {
    
        return (
          
            <div  className="container ">
                  <BtcrearFiscalia/>
               <table className="table">
  <thead className="thead-dark p-4">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Direccion</th>
      <th scope="col">Telefono</th>
      <th scope="col">acciones</th>
    </tr>
  </thead>
  <tbody>

  {this.state.Afiscalias.map(fiscalia =>
    
    <tr key={fiscalia._id}>  
    <th scope="row" > 1</th>
    <td>{fiscalia.descripcion}</td>
    <td>{fiscalia.direccion}</td>
    <td>{fiscalia.telefono}</td>
    <td >
        
    <Link className="btn btn-warning btn-sm" to={'/editar/'+fiscalia._id}>Editar</Link>
    <button type="button" className="btn btn-danger btn-sm ml-4" onClick={()=>this.delete(fiscalia._id)}>Eliminar</button>
    
        
        </td>
    </tr>
)}
   
    
  </tbody>
</table>

            </div>
        )
    }
}
