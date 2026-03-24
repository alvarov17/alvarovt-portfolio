import "./index.css"
import { useNavigate } from "react-router-dom"
import Orb from "@/components/Orb"
import "@/components/orb.css"
import FuzzyText from "./components/FuzzyText"
import 'react-magic-ui/dist/react-magic-ui.css'

function Home() {
    const nav = useNavigate();

    const navigate = () => {
        nav("/about", { viewTransition: true});
    }
return (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "black",
    }}>
    {/* Column: [Orb with name] on top, fuzzy text below */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px", // space between orb and fuzzy text
      }}>
      {/* Orb + centered SplitText */}
      <div
        style={{
          position: "relative",
          width: "600px",   // adjust to match your orb size
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Orb
          hue={341}
          hoverIntensity={0.2}
          rotateOnHover
          forceHoverState={false}/>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}>
        {/* stack name + button vertically */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px", // space between name and button
              pointerEvents: "auto", // allow clicking the button
            }}>
              <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover
                fontSize={'clamp(1rem, 3vw, 3rem)'}>
                Alvaro Ventura Tafolla
              </FuzzyText>
              <button style={{ padding: "16px 32px" }} onClick={() => navigate()}> <FuzzyText baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover
                fontSize={'clamp(1rem, 1vw, 1rem)'}>Click to Enter</FuzzyText></button>
              {/* <GlassButton className="glass-card"
                width={100}
                height={50}
                blur={5}
                distortion={50}>
                    <h1>Enter</h1>
                </GlassButton> */}
          </div>
        </div>
      </div>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover
        fontSize={'clamp(1rem, 2vw, 2rem)'}>
        "Cherish What is Finite"
      </FuzzyText>
    </div>
  </div>
)
}
export default Home;
