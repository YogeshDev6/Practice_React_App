const features = [
  { 
    title: "Membership Organisations",
    desc: "Our memberships management software provide full automation of membership renewals and payments.",
    img:"/articles1.png",
  },
  { 
    
    title: "National Associations",
    desc: "Our nwmhosp management software provides full automation of Imenshenship renewals and payments.",
    img:"/articles2.png",
  },
  { 
    
    title: "Clubs and Groups",
    desc: "Our membership management coftwane provides tul automation of membershis renewals and payments.",
    img:"/articles3.png",
  },
];

function Features() {
  return (
    <section style={{padding:"60px 0",background:"#F4F8F9",textAlign:"center"}}>
    
      <h3 style={{fontWeight:"800px",margin:"0 0 16px",color:"#363535ff",fontSize:"30px"}}>Manage your entire community in a single system</h3>
      <p style={{color:"#606060",marginBottom:"26px"}}>Everything you need to organize, engage, and grow efficiently.</p>
      <div style={{display:"flex",justifyContent:"center",gap:"18px",flexWrap:"wrap"}}>
        {features.map((f, i) =>
          <div key={i} style={{background:"#fff",borderRadius:"6px",padding:"30px",boxShadow:"0 2px 10px #edf2f4",minWidth:"220px",maxWidth:"260px",margin:"0 5px"}}>
          <img src={f.img} alt={f.title} style={{width:"90%",height:"100px",objectFit:"cover",marginBottom:"13px"}}/>
            <h4 style={{color:"#09a652",fontWeight:"bold",marginBottom:"10px"}}>{f.title}</h4>
            <p style={{color:"#6c6c6c"}}>{f.desc}</p>
          </div>
        )}
      </div>
    </section>
  );
}
export default Features;
