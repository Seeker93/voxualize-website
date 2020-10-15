import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
export default function MyApp({ Component, pageProps }) {
    return (<div>      
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Voxualize</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/client">Client</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/server">Server</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/team">Team members</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/downloads">Downloads</a>
        </li>
 
    
      </ul>
    
    </div>
  </nav><Component {...pageProps} /> </div>)
  }