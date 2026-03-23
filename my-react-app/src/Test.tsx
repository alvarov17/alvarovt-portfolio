import "./Test.css";
import { GlassButton } from "react-glass-ui";

function Test() {
  return (
    <div className="test-container">
        <GlassButton className="glass-card"
        width={100}
        height={50}
        blur={5}
        distortion={50}>
            <h1>Test</h1>
        </GlassButton>
    </div>
  );
}

export default Test;