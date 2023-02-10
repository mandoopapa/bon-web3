import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return(
    <footer>
      <Container>
        <div style={{ textAlign:'right' }}>
          <a href='https://github.com/mandoopapa/bon-web3' target='_blank' rel='noreferrer'>Github</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;