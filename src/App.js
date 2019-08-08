import React from 'react';
import {FaYoutube,FaLinkedin, FaGithubSquare,FaRunning ,FaCode,FaPalette} from 'react-icons/fa';
import { IconContext } from "react-icons";
import ReactBox from "./ReactBox";
import ReactPlayer from "react-player";
import './css/bootstrap.css';
import './css/style.css';
/////////////////////////////

const ThumbGroup = ({
  id,
  title,
  description,
  thumbPath,
  handleClick,
  itemsKey,
  isVisible
}) => {

//console.log(id, thumbPath, itemsKey, referenceArr)
  return (
    <div className="col-lg-3 ab-content" > 
     <div className="ab-content-inner editContent gal-img" > 
        <img 
         className="img-fluid" 
          onClick={() => handleClick(id, itemsKey)} 
          alt={"thumbnail_" +id}
          src={thumbPath.includes("http") ? thumbPath : "../images/" + thumbPath}                   
          style={{ outline: 'none', cursor: 'pointer'}}
        />
      <div className="ab-info-con">
        <h4 className="editContent" style={{ outline: 'none', cursor: 'inherit',marginBottom:'6px' }}>{title}</h4>
        <p className="editContent">{description}</p>
      </div>
    </div>
  </div>
  );
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showtimeVisible: false,
      thumbNum: props.thumbNum,
      itemsKey: "items",
      data: {}
    };
    console.log("Mydata", props.json);
    this.json = props.json
    this.bg = null; // reference to the DOM node
    this.item = null; // reference to the DOM node
    //
    this.textArray = [] //intro text reference holder
    this.thumbArray1 = props.thumbs_banner//[] //icons 1 group reference holder
    this.thumbArray4 = props.thumbs_social//[] //icons 2 group reference holder
    this.thumbArray2 = props.thumbs_yt//[] //icons 2 group reference holder
    this.thumbArray3 = props.thumbs_book //[] //icons 3 group reference holder
  }
  componentDidMount() {
 
  }
  hideReactBox = () => {
    this.setState({
      showtimeVisible: false
    });
  };
  showReactBox = (thumbNum, itemsKey) => {
    console.log(thumbNum, itemsKey);
    this.setState({
      itemsKey: itemsKey,
      showtimeVisible: true,
      thumbNum
    });
  };

  render() {
    const imageOnClick = loc => {
      console.log("Click " + loc);
      window.open(loc);
    };
    return (
      <React.Fragment>
        <div id="page" className="page">{/* mian-content */}
  {/* HOME ===================================================*/}
          <div className="main-content bg bg2" id="home">
            <div className="layer">
              {/* header */}
              <header className="editContent">
                <div className="container-fluid px-lg-5">
                  {/* nav */}
                  <nav className="py-4 d-lg-flex">
                    <div id="logo">
                      <h1> <a className="editContent" href="index.html" style={{ outline: 'none', cursor: 'inherit' }}> Derek Mosher</a></h1>
                    </div>
                    <label htmlFor="drop" className="toggle">Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu mt-2 ml-auto">
                      <li className="active"><a href="index.html" style={{ outline: 'none', cursor: 'inherit' }}>Home</a></li>
                      <li><a href="#about" className="scroll">About</a></li>
                      <li><a href="#work" className="scroll" style={{ outline: 'none', cursor: 'inherit' }}>Work</a></li>
                      <li><a href="#contact" className="scroll" style={{ outline: 'none', cursor: 'inherit' }}>Contact</a></li>
                    </ul>
                  </nav>
                  {/* //nav */}
                </div>
              </header>
              {/* //header */}
              <div className="container">
                {/* /banner */}
                <div className="banner-info-w3layouts">
                  <h3 className="editContent">Motion, Design, Code</h3>
                  <p className="my-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}> My primary focus has always been motion design. I've been in the advertising and entertainment industry for 20 years.</p> <a href="#about" className="read-more mt-3 btn" style={{ outline: 'none', cursor: 'inherit' }}>Read More </a> </div>
              </div>
            </div>
          </div>
  {/* ABOUT ===================================================*/}
          <section className="banner-bottom-wthree py-5 editContent" id="about">
            <div className="container py-md-5 px-lg-5">
              <div className="content-left-bottom text-center">
                <h3 className="tittle mb-lg-5 mb-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>About</h3>
              </div>
              <div className="content-right-bottom mt-md-0 mt-3 text-center">
                <p className="mt-2 editContent" style={{ outline: 'none', cursor: 'inherit' }}>I've been <strong className="text-capitalize"> animating, designing,</strong> and <strong className="text-capitalize"> coding </strong> for 20 years.</p>
                <p className="mt-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>        
                 I started out back in 1997 studying <strong className="text-capitalize">  Digital Storytelling </strong> in Graduate School. 
                 I had always loved to draw and wanted to see my images come to life. Flash was in demand and I jumped right into it. 
                 Working at entertainment and advertising companies I created ads, sites, interactive experiences and even some small games. 
                 Post Flash apocalypse, I transitioned to Adobe Edge, Google Web Designer and ultimately into <strong className="text-capitalize"> HTML, CSS,</strong> and
                 <strong className="text-capitalize"> JavaScript</strong>. Keeping up with technology I built this new portfolio with Reactjs and JSX.</p>
              </div>
              <div className="row banner-grids mt-lg-5 editContent">
                <div className="col-lg-4 banner-grid">
                  <div className="content-grid-info editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                    <div className="row">
                      <div className="col-2"style={{ display:'flex',alignItems:'flex-top',justifyContent:'center',backgroundColor:''}}>
                      <IconContext.Provider value={{ size: '6em',color: "red", className: "global-class-name" }}>
 
                      <FaRunning   aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
                      </IconContext.Provider>
                      </div>
                      <div className="col-10">
                        <h4 className="mb-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Animation</h4>
                       
                        <p className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>GSAP, <br/>After Effects,<br/>Google Web Designer,<br/> Premiere</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 banner-grid">
                  <div className="content-grid-info editContent">
                    <div className="row">
                    <div className="col-2"style={{ display:'flex',alignItems:'flex-top',justifyContent:'center',backgroundColor:''}}>
                      <IconContext.Provider value={{ size: '6em',color: "red", className: "global-class-name" }}>
 
 <FaPalette  aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
 </IconContext.Provider>
                      </div>
                      <div className="col-10">
                        <h4 className="mb-3 editContent">Design</h4>
                        <p className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>PhotoShop</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 banner-grid">
                  <div className="content-grid-info editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                    <div className="row">
                    <div className="col-2"style={{ display:'flex',alignItems:'flex-top',justifyContent:'center',backgroundColor:''}}>
                      <IconContext.Provider value={{ size: '6em',color: "red", className: "global-class-name" }}>
 
 <FaCode  aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
 </IconContext.Provider>
                      </div>
                      <div className="col-10">
                        <h4 className="mb-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Code</h4>
                        <p className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>HTML, CSS, JavaScript, <br/>GSAP<br/>Git<br/>Reactjs, JSX, NPM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

    {/*/ My Work  ====================================================================*/}
          <section className="section_banner py-5 editContent" id="work">
            <div className="container py-md-5">
              <div className="header pb-lg-3 pb-3 text-center">
                <h3 className="tittle mb-lg-3 mb-3 editContent">My Work</h3>
              </div>
               {/*/ Line 1 ====================================================================*/}
              <div className="row ab-info second mt-lg-4 editContent">
              {this.props.thumbs_banner.map((item, i) => (
                <ThumbGroup
                    handleClick={this.showReactBox}
                    itemsKey="items_banner"
                    key={i}
                    id={i}
                    title={item.title}
                    description={item.description}
                    info={item.info}
                    thumbPath={item.thumbPath}
                  />
                  ))}
              </div>
            </div>
          </section>
{/*/ My Social  ====================================================================*/}
            <section className="section_social py-5 editContent" id="work">
            <div className="container py-md-5">
              <div className="header pb-lg-3 pb-3 text-center">
                <h3 className="tittle mb-lg-3 mb-3 editContent">Social Media</h3>
              </div>
               {/*/ Line 1 ====================================================================*/}
              <div className="row ab-info second mt-lg-4 editContent">
              {this.props.thumbs_social.map((item, i) => (
                <ThumbGroup
                    handleClick={this.showReactBox}
                    itemsKey="items_social"
                    key={i}
                    id={i}
                    title={item.title}
                    description={item.description}
                    info={item.info}
                    thumbPath={item.thumbPath}
                  />
                  ))}
              </div>
            </div>
          </section>
 
    {/*/ Youtube ====================================================================*/}
          <section className="section_yt py-5 editContent" id="">
            <div className="container py-md-5">
              <div className="header pb-lg-3 pb-3 text-center">
                <h3 className="tittle mb-lg-3 mb-3 editContent">Youtube Content Creator</h3>
                <h6><a href="https://www.youtube.com/c/derekmosher" target="_blank">
                    My Youtube channel
                  </a>
                  &nbsp;has over a 1,100,000 views. I enjoy doing reviews,
                  unboxings, how to's, and creative stuff. I use Premiere, After
                  Effects, and PhotoShop to create my videos.
                </h6>
              </div>
              <div className="row ab-info second mt-lg-4 editContent">
              {this.props.thumbs_yt.map((item, i) => (
                <ThumbGroup
                    handleClick={this.showReactBox}
                    itemsKey="items_youtube"
                    key={i}
                    id={i}
                    title={item.title}
                    description={item.description}
                    info={item.info}
                    thumbPath={item.thumbPath}
                  />
                  ))}
              </div>
               {/*/ Line 2 ====================================================================*/}
            </div>
          </section>

  {/*/ Gallery  ============original size ws 600x400 . the popup was taht too. */}
          <section className="gallery py-5" id="gallery">
            <div className="container py-md-5">
              <div className="header text-center">
                <h3 className="tittle mb-lg-5 mb-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Ilustrated Book</h3>
                <h6> I wrote and illustrated,<b><a href="https://www.amazon.com/Creepy-Little-TV-Guy/dp/197586946X" target="_blank">The Creepy Little TV Guy</a></b>. It's available to purchase on&nbsp;
                <a href="https://www.amazon.com/Creepy-Little-TV-Guy/dp/197586946X" target="_blank">Amazon</a>. Makes a great gift. Get your copy today!
                </h6>
              </div>
              <br />
              <div style={{display:'flex', justifyContent: 'center', backgroundColor:''}}>
                <div className="player-wrapper2">
                    <div className="player-wrapper">
                    <ReactPlayer
                      url="https://www.youtube.com/embed/c43dQ71y0lk"
                      className="react-player"
                      stopped = 'true'
                      controls
                      width="640px"
                      height="360px"
                    />
                    </div>
                </div>
              </div>
              <div className="row news-grids text-center">
                <div className="col-md-4 gal-img">
                  <a href="#gal1"><img src="../images/cltvg1.jpg" alt="news image1" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} /></a>
                </div>
                <div className="col-md-4 gal-img">
                  <a href="#gal2"><img src="../images/cltvg2.jpg" alt="news image2" className="img-fluid" /></a>
                </div>
                <div className="col-md-4 gal-img">
                  <a href="#gal3"><img src="../images/cltvg3.jpg" alt="news image3" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} /></a>
                </div>
              
              </div>
              {/* popup*/}
              <div id="gal1" className="pop-overlay animate">
                <div className="popup">
                  <img src="../images/cltvg1.jpg" alt="Popup Image1" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                  <p className="mt-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>For three months straight,
