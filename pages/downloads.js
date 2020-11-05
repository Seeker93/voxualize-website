export default function Downloads() {
    return (
        <div className="container mt-5 p-5 bg-light rounded">
         <div className="row">
            <div className="col-sm">
             <embed className="mb-5" src="/assets/CARTA-volumetric-rendering-PRKSHU001-WDMJON001-revised.pdf" type="application/pdf" /> <br/>
             <a href="/assets/CARTA-volumetric-rendering-PRKSHU001-WDMJON001-revised.pdf" role="button" download className="btn btn-info mb-5">Download proposal </a>
          </div>

            <div className="col-sm">
            <embed className="mb-5" src="/assets/prkshu001/prkshu001-final-project-paper-carta.pdf" type="application/pdf" /> <br/>
            <a href="/assets/prkshu001/prkshu001-final-project-paper-carta.pdf" role="button" download className="btn btn-info mb-5">Download Shuaib's final paper</a>
            </div>
            <div className="col-sm">
            <embed className="mb-5" src="/assets/wdmjon001/WDMJON001-Final Paper.pdf" type="application/pdf" /> <br/>
            <a href="/assets/wdmjon001/WDMJON001-Final Paper.pdf" role="button" download className="btn btn-info mb-5">Download Jonathans's Final paper</a>
            </div>
         </div>
         <div className="row">
            <div className="col-sm">
             <embed className="mb-5" src="/assets/prkshu001/PRKSHU001-literature-review.pdf" type="application/pdf" /> <br/>
             <a href="/assets/prkshu001/PRKSHU001-literature-review.pdf" role="button" download className="btn btn-info mb-5">Download Shuaib's literature review</a>
          </div>

            <div className="col-sm">
            <embed className="mb-5" src="/assets/wdmjon001/Literature_Review_WDMJON001.pdf" type="application/pdf" /> <br/>
            <a href="/assets/wdmjon001/Literature_Review_WDMJON001.pdf" role="button" download className="btn btn-info mb-5">Download Jonathan's lit review</a>
            </div>
            <div className="col-sm">
            <embed className="mb-5" src="/assets/Poster.pdf" type="application/pdf" /> <br/>
            <a href="/assets/Poster.pdf" role="button" download className="btn btn-info mb-5">Download poster</a>
            </div>
         </div>
        </div>
    )

}