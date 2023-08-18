import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function SocialMediaIcons() {
  return (
    <div className="social-icons">
      <a href="https://www.instagram.com/peroterm">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.facebook.com/peroterm">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
