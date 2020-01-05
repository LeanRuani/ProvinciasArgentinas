import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <img
        className="logo_header "
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Coat_of_arms_of_Argentina.svg/424px-Coat_of_arms_of_Argentina.svg.png"
      />
      <a class="p-2 navbar-brand font-weight-bold">Mapa Argentina</a>
      <div>
        <span class="navbar-toggler-icon"></span>
      </div>
    </nav>
  );
}

export default Header;
