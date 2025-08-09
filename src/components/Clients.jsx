const logos = ["c1.png"  ,   "c2.png"  ,     "c3.png"   ,     "c4.png"   ,    "c5.png"];

function Clients() {
  return (
    <section style={{padding:"40px 0",textAlign:"center"}}>
      <h3 style={{fontWeight:"600",marginBottom:"32px",color:"#363535ff",fontSize:"30px"}}>Our Clients</h3>
      <p style={{fontWeight:"500",marginBottom:"32px",color:"#5e5959ff"}}>We have been working with some fortune 500+ clients</p>
      <div style={{display:"flex",justifyContent:"center",gap:"45px",flexWrap:"wrap"}}>
        {logos.map((logo, i) =>
          <img src={"/" + logo} alt={`Client ${i+1}`} style={{height:"36px",opacity:0.8}} key={i} />
        )}
      </div>
    </section>
  );
}
export default Clients;
