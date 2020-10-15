import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <header className="masthead">
        <div className="container h-100 ">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="mt-5">
                Voxualize
              </h1>

              <p className="description mb-5">
                <i>A hybrid approch to volume rendering</i>
              </p>
              <img src="./logo.png" height="200px" />
            </div>
          </div>
        </div>
      </header>
      <div className="container">

        <h2 className="mt-5">
          Problem statement:
      </h2>
        <p className="description">
          Astronomical data is rapidly increasing in both size and complexity. Most current vizualization tools are not adequately equipped to deal with this data boom. Current tools are often forced to load the entire data cube into memory which is practically impossible in most cases. Visualization tools often lack 3D rendering capabilities as well, further reducing their usefulness.
      </p>
        <h2 className="mt-5">
          CARTA:
      </h2>
        <p className="description">
          CARTA (Cube Analysis and Rendering Tool for Astronomy) is one of the leading astronomical visualization tools. It employs a client-server architecture that delegates the expensive processing and rendering to an enterprise-grade server, and exposes a web-based user-interface. The data cube is also downsampled before rendering allowing it to circumvent the memory problems present in most current solutions. CARTA however, has no 3D rendering capabilities. This project aims to implement a prototype that explores a scalable 3D rendering solution that can be integrated into CARTA.
      </p>

        <h2 className="mt-5">
          Aims:
      </h2>
        <p className="description">
          The aim of this project is to implement a 3D rendering prototype that can eventually integrate into CARTA. The protoype needs to:
       <ul>
            <li>Be capable of 3D visualization</li>
            <li>Be able to render very large cubes at interactive rates</li>
            <li>Allow for detailed analysis of the data cube</li>
            <li>Use a similar client-server architecture to CARTA</li>
          </ul>
        </p>

        <h2 className="mt-5">
          Basic architecture:
      </h2>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    
      </div>
    </div>
  )
}
