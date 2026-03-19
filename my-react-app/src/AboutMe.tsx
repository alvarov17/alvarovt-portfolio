import BubbleMenu from "./components/BubbleMenu";
import Prism from "./components/Prism";
import Shuffle from "./components/Shuffle";
import MagicBento from "./components/MagicBento";
import "./AboutMe.css";
import ProfileCard from "./components/ProfileCard";


const items = [
  { label: "About Me", href: "#", ariaLabel: "About Me", rotation: -8, hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" } },
  { label: "Projects", href: "#", ariaLabel: "Projects", rotation: 8, hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" } },
  { label: "Contact", href: "#", ariaLabel: "Contact", rotation: 8, hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" } },
];

function AboutMe() {
  return (
    
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
        background: "black",
        color: "white",
      }}>
        <BubbleMenu
            items={items}
            menuAriaLabel="Toggle navigation"
            menuBg="#ffffff"
            menuContentColor="#111111"
            useFixedPosition={false}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.12}
          />

        <div style={{ paddingTop: "35px" }}>
            <Shuffle
                text="About Me"
                shuffleDirection="right"
                duration={1.5}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                respectReducedMotion={true}
                loop={true}
                loopDelay={0}/>
        </div>
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
    </div>
  );
}

export default AboutMe;