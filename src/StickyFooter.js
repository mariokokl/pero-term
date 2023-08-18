import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import SocialMediaIcons from './SocialMediaIcons';

export default function App() {
  return (
    <MDBFooter bgColor='gray' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: '#c6c6c6' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='/'>
          Peroterm
        </a>
        <div>e-mail: <a href='mailto:petartunic91@gmail.com' className='text-dark'>petartunic91@gmail.com</a></div>
        <div> Posjetite nas na društvenim mrežama</div>
        <SocialMediaIcons />
      </div>
    </MDBFooter>
  );
}