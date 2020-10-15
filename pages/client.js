export default function Client() {
  return (
    <div className="container mt-5">
      <h1>Client</h1>
      <h2 className="mt-5 mb-5  ">
        User-interface
      </h2>
      <p className="description mb-5">
        The user-interface is written in React, and is written as a single-page application. The diagram below is a screenshot of the user-interface after it has rendered an LOD model. The labels point out the key features of the user-interface.
      </p>
      <div className="h-50">
        <img src="./full-ui.png" height="400" className="mb-5 " />
        <ul>
         <li>A: File selector - Used for selecting the file to visualize</li>
         <li>B: Viewing Area - This is the main area used to view the cube. When interacting with the cube, the user sees a downsampled level-of-detail (LOD) model of the cube. When the user stops interacting with the cube for around 300ms, a high quality image is sent from the server, replacing the LOD model.</li>
         <li>C: Cropping widget - Allows the user to resize the data cube as you see fit.</li> 
         <li>D: Axes sliders - Allows a secondary way to resize the cube. C and D are mapped together</li> 
         <li>E: LOD model slider- Allows the user to specify the size cube rendered by the frontend. This can make the LOD model more / less detailed depending on the setting.</li> 
         <li>F: Reset cube button - Resets the cube to it's default cropping regions / transfer function settings etc.</li>
         <li>G: Sample type: - Allows the user to choose which sampling method to use for the LOD model</li>
         <li>H: Opacity widget - Allows the user to change the opacity transfer function, and updates the model accordingly. Includes a reset button to change back to the default opacity settings.</li> 
 </ul>
      </div>

    </div>


  )
}