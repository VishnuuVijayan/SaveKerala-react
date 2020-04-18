import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-center">
        <MDBRow>
          <MDBCol md="12">
           
            <p>
            For emergency support, call the District control room at 1077 or the State control room at 1070. Volunteers may contact District Project Managers for support related to volunteering and contributions
            </p>
            <p>
            സഹായത്തിനായി സന്നദ്ധ സേവകർ തയ്യാറാണ്.
സഹായം ആവശ്യമെങ്കിൽ വിളിക്കുക: ജില്ലാ കൺട്രോൾ റൂം: 1077 , സംസ്ഥാന കൺട്രോൾ റൂം: 1070
            </p>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> SaveKerala2020 </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;