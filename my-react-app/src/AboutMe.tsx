import { GlassCard } from "react-glass-ui";
import Prism from "./components/Prism";
import "./AboutMe.css";
import VariableProximity from "./components/VariableProximity";
import { useRef } from "react";
import CircularGallery from "./components/CircularGallery";
import TiltedCard from "./components/TiltedCard";
import PixelTransition from "./components/PixelTransition";
import { useNavigate } from "react-router-dom";

function AboutMe() {
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
          }}
        >
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

      <section className="profile-section">
        <GlassCard
            blur={4}
            width={1000}
            height={500}
            padding="20px"
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
            {/* <div> */}
              <div className="profile-image-container">
                <img className="profile-image" src={"./public/images/portfolio_alv.jpeg"} />
              </div>
              <div className="profile-info">
                <div className="profile-name">Alvaro Ventura</div>
                <div className="profile-role">Software Engineering Student @ UCI</div>
              </div>
            {/* </div> */}

          </div>
        </GlassCard>
      </section>

      <section className="description-section">
        <GlassCard
            blur={4}
            width={1000}
            height={500}
            padding="20px"
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
            <div className="profile-info">
              <div className="pronunciation">Pronunciation: Al-Vuh-Row</div>
            </div>
            <div ref={containerRef} style={{position: 'relative', paddingTop: '90px'}}>
              <VariableProximity
                label={'Hello! I\'m Alvaro, and welcome to my portfolio! I\'m a Software Engineering student at UCI interested in web development, mobile development, and creating software to improve the world.'}
                className={'variable-proximity'}
                fromFontVariationSettings="'wght' 400, 'opsz' 30"
                toFontVariationSettings="'wght' 1000, 'opsz' 61"
                containerRef={containerRef as React.RefObject<HTMLElement>}
                radius={50}
                falloff="linear"/>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="enjoy-section">
        <GlassCard
            blur={4}
            width={1000}
            height={500}
            padding="20px"
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
            <div className="profile-info">
              <div className="pronunciation">Some Things I Enjoy</div>
            </div>
            <div style={{ height: '400px', position: 'relative', width: '100%' }}>
              <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}
              bend={0}
              borderRadius={0.1}
              scrollSpeed={2}
              scrollEase={0.05}/>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="concerts-section">
        <GlassCard
            blur={4}
            width={1000}
            height={500}
            padding="20px"
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
            <div className="profile-info">
              <div className="pronunciation">My Favorite Artists</div>
            </div>
            <div className="tilted-cards-container">
              <TiltedCard
                imageSrc="./public/images/loathe_band.jpeg"
                altText="Loathe - Band Photo"
                captionText="Loathe"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={4}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <p className="pill-box">
                    Loathe
                  </p>}/>

              <TiltedCard
                imageSrc="./images/joji.png"
                altText="Joji Photo"
                captionText="Joji"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={4}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <p className="pill-box">
                    Joji
                  </p>}/>

              <TiltedCard
                imageSrc="./images/whirr.jpeg"
                altText="Whirr - Band Photo"
                captionText="Whirr"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={4}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <p className="pill-box">
                    Whirr
                  </p>}/>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="jinx-section">
        <PixelTransition
          firstContent={
            <img
              src="./images/binx.jpeg"
              alt="default pixel transition content, my cat Jinx!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}/>}
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"}}>
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Jinx!</p>
            </div>
          }
          gridSize={8}
          pixelColor='#ffffff'
          once={false}
          animationStepDuration={0.4}
          className="custom-pixel-card"
          />
      </section>

    </div>
  );
}

export default AboutMe;