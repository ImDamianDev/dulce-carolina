
function Header() {

  return (
    <header>
    <div class="px-3 py-2 bg-warning">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            Dulce Carolina
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/" class="nav-link text-secondary">
                Inicio
              </a>
            </li>
            <li>
              <a href="/" class="nav-link text-white">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="/" class="nav-link text-white">
                Productos
              </a>
            </li>
            <li>
              <a href="/" class="nav-link text-white">
                Servicios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header;
