import "./Contact.css";
import Prism from "./components/Prism";
import { GlassCard } from "react-glass-ui";
import { useNavigate } from "react-router-dom";
import SplitText from "./components/SplitText";
import 'react-magic-ui/dist/react-magic-ui.css'
import { Input } from "react-magic-ui";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


function Contact() {

    const form = useRef<HTMLFormElement>(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (!form.current) return;
  
      emailjs
        .sendForm(
          "service_88xqnsg",
          "template_1vy7r0y",
          form.current,
          "LJQ6gziAAyOPWoH9l"
        )
        .then(
          () => {
            alert("Sent Successfully!");
            setName("");
            setEmail("");
            setMessage("");
          },
          () => {
            alert("An error occurred, please try again.");
          }
        );
    };

    const nav = useNavigate();
  
    const navProjects = () => {
      nav("/projects", { viewTransition: true});
    }
    
    const navContact = () => {
      nav("/contact", { viewTransition: true});
    }
    
    const navAbout = () => {
      nav("/about", { viewTransition: true});
    }

    const handleAnimationComplete = () => {
      console.log('All letters have animated!');
    };

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");



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
              <div className="button-text">About</div>
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
                <div className="button-text">Projects</div>
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
                <div className="button-text">Contact</div>
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
          zIndex: 0,}}>
        <div
          style={{
          position: "absolute",
          inset: 0,}}>
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
          text="Contact Me"
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

      {/* <section className="contact-section">
        <GlassCard
          blur={4}
          width={1000}
          height={600}
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
            <div style={{paddingTop: '10px'}}>
              <p>Name</p>
              <Input
                placeholder="Your Name"
                width={300}
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
            </div>
            <div style={{paddingTop: '10px'}}>
              <p>Email</p>
              <Input
                placeholder="joe@email.com"
                width={300}
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </div>
            <div style={{paddingTop: '10px'}}>
              <p>Message</p> 
              <textarea
                className="large-textarea"
                placeholder="Your message..."
                aria-label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div style={{paddingTop: '40px'}}>
              <button onClick={handleSubmit}>
                <GlassCard
                  blur={1}
                  width={100}
                  height={50}
                  padding="12px"
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
                    <div>Submit</div>
                  </div>
                </GlassCard>
              </button>
            </div>
          </div>
        </GlassCard>
      </section> */}

<section className="contact-section">
      <GlassCard
        blur={4}
        width={1000}
        height={600}
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
      >
        <form ref={form} onSubmit={sendEmail} className="profile-card">
          
          <div style={{ paddingTop: "10px" }}>
            <p>Name</p>
            <Input
              name="name" 
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={{ paddingTop: "10px" }}>
            <p>Email</p>
            <Input
              name="email" 
              placeholder="joe@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ paddingTop: "10px" }}>
            <p>Message</p>
            <textarea
              name="message" 
              className="large-textarea"
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div style={{ paddingTop: "40px" }}>
            <button type="submit">
              <GlassCard
                blur={1}
                width={100}
                height={50}
                padding="12px"
                distortion={80}
                flexibility={8}
                borderColor="#ffffff"
                borderSize={1}
                borderRadius={150}
                borderOpacity={0.4}
                backgroundColor="#000000ff"
                backgroundOpacity={0.4}
                color="#ffffff"
              >
                <div>Submit</div>
              </GlassCard>
            </button>
          </div>

        </form>
        {/* FORM END */}
      </GlassCard>
    </section>

      <div style={{fontSize: '30px', fontWeight: 'bold'}}>"To give anything less than your best is to sacrifice the gift." -Steve Prefontaine</div>
    </div>
  );
}

export default Contact;