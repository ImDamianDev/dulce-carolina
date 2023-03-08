import './App.css';
import Header from './components/Header'
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="">

        <div id="hero_section" className="container-fluid position-relative overflow-hidden text-white text-center">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-1 fw-normal">Pasteleria</h1>
            <p className="lead fw-normal mb-5">Ofrecemos productos y servicios de pasteleria</p>
            <a className="btn btn-light" href="/">Saber mas</a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex w-100 my-md-3 ps-md-3">

          <div className="card-md text-bg-dark me-md-3 py-3 px-3 py-md-5 px-md-5 text-center overflow-hidden w-100">
            <div className="my-3 py-3">
              <h2 className="display-5">Reposteria Dulce</h2>
              <p className="lead">Ricos productos elaborador con la dulcura clasica.</p>
            </div>
            <div className="card-div shadow-sm mx-auto"></div>
          </div>

          <div className="card-md bg-success w-100 me-md-3 py-3 px-3 py-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Salados</h2>
              <p className="lead">Para los que disfrutan tambien de los salados</p>
            </div>
            <div className="card-div shadow-sm mx-auto"></div>
          </div>
        </div>
        <Features />
      </main>
    </div>
  );
}

export default App;
