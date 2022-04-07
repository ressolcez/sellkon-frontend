import React from 'react'
import styled from "styled-components";


const Container = styled.div`
    margin-left: 530px;
    margin-right: 300px;
`

const Styledimg = styled.div`
    margin-left:15px;
`

function NavBar() {
  return (
    <Container>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="https://getbootstrap.com/docs/4.0/components/navbar/">
            <Styledimg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        </Styledimg>
        <h6>Telefony</h6>
        </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="https://getbootstrap.com/docs/4.0/components/navbar/">
        <Styledimg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
        </svg>
        </Styledimg>
        <h6>Laptopy</h6>
        </a>
      </li>
    </ul>
  </div>
</nav>
    </Container>
  )
}

export default NavBar