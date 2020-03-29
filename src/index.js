import React, { Component } from "react";
import ReactDOM from "react-dom";
let region_seleccionada = 0

const regiones_y_comunas = [
    {
    "nombre": "Arica y Parinacota",
    "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
    },
    {
    "nombre": "Tarapacá",
    "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
    },
    {
    "nombre": "Antofagasta",
    "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
    {
    "nombre": "Atacama",
    "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
    {
    "nombre": "Coquimbo",
    "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
    {
    "nombre": "Valparaíso",
    "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
    }
]


class RegionSelector extends Component
{
    constructor(props) {
        super(props);
        console.log(regiones_y_comunas);     
        this.state={
            region_seleccionada:0
        }
        this.onRegionSelect=this.onRegionSelect.bind(this);
    }

    onRegionSelect(e) {
        const selection = e.target.value;
        console.log('selection: ', selection)
        this.setState({region_seleccionada:e.target.value})
        return selection
    }

    render() {
        let i = -1
        return(
            <div>
                <h2>Regiones</h2>
                <select onChange={this.onRegionSelect} value={this.state.region_seleccionada}>
                {regiones_y_comunas.map((region)=>{
                    i++      
                    return(<option key={region.nombre} value={i}>{region.nombre}</option>)                    
                })}
                </select> 
                <h2>Comunas</h2>
                <select>
                {regiones_y_comunas.map((region,comunas)=>{
                    return(<option key={region.comunas}>{region.comunas}</option>)                    
                })}
                </select>         
            </div>
        )}
}
export default RegionSelector;
ReactDOM.render(<RegionSelector />, document.getElementById('select_regiones'));