import React from "react";
import "./ReactBox.css";
import { TweenMax,  } from "gsap/TweenMax";

class ReactBox extends React.Component {
  constructor(props) {
    super(props);
    //
    this.bg = null; // reference to the DOM node
    this.item = null; // reference to the DOM node
    //
    if (props.visibility) {
      this.style.visibility = props.visibility;
    }
  }
  componentDidMount() {
    TweenMax.set(this.bg, {
      // scale: 0.5,
      transformOrigin: "50% 50%"
    });
    TweenMax.from(this.bg, 0.3, {
      alpha: 0.8,
      scale: 0
    });
    TweenMax.from(this.item, 0.5, {
      delay: 0.3,
      alpha: 0
    });
  }

  render() {
    const { filePath, h, w, killMe } = this.props;
    console.log('f = ' + filePath)
    return (
      <React.Fragment>
        <div
          ref={div => (this.bg = div)}
          className="bgStyle"
          onClick={killMe}
        />
          <div ref={div => (this.item = div)} className="iframeHolderStyle">
          <iframe title="react box" className="iframeStyle" src={filePath} width={w} height={h} />
         
        </div>
        
      </React.Fragment>
    );
  }
}
export default ReactBox;
