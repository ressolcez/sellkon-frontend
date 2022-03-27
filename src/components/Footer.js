import React from 'react'
import styled from 'styled-components'


const FooterCont = styled.div`
    margin-top: 50px;
    min-height: 100px;
    color: black;
`

const ImgCont = styled.div`
    display:block;
`

const Img = styled.img`
    max-width: 50px;
`

function Footer() {
  return (
    <main>
        <FooterCont>
        <h5>Znajdź nas w Socjal media</h5>
        <ImgCont>
             <a href="https://www.facebook.com/konrad.chrabaszcz.773/">   
            <Img src = "https://partner-bud.pl/wp-content/uploads/2016/11/facebook-icon-preview-1-300x300.png" />
            </a>
            <a>
            <Img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" />
            </a>
            <a>
            <Img src = " https://logowik.com/content/uploads/images/instagram-icon.jpg" />
            </a>
        </ImgCont>
        </FooterCont>
    </main>
  )
}

export default Footer