import heroImg1 from '../../assests/images/heroImg1.jpg';
import heroImg2 from '../../assests/images/heroImg2.jpg';
import heroImg3 from '../../assests/images/heroImg3.jpg';

import {
  HeroContainer,
  HeroH1,
  HeroP,
  HeroBtn,
  HeroText,
} from './HeroElements';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroText>
        <HeroH1>Design Your Comfort Zone</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          ullam velit, eum non quisquam quis itaque rem omnis harum sint vitae
          sunt similique. Autem, animi? Beatae non, dolorum rerum nihil quos
          pariatur repellat error numquam.
        </HeroP>
        <HeroBtn to='/products'>Shop Now</HeroBtn>
      </HeroText>

      <div className='heroImageContainer'>
        <img className='heroImg-1' src={heroImg1} alt=' heroimage1' />
        <img className='heroImg-2' src={heroImg2} alt=' heroimage2' />
        <img className='heroImg-3' src={heroImg3} alt=' heroimage3' />
      </div>
    </HeroContainer>
  );
};

export default Hero;
