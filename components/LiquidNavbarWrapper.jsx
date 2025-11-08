"use client "
const { default: LiquidEther } = require("@/app/components/LiquidEther/LiquidEther");
const { default: Navbar } = require("./NavBar");


const LiquidNavbarWrapper = () => {
  // Define a small LiquidEther instance to cover just the top of the page
  const navbarColors = [ '#32C76A', '#A8FFC1', '#4AD9E8', '#C2FF00', '#B19EEF' ];

  return (
    <div className="relative z-50">
      {/* 1. Liquid Background for the Navbar Area */}
      {/* Positioned absolutely/fixed at the top, but given a height that covers the navbar */}
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          // Set a small height, slightly larger than the navbar's height (e.g., 80px)
          height: '80px', 
          zIndex: 40 // Should be less than the Navbar's z-index (50), but more than any other background
        }}
      >
        <LiquidEther
          colors={navbarColors}
          // You might need to adjust LiquidEther props here to make it look good in a small area
          mouseForce={0}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={1.5}
        />
      </div>

      {/* 2. Your actual Navbar component */}
      <Navbar /> 
    </div>
  );
};

export default LiquidNavbarWrapper