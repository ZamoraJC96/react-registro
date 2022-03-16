import React, { useState } from 'react'
import constants from '../utilities/constants'

export default function PostCreateForm() {
    const [formData, setFormData] = useState(initialFormData);

    var today = new Date();

    function getAge(fechaDeNacimiento) {
        var today = new Date();
        var birthDate = new Date(fechaDeNacimiento);
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--;
        }
        console.log(age_now);
        return age_now;
    }

    const initialFormData = Object.freeze({
        nombre: 'nombre',
        apellido: 'apellido',
        edad: 0,
        lugarDeNacimiento: 'lugarDeNacimiento',
        fechaDeNacimiento: today.getDate(),
        fechaDeRegistro: today.getDate()
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const postToCreate = {
            postId: 0,
            nombre: formData.nombre,
            apellido: formData.apellido,
            edad: getAge(),
            lugarDeNacimiento: formData.lugarDeNacimiento,
            fechaDeNacimiento: formData.fechaDeNacimiento,
            fechaDeRegistro: formData.fechaDeRegistro
        }
    }

    return (
        <div>
            <form className='w-100 px-5'>
                <h1 className='mt-5'>Crear nuevo registro</h1>
                <div className='mt-5'>
                    <label className='h3 form-label'>Nombre</label>
                    <input value={formData.nombre} name='nombre' type='text' className='form-control' onChange={handleChange} />
                </div>
                <div className='mt-4'>
                    <label className='h3 form-label'>Apellido</label>
                    <input value={formData.apellido} name='apellido' type='text' className='form-control' onChange={handleChange} />
                </div>
                <div className='mt-4'>
                    <label className='h3 form-label'>Lugar De Nacimiento</label>
                    <input value={formData.lugarDeNacimiento} name='lugarDeNacimiento' type='text' className='form-control' onChange={handleChange} />
                </div>
                <div className='mt-4'>
                    <label className='h3 form-label'>Fecha de Nacimiento</label>
                    <input value={formData.fechaDeNacimiento} name='fechaDeNacimiento' type='date' className='form-control' onChange={handleChange} />
                </div>
                <button onClick={handleSubmit} className='btn btn-dark btn-lg w-100 mt-5'>Registrar</button>
                <button onClick={() => props.onPostCreated(null)} className='btn btn-secondary btn-lg w-100 mt-3'>Cancelar</button>
            </form>
        </div>
    )
}
