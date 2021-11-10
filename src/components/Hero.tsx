import React from 'react';
import { HeroContainer, HeroTitle, HeroDescription, HeroButton } from '../styles';

interface Movie{
  movie?: any;
}

const Hero: React.FC<Movie> = ({movie}) => {
    return (
    movie ? <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton primary>Play</HeroButton>
      <HeroButton>My List</HeroButton>
    </HeroContainer>   : null    
      );
}

export default Hero;