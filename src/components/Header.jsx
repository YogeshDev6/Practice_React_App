function Header() {
  return (
    <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 40px",boxShadow:"0 1px 8px #eee"}}>
      <div style={{display:"flex",alignItems:"center"}}>
        <img src="check.jpg" alt="check" style={{width:"90%",height:"60px",objectFit:"cover",marginBottom:"13px"}}/>
        <span style={{fontWeight:"bold",fontSize:"20px",color:"#111311ff"}}>CHECKMATE</span>
      </div>
      <nav style={{display:"flex",gap:"25px",fontSize:"20px"}}>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Community</a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
        <button style={{background:"#4CAF50",color:"#fff",border:"none",borderRadius:"5px",padding:"8px 18px"}}>Register Now</button>
      </nav>
    </header>
  );
}
export default Header;
