import { GlassCard } from "react-glass-ui";
import Prism from "./components/Prism";
import "./Projects.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SplitText from "./components/SplitText";
import VariableProximity from "./components/VariableProximity";
import LogoLoop from "./components/LogoLoop";
import { SiReact, SiTypescript, SiCplusplus, SiJavascript, SiPython, SiAngular, SiIonic} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import Carousel from "./components/Carousel";
 
const techLogos = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <FaHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com" },
  { node: <FaCss3Alt />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiAngular />, title: "Angular", href: "https://angular.io" },
  { node: <SiIonic />, title: "Ionic", href: "https://ionicframework.com" },  
];

function Projects() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const nav = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const navProjects = () => {
    nav("/projects", { viewTransition: true});
  }
  
  const navContact = () => {
    nav("/contact", { viewTransition: true});
  }
  
  const navAbout = () => {
    nav("/about", { viewTransition: true});
  }
  return (
    <div
      style={{
      position: "relative",
      width: "100vw",
      minHeight: "100vh",
      overflowX: "hidden",
      background: "black",
      color: "white",}}>

      <section className="nav-buttons">
        <nav>
          <button onClick={() => navAbout()}>
            <GlassCard
              blur={4}
              width={100}
              height={50}
              padding="20px"
              distortion={80}
              flexibility={8}
              borderColor="#ffffff"
              borderSize={1}
              borderRadius={150}
              borderOpacity={0.4}
              backgroundColor="#000000ff"
              backgroundOpacity={0.4}
              innerLightColor="#ffffff"
              innerLightSpread={1}
              innerLightBlur={10}
              innerLightOpacity={0}
              outerLightColor="#ffffff"
              outerLightSpread={1}
              outerLightBlur={10}
              outerLightOpacity={0}
              color="#ffffff"
              chromaticAberration={0}
              onHoverScale={1}
              saturation={100}
              brightness={100}>
            <div>
              <div>About</div>
            </div>
          </GlassCard>
          </button>
          
          <button onClick={() => navProjects()}>
            <GlassCard
              blur={4}
              width={100}
              height={50}
              padding="20px"
              distortion={80}
              flexibility={8}
              borderColor="#ffffff"
              borderSize={1}
              borderRadius={150}
              borderOpacity={0.4}
              backgroundColor="#000000ff"
              backgroundOpacity={0.4}
              innerLightColor="#ffffff"
              innerLightSpread={1}
              innerLightBlur={10}
              innerLightOpacity={0}
              outerLightColor="#ffffff"
              outerLightSpread={1}
              outerLightBlur={10}
              outerLightOpacity={0}
              color="#ffffff"
              chromaticAberration={0}
              onHoverScale={1}
              saturation={100}
              brightness={100}>
              <div>
                <div>Projects</div>
              </div>
            </GlassCard>
          </button>

          <button onClick={() => navContact()}>
            <GlassCard
              blur={4}
              width={100}
              height={50}
              padding="20px"
              distortion={80}
              flexibility={8}
              borderColor="#ffffff"
              borderSize={1}
              borderRadius={150}
              borderOpacity={0.4}
              backgroundColor="#000000ff"
              backgroundOpacity={0.4}
              innerLightColor="#ffffff"
              innerLightSpread={1}
              innerLightBlur={10}
              innerLightOpacity={0}
              outerLightColor="#ffffff"
              outerLightSpread={1}
              outerLightBlur={10}
              outerLightOpacity={0}
              color="#ffffff"
              chromaticAberration={0}
              onHoverScale={1}
              saturation={100}
              brightness={100}>
              <div>
                <div>Contact</div>
              </div>
            </GlassCard>
          </button>
        </nav>
      </section>

      {/* FULLSCREEN PRISM BACKGROUND */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
          }}>
          <Prism
            height={4.5}
            baseWidth={9}
            animationType="hover"
            glow={0.7}
            noise={0.1}
            transparent
            scale={3.6}
            hueShift={0}
            colorFrequency={2.1}
            hoverStrength={2}
            inertia={0.05}
            bloom={0.9}
            timeScale={0.5}
          />
        </div>
      </div>

      <section className="header-section">
        <SplitText
          text="Check Out My Projects!"
          className="text-5xl font-semibold text-center"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}/>
      </section>

      <section className="description-section">
        <GlassCard
            blur={4}
            width={1000}
            height={250}
            padding="0px"
            distortion={80}
            flexibility={2}
            borderColor="#ffffff"
            borderSize={1}
            borderRadius={150}
            borderOpacity={0.4}
            backgroundColor="#000000ff"
            backgroundOpacity={0.1}
            innerLightColor="#ffffff"
            innerLightSpread={1}
            innerLightBlur={10}
            innerLightOpacity={0}
            outerLightColor="#ffffff"
            outerLightSpread={1}
            outerLightBlur={10}
            outerLightOpacity={0}
            color="#ffffff"
            chromaticAberration={0}
            onHoverScale={1}
            saturation={100}
            brightness={100}>
          <div className="profile-card">
            <div ref={containerRef} style={{position: 'relative', paddingTop: '40px'}}>
              <div className="prose-width">
                <VariableProximity
                  style={{fontSize: '30px',}}
                  label={'This is a collection of what I have done so far during my time learning and applying the knowledge I\'ve gained! I will continue to update this page with more experiences and projects! If you have any question, feel free to contact me!'}
                  className={'variable-proximity'}
                  fromFontVariationSettings="'wght' 400, 'opsz' 30"
                  toFontVariationSettings="'wght' 1000, 'opsz' 61"
                  containerRef={containerRef as React.RefObject<HTMLElement>}
                  radius={50}
                  falloff="linear"/>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      <div style={{fontSize: '30px', fontWeight: 'bold', paddingTop: '20px'}}>Languages/Frameworks I Know</div>
      <section className="logos-section">
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden', paddingTop: '25px'}}>
          {/* <div className="langs-text">Languages That I Know</div> */}
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={150}
            direction="left"
            logoHeight={125}
            gap={60}
            hoverSpeed={5}
            scaleOnHover
            ariaLabel="Technology partners"/>
        </div>
      </section>

      <div style={{fontSize: '30px', fontWeight: 'bold', paddingTop: '20px'}}>Some Projects</div>
      <div style={{ 
        height: '600px', 
        position: 'relative', 
        display: 'flex',            
        justifyContent: 'center',   
        alignItems: 'center',       
        width: '100%'}}>
        <Carousel
          baseWidth={1000}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}/>
      </div>

      <section className="links-section">
        <GlassCard
            blur={4}
            width={350}
            height={350}
            padding="20px"
            distortion={80}
            flexibility={2}
            borderColor="#ffffff"
            borderSize={1}
            borderRadius={100}
            borderOpacity={0.4}
            backgroundColor="#000000ff"
            backgroundOpacity={0.1}
            innerLightColor="#ffffff"
            innerLightSpread={1}
            innerLightBlur={10}
            innerLightOpacity={0}
            outerLightColor="#ffffff"
            outerLightSpread={1}
            outerLightBlur={10}
            outerLightOpacity={0}
            color="#ffffff"
            chromaticAberration={0}
            onHoverScale={1}
            saturation={100}
            brightness={100}>
          <div className="profile-card">
              <div className="profile-image-container">
                <a href="https://github.com/alvarov17" target="_blank" rel="noopener noreferrer">
                  <button>
                    <img className="profile-image" src={"./public/images/github.png"} />
                  </button>
                </a>
              </div>
              <div className="profile-info">
                <div className="profile-name">GitHub</div>
                <div className="profile-role">Check out my repositories!</div>
              </div>
          </div>
        </GlassCard>
        <GlassCard
            blur={4}
            width={350}
            height={350}
            padding="20px"
            distortion={80}
            flexibility={2}
            borderColor="#ffffff"
            borderSize={1}
            borderRadius={100}
            borderOpacity={0.4}
            backgroundColor="#000000ff"
            backgroundOpacity={0.1}
            innerLightColor="#ffffff"
            innerLightSpread={1}
            innerLightBlur={10}
            innerLightOpacity={0}
            outerLightColor="#ffffff"
            outerLightSpread={1}
            outerLightBlur={10}
            outerLightOpacity={0}
            color="#ffffff"
            chromaticAberration={0}
            onHoverScale={1}
            saturation={100}
            brightness={100}>
          <div className="profile-card">
              <div className="profile-image-container">
                <a href="https://devpost.com/alvaroventura17?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">
                  <button>
                    <img className="profile-image" src={"./public/images/devpost.jpg"} />
                  </button>
                </a>
              </div>
              <div className="profile-info">
                <div className="profile-name">DevPost</div>
                <div className="profile-role">Check Out My DevPost!</div>
              </div>
          </div>
        </GlassCard>

        <GlassCard
            blur={4}
            width={350}
            height={350}
            padding="20px"
            distortion={80}
            flexibility={2}
            borderColor="#ffffff"
            borderSize={1}
            borderRadius={100}
            borderOpacity={0.4}
            backgroundColor="#000000ff"
            backgroundOpacity={0.1}
            innerLightColor="#ffffff"
            innerLightSpread={1}
            innerLightBlur={10}
            innerLightOpacity={0}
            outerLightColor="#ffffff"
            outerLightSpread={1}
            outerLightBlur={10}
            outerLightOpacity={0}
            color="#ffffff"
            chromaticAberration={0}
            onHoverScale={1}
            saturation={100}
            brightness={100}>
          <div className="profile-card">
              <div className="profile-image-container">
                <a href="https://www.linkedin.com/in/alvaro-ventura-b34031253/" target="_blank" rel="noopener noreferrer">
                  <button>
                    <img className="profile-image" src={"./public/images/linkedin.png"} />
                  </button>
                </a>
              </div>
              <div className="profile-info">
                <div className="profile-name">LinkedIn</div>
                <div className="profile-role">Connect with me!</div>
              </div>
          </div>
        </GlassCard>
      </section>


    </div>
  );
}

export default Projects;