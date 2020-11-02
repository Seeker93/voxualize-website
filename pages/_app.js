import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {

    const router = useRouter();

    return (<div className="master-background">      
      <nav className={"navbar navbar-expand-lg navbar-dark  bg-navbar" }>
    <a className="navbar-brand" href="/">Voxualize</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <a className={router.pathname == "/"? "nav-link active" : "nav-link"} href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={router.pathname == "/client"? "nav-link active" : "nav-link"} href="/client">Client</a>
        </li>
        <li className="nav-item">
          <a className={router.pathname == "/server"? "nav-link active" : "nav-link"} href="/server">Server</a>
        </li>
        <li className="nav-item">
          <a className={router.pathname == "/team"? "nav-link active" : "nav-link"} href="/team">Team members</a>
        </li>
        <li className="nav-item">
          <a className={router.pathname == "/downloads"? "nav-link active" : "nav-link"} href="/downloads">Downloads</a>
        </li>
 
    
      </ul>
    
    </div>
  </nav><Component {...pageProps} /> </div>)
  }