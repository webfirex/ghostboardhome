const GlowBg = () => {

  return (
    <div
      className="absolute top-0 left-0 w-full h-full animate-glowBg"
      style={{
        transition: 'opacity 0.150s ease-in-out',
        background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.77) -0.32%, #000 78.34%)'
      }}
    ></div>
  );
};

export default GlowBg;
