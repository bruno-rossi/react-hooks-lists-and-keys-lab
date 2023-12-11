import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const handleLinks = links.map(link => {
    return <a href={"#" + link} key={link}>{link}</a>
  })

  return <nav>{handleLinks}</nav>;
}

export default NavBar;
