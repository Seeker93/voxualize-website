export default function Client() {
    return (
      <div className="container mt-5">
        <h2><b>Server</b></h2>
        <p className="description mb-5">
          The server is written in C++. It is responsible for the following operations, depending 
          on the remote precedure call made by the client:
        </p>
        <div className="h-50">
          <ul>
           <li><b>Storage of data cubes/astronomical data files to be visualized.</b></li>
           <li><b>Level of detail (LOD) model generation </b>- the server is responsible for 
           downsampling the full data cube to a cube small enough to be rendered in the client's 
           internet browser. The default value is 10 mb but the user can change this at will 
           (see client)</li>
           <li><b>Rendering the full data cube using offscreen rendering.</b></li>
           <li><b>Generating and encoding high resolution images </b> and continually streaming 
           them to the client. The servers continually captures screenshots of the offscreen render,
            encodes them and streams them to the client.</li>  
         </ul>
         <div className="text-center">
          <img src="./LOD-HQ.jpg" height = "350" border="5"/> 
          <figcaption><b>Left:</b> A LOD model that was generated on the server and is being displayed in the client's browser.
            <br></br><b>Right:</b> A high resolution screenshot of the full cube being rendered on the server, captured from an offscreen buffer.
          </figcaption>
         </div>
        </div>
        <h3 className="mt-5 mb-5">Evaluation methods</h3>
        <p>The evaluation metrics were designed in order to determine the scalability of the final solution. 
            Rather than attempting to make the application as responsive as possible with data sets which are small
            enough to be stored on our PCs, the goal was to build a server which would be able to handle much larger 
            cubes if it had access to the neccessary computing hardware - large memory storage and powerful GPU(s).
            Each of the following three tests were conducted on cubes of three different size (42mb, 195mb, 565mb):
        </p>
        <p>
            <ul>
              <li>The time taken to generate a 10mb LOD model. Tests were conducted using both the mean 
                  and max sampling method.
              </li>
              <li>The time taken to capture and render a screenshot of the full cube, given the parameters of the screenshot.</li>
            </ul>
        </p>
        <h3 className="mt-5 mb-5">
          Results:
        </h3>
        <h5>Time to Generate 10mb LOD model</h5>
        <p> Our implementation of the LOD model generation was definitely the bottleneck of our system.
          The algorithm executes sequentially, and a high-performant computer would likely show similar 
          increases in overhead as the size of the cube increases. Given more time, we would have parallelized
           this function, and instead of observing the linear speed up that we did, we would likely have achieved log(n) speedup.
           <br></br><br></br>The one saving grace of this bottleneck is that LOD models are usually generated infrequently
            when using our application. In most cases, the user will generate a model and interact with the
             same model for the majority of the time. Hence, this short delay before displaying the cube is tolerable.
             However, a real-world implementation when dealing with large cubes would require this function to 
             be parallelized. 
          The graph below details these results:
          <div className="text-center">
          <img src="LOD-Time.png"/>
          </div>
        </p>
        <h5>Frames-per-second</h5>
        <p> 
          The FPS results on the front-end were fairly promising, showing FPS values in the 40s range which is well within the FPS range needed for user-interaction.
          Increasing the LOD model size led to slight decreases in FPS but they were still well in the interactive range (above ~15 fps). Since the LOD models are unlikely to be very large in size, this was not a major concern.
          These results suggested that as long as the downsampling and transmission of data was done adequately, the LOD model could always be rendered at interactive frame-rates, regardless of the size of the cube.
          The bar graph below details these results.
        </p>
        <div className="text-center">
        <img src="./HQ-Time.png"/>
        </div>
      </div>
  
  
    )
  }