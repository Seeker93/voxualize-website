export default function Team() {
  return (
    <div className="container mt-5 bg-light p-5 rounded">

      <div className="container row justify-content-space-between ">
        <h5 className="description mb-5 col">
          Jonathan Weideman (WDMJON001)
          <img src="Jono.jpg" height="300px" className="mt-5"/>

          </h5>

        <h5 className="description mb-5 col">
          Shuaib Parker (PRKSHU001) <br/>
          <img src="shuaib.jpeg" height="300px" className="mt-5"/>
          </h5> 
      
      </div>
      <h3 className="mb-3">Work allocation</h3>
      <p>Shuaib was responsible for the client, and Jonathan was responsible for the server. See <a href="/client">client</a> and <a href="/server">server</a> for more details. The communication protocol was split up between the two.</p>
  

    </div>


  )
}