import React, { Component } from 'react'
import {Link}   from 'react-router-dom'
import Axios from 'axios'
export default class createFiscalias extends Component {

state ={
      id : 0,
      descripcion : '',
      direccion :'',
      telefono : '',
      editar : false
}


    componentDidMount(){
        if(this.props.match.params.id){
            this.setState({editar: true});
            this.getfiscalia();
        }

    }   

    async getfiscalia(){
        const res = await Axios.get('http://127.0.0.1:5000/api/fiscalia/'+this.props.match.params.id);
        const response = res.data;

    this.setState({
        id : response._id,
        descripcion :response.descripcion,
        direccion :response.direccion,
        telefono : response.telefono,
    }          
        );

    }

    clean (){
        this.setState({telefono : ''})
        this.setState({descripcion : ''})
        this.setState({direccion : ''})
    }

    onchengeddescrip= (e)=>{
        this.setState({descripcion : e.target.value})
    }
    onchengedtel= (e)=>{
        this.setState({telefono : e.target.value})
    }
    onchengeddir= (e)=>{
        this.setState({direccion : e.target.value})
    }

    onSubmit = async e =>{
     e.preventDefault();
     var response = [];
     if(this.state.editar){
        const res = await Axios.put('http://127.0.0.1:5000/api/actualizar',{
            id : this.state.id,
            descripcion : this.state.descripcion,
            direccion : this.state.direccion,
            telefono : this.state.telefono
         })
         response =   res.data;
     }
     else{
        const res = await Axios.post('http://127.0.0.1:5000/api/nueva',{
            descripcion : this.state.descripcion,
            direccion : this.state.direccion,
            telefono : this.state.telefono
         })
         response =   res.data;
     }
    
  
     alert(response.response)
     this.clean();
     window.location.href='/';
 
    }

    render() {
        return (
        <div className='container p-4' key='crearf'>
        <div className="card" key='card'>
         <h5 className="card-header" key='titulo'>Crear Nueva Fiscaliar</h5>
        <div className="card-body" key='cardbody'>
        <form onSubmit={this.onSubmit} key='formcard'>
                <div className="form-group" key='desctrip'>
                    <label for="exampleInputEmail1">Descripcion</label>
                    <input type="text" className="form-control" id="descripcion"  onChange={this.onchengeddescrip}
                    value={this.state.descripcion} required>
                        </input>
                     </div>
                <div className="form-group" key='dir'>
                    <label for="exampleInputPassword1">Direccion</label>
                    <input type="text" className="form-control" id="direccion" onChange={this.onchengeddir}
                     value={this.state.direccion} required>
                    </input>
                </div>
                <div className="form-group" key='tel'>
                    <label for="exampleInputPassword1">Telefono</label>
                    <input type="text" className="form-control" id="direccion" onChange={this.onchengedtel}
                    value={this.state.telefono} required pattern="^([0-9]+{8,11}$">
                    </input>
                </div>
           
                <button type="submit" className="btn btn-primary" key='guardar'>Guardar</button>

                <Link className="btn btn-primary ml-4" to='/' >Cancelar</Link>
         </form>
    
            </div>
            </div>
            </div>
  
        )
    }
}
