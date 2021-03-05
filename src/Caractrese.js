import React from "react";


export const Caractrese = () => {

  return (
    <React.Fragment >
      <div className="curved-bg-div wow animated fadeIn" data-wow-delay="0.15s"></div>
      <div id="fh5co-features" className="fh5co-features-outer">
        <div className="container">

          <div className="row fh5co-features-grid-columns">

            <div className="col-sm-6 in-order-1 wow animated fadeInLeft" data-wow-delay="0.22s">
              <div className="col-sm-image-container">
                <img className="img-float-left" src="img/smartphone-1.png" alt="smartphone-1" />
                {/* <span className="span-new">NOUVEAU</span>
          <span className="span-free">Gratuit</span> */}
              </div>
            </div>

            <div className="col-sm-6 in-order-2 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
              <h1>RECHERCHE EFFICACE</h1>
              <p>Avec de nombreuses options de recherche, vous pouvez trouver votre besoin en un rien de tempss  </p>

            </div>

            <div className="col-sm-6 in-order-3 sm-6-content wow animated fadeInLeft" data-wow-delay="0.22s">
              <h1>UN MOYEN BEAUCOUP PLUS SIMPLE DE S'INSCRIRE</h1>
              <p>vous pouvez vous inscrire via Facebook, Google ou même votre adresse e-mail personnelle </p>

            </div>

            <div className="col-sm-6 in-order-4 wow animated fadeInRight" data-wow-delay="0.22s">
              <img className="img-float-right" src="img/smartphone-2.png" alt="smartphone-2" />
            </div>

            <div className="col-sm-6 in-order-5 wow animated fadeInLeft" data-wow-delay="0.22s">
              <div className="col-sm-image-container">
                <img className="img-float-left" src="img/phone-image.png" alt="smartphone-3" />
                {/* <span className="span-data">UTILISATION</span>
          <span className="span-percent">100%</span> */}
              </div>
            </div>
            <div className="col-sm-6 in-order-6 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
              <h1>FACILE À UTILISER </h1>
              <p>quelques étapes, facile à utiliser</p>
              <span className="circle circle-first">100%</span>

            </div>




          </div>


        </div>
      </div>


    </React.Fragment>


  );

}