Timothy sat lost to the world,
submersed in sights and sounds 
that whirled and twirled.
</p>
                  <a className="close" href="#gallery">×</a>
                </div>
              </div>
              {/* //popup */}
              {/* popup*/}
              <div id="gal2" className="pop-overlay animate">
                <div className="popup">
                  <img src="../images/cltvg2.jpg" alt="Popup Image2" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                  <p className="mt-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>He streaked through the streams.
He swung from the trees.
He danced in the daisies.
He buzzed with the bees.</p>
                  <a className="close" href="#gallery">×</a>
                </div>
              </div>
              {/* //popup */}
              {/* popup*/}
              <div id="gal3" className="pop-overlay animate">
                <div className="popup">
                  <img src="../images/cltvg3.jpg" alt="Popup Image3" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                  <p className="mt-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Then out the front door, 
Timothy sailed.
And at last, 
the chase was derailed.</p>
                  <a className="close" href="#gallery">×</a>
                </div>
              </div>
              {/* //popup3 */}


            </div>
          </section>
  {/* footer=================================================================== */}
          <footer className="footer-content bg bg1" id="contact">
            <div className="layer footer-1">
              <div className="container-fluid">
                <div className="row footer-top-inner-w3ls"> </div>
                <p className="copy-right-grids text-li text-center my-sm-4 my-4">- Connect with me - <br/> derekmosher@gmail.com
                {/* <a href="http://w3layouts.com/"> W3layouts </a> */}
                </p>
                <div className="w3ls-footer text-center mt-4">
                  <ul className="list-unstyled w3ls-icons">
                  <li>
                      <a href="https://www.linkedin.com/in/dmosh/" >
                      <IconContext.Provider value={{ size: '3em',color: "white", className: "global-class-name" }}>
 
 <FaLinkedin  aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
   </IconContext.Provider>
    {/* <span className="fa fa-linkedin" style={{ outline: 'none', cursor: 'inherit' }} /> */}
                      </a>
                    </li>
                    
                    <li>
                      <a href="https://www.youtube.com/c/derekmosher" >
                      <IconContext.Provider value={{ size: '3em',color: "white", className: "global-class-name" }}>
 
 <FaYoutube  aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
   </IconContext.Provider>
                        {/* <span className="fa fa-youtube" style={{ outline: 'none', cursor: 'inherit' }} /> */}
                      </a>
                    </li>
                    
  
                    <li>
                      <a href="https://github.com/derekmosher" >
                      <IconContext.Provider value={{ size: '3em',color: "white", className: "global-class-name" }}>
 
 <FaGithubSquare  aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
   </IconContext.Provider>
                        {/* <span className="fa fa-github" style={{ outline: 'none', cursor: 'inherit' }} /> */}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="move-top text-right"><a href="#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} /></a></div>
              </div>
              {/* //footer bottom */}
            </div>
          </footer>
          {/* //footer */}
          <div style={{ position: "absolute", top: "0px"}}>
          {this.state.showtimeVisible && (
            <ReactBox
              filePath={this.json[this.state.itemsKey][this.state.thumbNum].filePath}
              h={this.json[this.state.itemsKey][this.state.thumbNum].h}
              w={this.json[this.state.itemsKey][this.state.thumbNum].w}
              killMe={this.hideReactBox}
            />
          )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;