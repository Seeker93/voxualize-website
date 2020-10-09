import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">

        <h1 className="mt-5">
          Voxualize
        </h1>

        <p className="description mb-5">
          <i>A hybrid approch to volume rendering</i>
        </p>
        <img src="./cube.png"/>
      <h2 className="mt-5">
        Problem statement:
      </h2>
      <p className="description">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.   
      </p>
   
      <h2 className="mt-5">
       Aims:
      </h2>
      <p className="description">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.   
      </p>

      <h2 className="mt-5">
       Basic architecture:
      </h2>
      <p className="description">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.   
      </p>
      <h2 className="mt-5">
       Downloads:
      </h2>
      <p>
      Our project documents can be found below:
      </p>
      <button className="btn btn-primary mr-5 mt-3">Download proposal</button>
      <button className="btn btn-primary mt-3">Download lit reviews</button>

    </div>
  )
}
