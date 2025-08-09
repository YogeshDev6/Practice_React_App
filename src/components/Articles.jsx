const articles = [
  {
    title:"Creating Streamlined Safeguarding Processes with OneRen.",
    img:"/footer-pic1.jpeg",
  },
  {
    title:"What are your safeguarding responsibilities and how can you manage them?",
    img:"/footer-pic2.webp",
  },
  {
    title:"Revamping the Membership Model with Triathlon Australian companies.",
    img:"/footer-pic3.webp",
  },
];

function Articles() {
  return (
    <section style={{background:"#F4F8F9",padding:"60px 0"}}>
      <h3 style={{textAlign:"center",fontSize:"30px",marginBottom:"32px",color:"#363535ff",fontWeight:"600"}}>Caring is the new marketing</h3>
      <p style={{textAlign:"center",margin:"22px 0",color:"#5e5959ff"}}>The Nextcent blog is the best place to read about the latest membership insights,<br />
         ends and more. See who's joining the community,read about how our community <br />
         are increasing their membership income and lot's more.</p>
      <div style={{display:"flex",justifyContent:"center",gap:"25px",flexWrap:"wrap"}}>
        {articles.map((a,i) =>
          <div key={a} style={{background:"#fff",borderRadius:"7px",padding:"28px",minWidth:"230px",maxWidth:"310px",boxShadow:"0 1.5px 9px #e0e5eb"}}>
            <img src={a.img} alt={a.title} style={{width:"100%",height:"200px",objectFit:"cover",marginBottom:"13px"}} />
            <h4 style={{fontWeight:"bold",marginBottom:"6px",color:"#5e5959ff"}}>{a.title}</h4>
            <button style={{background:"#09a652",color:"#fff",padding:"8px 18px",border:"none",borderRadius:"3px"}}>Read More</button>
          </div>
        )}
      </div>
    </section>
  );
}
export default Articles;
