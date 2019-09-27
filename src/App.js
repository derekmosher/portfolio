import React from 'react';
import {FaYoutube,FaLinkedin, FaGithubSquare,FaRunning ,FaCode,FaPalette} from 'react-icons/fa';
import { IconContext } from "react-icons";
import ReactBox from "./ReactBox";
import ReactPlayer from "react-player";
import './css/bootstrap.css';
import './css/app.css';
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
    console.log("Mydata = ", props.json);
    console.log("Mydata title = ", props.json.section1.bg ,props.json.section4.title);
    console.log("Mydata title = ", props.json.section0.title,props.json.section0.description,props.json.section0.url );
    this.json = props.json
    this.bg = null; // reference to the DOM node
    this.item = null; // reference to the DOM node
    //
    this.textArray = [] //intro text reference holder
    this.thumbArray0 = props.thumbs_design//[] //icons 1 group reference holder
    this.thumbArray1 = props.thumbs_banner//[] //icons 1 group reference holder
    this.thumbArray4 = props.thumbs_social//[] //icons 2 group reference holder
    this.thumbArray2 = props.thumbs_yt//[] //icons 2 group reference holder
    this.thumbArray3 = props.thumbs_book //[] //icons 3 group reference holder
    this.mytitle1 = props.json.section1.title
    this.mytitle2 = props.json.section2.title
    this.mytitle3 = props.json.section3.title
    this.mytitle4 = props.json.section4.title
    this.mytitle5 = props.json.section5.title
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
    // const imageOnClick = loc => {
    //   console.log("Click " + loc);
    //   window.open(loc);
    // };
    return (
      <React.Fragment>
        <div id="page" className="page">{/* mian-content */}
  {/* HOME ===================================================*/}
          <div className="main-content bg bg2" id="home" >

            <div className="layer" style={{position:'absolute',top:'0px',left:'0px',width:'100%',zIndex: '1'}}>
              {/* header */}
              <header className="editContent">
                <div className="container-fluid px-lg-5">
                  {/* T header NAV Bar*/}
                  <nav className="py-4 d-lg-flex">
                    <div id="logo">
                      <h1> <a className="editContent" href="index.html" style={{ outline: 'none', cursor: 'inherit' }}> Derek Mosher</a></h1>
                    </div>
                    <label htmlFor="drop" className="toggle">Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu mt-2 ml-auto">
                      {/* <li className="active"><a href="index.html" style={{ outline: 'none', cursor: 'inherit' }}>Home</a></li> */}
                      <li><a href="#about" className="scroll">About</a></li>
                      <li><a href="#work" className="scroll" style={{ outline: 'none', cursor: 'inherit' }}>Work</a></li>
                      <li><a href="#contact" className="scroll" style={{ outline: 'none', cursor: 'inherit' }}>Contact</a></li>
                    </ul>
                  </nav>
    
                </div>
              </header>
              {/* <div className="container">
                <div className="banner-info-w3layouts">
                  <p className="editContent" style={{ outline: 'none', color: 'fff', fontSize:'27px',fontWeight:'600',lineHeight:'100%'}}>Motion, Design, Code </p>
                  <p className="my-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}> My primary focus has always been motion design. I've been in the advertising and entertainment industry for 20 years.</p> 
                  </div>
              </div> */}
            </div>
            <div style={{display:'flex', justifyContent: 'center'}}>
                                      <ReactPlayer
                                        url={this.props.json.section0.url}
                                        className="react-player"
                                        muted = 'true'
                                        volume='0'
                                        playing = 'true'
                                        loop = 'true'
                                        controls = 'false'
                                        width="100%"
                                        height="100%"
                                      />
                          </div>
          </div>
  {/* ABOUT ===================================================*/}
          <section className="sectionAbout banner-bottom-wthree py-5 editContent" id="about">
            <div className="container py-md-5 px-lg-5">
              <div className="content-left-bottom text-center">
                <h3 className="tittle mb-lg-5 mb-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>About</h3>
              </div>
              <div className="content-right-bottom mt-md-0 mt-3 text-center">
                <p className="mt-2 editContent" style={{ outline: 'none', cursor: 'inherit' }}> <strong className="text-capitalize"> Animator, Designer,</strong> and <strong className="text-capitalize"> Coder </strong></p>
                <p className="mt-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>        
                 I started out studying <strong className="text-capitalize">  Digital Storytelling </strong> in Graduate School. 
                 I had always loved drawing and wanted to see my newspaper comic strip come to life. 
                 I have always considered myself a <strong>motion designer</strong>, but along my journey I have been tasked with creative concepting, design, storyboarding, production art, prototyping, illustration, video editing, writing, 3d, websites, html emails, and even some small game development.
                I am now excited to be studying Cinema 4d. I hope to use it for motion graphic clients and for a new cartoon series on YouTube. Keeping up with technology, I built this new portfolio with reactjs and jsx.</p>
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
                       
                        <p className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>After Effects, <br/>Html, css, js, gsap,<br/>Google Web Designer,<br/> Premiere, <br/> Cinema 4d</p>
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
                        <p className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>PhotoShop <br/> Sketch</p>
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
                        <p className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>Html, css, js <br/>gsap<br/>Reactjs, jsx, npm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
{/*/ Demo Reel  ====================================================================*/}
          <section className="section0 gallery py-5" id="gallery" >
            <div className="container py-md-5">
              <div className="header text-center">
                <h3 className="tittle mb-lg-5 mb-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>{this.props.json.section0.title}</h3>
                <h6> {this.props.json.section0.description}</h6>
              </div>
              <br />
              <div style={{display:'flex', justifyContent: 'center'}}>
                    <ReactPlayer
                      url={this.props.json.section0.url}
                      className="react-player"
                      stopped = 'true'
                      controls
                      width="640px"
                      height="360px"
                    />
              </div>
              </div>
          </section>
    {/*/ My Deisgn  ====================================================================*/}
    <section className="section1 py-5 editContent" id="work" style={{  'backgroundColor':this.props.json.section1.bg  }}>
            <div className="container py-md-5">
              <div className="header pb-lg-3 pb-3 text-center">
                <h3 className="tittle mb-lg-3 mb-3 editContent">{this.mytitle1}</h3>
              </div>
               {/*/ Line 1 ====================================================================*/}
              <div className="row ab-info second mt-lg-4 editContent">
              {this.props.thumbs_design.map((item, i) => (
                <ThumbGroup
                    handleClick={this.showReactBox}
                    itemsKey="items_design"
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
    {/*/ My Work  ====================================================================*/}
          <section className="section2 py-5 editContent" id="work" style={{  'backgroundColor':this.props.json.section2.bg  }}>
            <div className="container py-md-5">
              <div className="header pb-lg-3 pb-3 text-center" >
                <h3 className="tittle mb-lg-3 mb-3 editContent">{this.mytitle2}</h3>
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
            <section className="section3 py-5 editContent" id="work" style={{  'backgroundColor':this.props.json.section3.bg  }}>
            <div className="container py-md-5">
              <div className="header pb-lg-3 pb-3 text-center">
                <h3 className="tittle mb-lg-3 mb-3 editContent">{this.mytitle3}</h3>
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
          <section className="section4 py-5 editContent" id="" style={{  'backgroundColor':this.props.json.section4.bg  }}>
            <div className="container py-md-5">
              <div className="header pb-lg-3 pb-3 text-center">
                <h3 className="tittle mb-lg-3 mb-3 editContent">{this.mytitle4}</h3>
                <h6><a href="https://www.youtube.com/c/derekmosher" target="_blank" rel="noopener noreferrer" >
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
          <section className="section5 gallery py-5" id="gallery" style={{  'backgroundColor':this.props.json.section5.bg  }}>
            <div className="container py-md-5">
              <div className="header text-center">
                <h3 className="tittle mb-lg-5 mb-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>{this.mytitle5}</h3>
                <h6> I wrote and illustrated,<b><a href="https://www.amazon.com/Creepy-Little-TV-Guy/dp/197586946X" target="_blank" rel="noopener noreferrer" >The Creepy Little TV Guy</a></b>. It's available to purchase on&nbsp;
                <a href="https://www.amazon.com/Creepy-Little-TV-Guy/dp/197586946X" target="_blank" rel="noopener noreferrer" >Amazon</a>. Makes a great gift. Get your copy today!
                </h6>
              </div>
              <br />
              <div style={{display:'flex', justifyContent: 'center', backgroundColor:''}}>
                    <ReactPlayer
                      url="https://www.youtube.com/embed/c43dQ71y0lk"
                      className="react-player"
                      stopped = 'true'
                      controls
                      width="640px"
                      height="360px"
                    />
                    
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