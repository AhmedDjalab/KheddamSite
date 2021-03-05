import { Grid } from "@material-ui/core";
import React from "react";


export const HowToDownload = () => {

  return (

    <div id="fh5co-download" className="fh5co-bottom-outer">
      <div className="overlay">
        <div className="container fh5co-bottom-inner">
          <div className="row">
            <div className="col-sm-6" >
              <h1 style={{ marginBottom: "0em" }} >Comment télécharger l'application?</h1>
              <p >Kheddam est deux applications. l'un est destiné aux clients nommés Kheddam, l'autre aux travailleurs sous le nom de Kheddam Pro, vous pouvez donc télécharger pour Android  à partir des boutons ci-dessous</p>

              <Grid container direction="row">
                <Grid item md="4" sm="6">
                  <a className="wow fadeIn animated" data-wow-delay="0.25s" href="https://play.google.com/store/apps/details?id=com.techlead.kheddam"><img className="google-play-btn" src="img/ka.png" alt="Google Play Icon" width="139px" height="50px" /></a>
                  <a className="wow fadeIn animated" data-wow-delay="0.67s" href="https://play.google.com/store/apps/details?id=com.techlead.KheddamPro"><img className="google-play-btn" src="img/kpa.png" alt="Google Play Icon" width="139px" height="50px" /></a>
                </Grid>
                <Grid item md="4" sm="6">
                  <a className="wow fadeIn animated" data-wow-delay="0.25s" href="#"><img className="google-play-btn" src="img/ki.png" alt="Google Play Icon" width="139px" height="50px" /></a>
                  <a className="wow fadeIn animated" data-wow-delay="0.67s" href="#"><img className="google-play-btn" src="img/kpi.png" alt="Google Play Icon" width="139px" height="50px" /></a>
                </Grid>
              </Grid>

            </div>
          </div>

        </div>
      </div>
    </div>







  );

}