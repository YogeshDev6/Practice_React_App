function SiteFooterArticle() {
  return (
    <section style={{display:"flex",alignItems:"center",flexWrap:"wrap",padding:"40px"}}>
      <div style={{flex:"1 1 200px",textAlign:"center"}}>
        <img src="/footer-design.png" alt="Footer Design" style={{width:"300px"}} />
      </div>
      <div style={{flex:"2",paddingLeft:"28px"}}>
        <h3 style={{fontWeight:"bold",color:"#363535ff",fontSize:"30px"}}>How to design your site footer like we did</h3>
        <p style={{color:"#666",margin:"16px 0"}}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
           massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dicturnst. 
           Vivamus vehicula leo dul, at porta nisi facilisis finibus, in euismod augue vitae nisi ultricies, non aliquet urna tincidunt, integer in
            nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac,
           hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida..</p>
        <button style={{background:"#09a652",color:"#fff",padding:"8px 18px",border:"none",borderRadius:"3px"}}>Learn More</button>
      </div>
    </section>
  );
}
export default SiteFooterArticle;
