import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkMap = links.map((link) => {
    return <a key={link} href={"#" + link}>{link}</a>;
  });

  return <nav>{linkMap}</nav>;
}

export default NavBar;
