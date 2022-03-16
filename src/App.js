import React, { useState } from "react";
import constants from "./utilities/constants";

export default function App() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    const url = constants.API_URL_GET_ALL_POSTS;

    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(postsFromServer => {
        setPosts(postsFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error)
      });
  }

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div>
            <h1>ASP.NET Registros</h1>
            <div className="mt-5">
              <button onClick={getPosts} className="btn btn-dark w-100">Obtener Registros</button>
              <button onClick={() => { }} className="btn btn-secondary w-100 mt-4">Crear Nuevo Registro</button>
            </div>
          </div>
          {posts.length > 0 && renderPostsTable()}
        </div>
      </div>
    </div>
  );
  function renderPostsTable() {
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">ID (PK)</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Edad</th>
              <th scope="col">Lugar de Nacimiento</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key="{post.id}">
                <th scope="row">{post.id}</th>
                <td>{post.nombre}</td>
                <td>{post.apellido}</td>
                <td>{post.edad}</td>
                <td>{post.lugarDeNacimiento}</td>
                <td>
                  <button className="btn btn-dark btn-lg mx-3 my-3">Editar</button>
                  <button className="btn btn-secondary btn-lg mx-3">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => setPosts([])} className="btn btn-dark btn-lg w-100">Vaciar Tabla</button>
      </div>
    );
  }
}
