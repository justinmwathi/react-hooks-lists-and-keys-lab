import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const linksElements=links.map((link,index)=>{
return(
  <a href={`#${link}`} key={index}>{link}</a>
)
})
return <nav>
{linksElements }
  {/* display an <a> tag for each link here */}
  </nav>;
}

export default NavBar;
