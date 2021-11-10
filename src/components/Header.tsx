import React, { useEffect, useState } from 'react';
import { HeaderContainer } from '../styles';

// import { Container } from './styles';
interface CustomInputProps {
  fieldName: string;
}
const Header: React.FC<CustomInputProps> = () => {
    const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsDark(true);
      } 
      else {
          setIsDark(false);
        }
    });

    // return () => {
    //   window.removeEventListener("scroll", setIsDark(true));
    // };
  }, []);

  return (
    <HeaderContainer dark={isDark}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </HeaderContainer>
  );
}

export default Header;