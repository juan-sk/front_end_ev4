import { useState } from 'react';

function App() {

  // declaración de variables
  let juegos = null
  let totalProductos = null
  const [productos, setproductos] = useState([])
  const [totalSinDescuento, settotalSinDescuento] = useState(0)
  const [valorDescuento, setvalorDescuento] = useState(0)
  const [total, setTotal] = useState(0)

  function agregarJuego(event) {
    event.preventDefault();

    juegos = [...productos, {
      codigo: event.target.codigo.value,
      nombre: event.target.nombre.value,
      descripcion: event.target.descripcion.value,
      cantidad: parseInt(event.target.cantidad.value),
      precio: parseInt(event.target.precio.value)
    }]

    setproductos(juegos)
    totalProductos = 0
    juegos.forEach(producto => {
      totalProductos += producto.precio * producto.cantidad
    })
    settotalSinDescuento(totalProductos)
    setvalorDescuento(totalProductos * 0.1)
    setTotal(totalProductos - (totalProductos * 0.1))

  }

  return (
    <main>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg" alt="" width="160" height="50" className="d-inline-block align-text-top" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Compra de juegos</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <div className="row py-3">
          <form className="formulario" onSubmit={agregarJuego}>

            <h3>Ingrese el juego que desea comprar, se aplicara un 10% de descuento en su compra</h3>

            <div className="mb-3">
              <label for="numero" className="form-label">Código</label>
              <input type="text" className="form-control" id="codigo" placeholder="#0001" required />
            </div>
            <div className="mb-3">
              <label for="nombre" className="form-label">Nombre del juego</label>
              <input type="text" className="form-control" id="nombre" placeholder="Mario" required />
            </div>
            <div className="mb-3">
              <label for="apellido" className="form-label">Descripción</label>
              <input type="text" className="form-control" id="descripcion" placeholder="Juego de plataforma" required />
            </div>
            <div className="mb-3">
              <label for="correo" className="form-label">Precio</label>
              <input type="number" className="form-control" id="precio" placeholder="10000" required />
            </div>
            <div className="mb-3">
              <label for="detalle" className="form-label">Cantidad</label>
              <input className="form-control" id="cantidad" rows="3" placeholder="1" required />
            </div>
            <button type="submit" className="btn btn-danger float-end">Agregar juego</button>

          </form>

        </div>

        <div className="row py-3">

          <div className="container-fluid">
            <h1 className="display-5 fw-bold">Juegos agregados</h1>
          </div>

          <table className="table table-striped-columns">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Nombre</th>
                <th scope="col">descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total Producto</th>
              </tr>
            </thead>
            <tbody>
              {
                productos.map(producto => {
                  return (
                    <tr>
                      <th scope="row">{producto.codigo}</th>
                      <td>{producto.nombre}</td>
                      <td>{producto.descripcion}</td>
                      <td>{producto.precio}</td>
                      <td>{producto.cantidad}</td>
                      <td>{producto.precio * producto.cantidad}</td>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>

          <div className="container-fluid">
            <p className='fs-4'><b>Total sin descuento: </b>{totalSinDescuento}</p><h1 className="display-5 fw-bold"></h1>
            <p className='fs-4'><b>Descuento a realizar: </b>{valorDescuento}</p><h1 className="display-5 fw-bold"></h1>
            <p className='fs-4'><b>Total a pagar: </b>{total}</p><h1 className="display-5 fw-bold"></h1>
          </div>

          
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2022
        </footer>

      </div>
    </main>
  );
}

export default App;
