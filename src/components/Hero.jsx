function Hero() {
  return (
    <section style={{display:"flex",flexWrap:"wrap",alignItems:"center",padding:"60px 40px",background:"#F8FAFB"}}>
      <div style={{flex:"1 1 300px",minWidth:"280px"}}>
        <h1 style={{fontSize:"32px",fontWeight:600,marginBottom:"18px",color:"#4b4e4cff"}}>Lessons and insights <br /><span style={{color:"#09a652"}}>from 8 years</span></h1>
        <p style={{color:"#555",marginBottom:"28px"}}>Where to grow your business as a photographer: site or social media?</p>
        <button style={{background:"#09a652",color:"#fff",padding:"10px 40px",fontWeight:"bold",border:"none",borderRadius:"3px"}}>Get Started</button>
      </div>
      <div style={{flex:"1 1 300px",textAlign:"center"}}>
        <img src="/hero-illustration.png.png" alt="Hero" style={{maxWidth:"350px",width:"100%"}} />
      </div>
    </section>
  );
}
export default Hero;
