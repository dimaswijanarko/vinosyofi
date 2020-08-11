import React from "react";
import { Wrapper } from "./styles";
import LogoMaps from "../../img/love.png";

function index() {
  return (
    <Wrapper className="d-flex justify-content-center flex-column py-5">
      <div className="d-flex justify-content-center map-icon">
        <img width="100%" src={LogoMaps} alt="" />
      </div>
      <h1>Baleendah</h1>
      <div>
        <div>
          <iframe
            title="lokasi-pernikahan"
            width="100%"
            height="100%"
            // height="500"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15839.82077248522!2d107.6337704!3d-7.0145525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ea287d098d5d%3A0xf343e00be7c55ad7!2sBaleendah%2C%20Bandung%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1597129904762!5m2!1sen!2sid"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
