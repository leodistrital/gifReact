import React, { useState } from 'react'

export const CategoriaAdd = ({AgregarCategoria}) => {


    const [caja, setcaja] = useState('')

    const handelInpuChange = ( e ) =>{
        setcaja(e.target.value)
    }

    const handleSubmit = (e) =>{
        console.log('form enviado')
        e.preventDefault();
        if(caja.trim().length > 2 ){
            AgregarCategoria( cats => [caja, ...cats ]);
            setcaja('')
        }
    }



    return (
        <>
        <h2>Agregar categoria</h2>   
        <form onSubmit={handleSubmit}>
            <input 
                type="text"  
                value={caja} 
                onChange={handelInpuChange} />
        </form>
        </>
    )
}
