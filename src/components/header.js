import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="">
        <img
          className="logo_header "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Coat_of_arms_of_Argentina.svg/424px-Coat_of_arms_of_Argentina.svg.png"
        />
        <a class="p-2 navbar-brand font-weight-bold" href="#!">
          Argentina
        </a>
      </div>

      {/* <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-md-0">
          <li class="nav-item active">
            <a class="nav-link" href="#!">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">
              Link
            </a>
          </li>
        </ul>
        
      </div> */}
      <div>
        <span class="navbar-toggler-icon"></span>
      </div>
    </nav>
  );
}

export default Header;
