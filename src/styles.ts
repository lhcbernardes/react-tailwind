import styled from "@emotion/styled";
import { FC } from "react";
import tw from "twin.macro";

interface ComponentProps {
  className?: string;
  label?: string;
  dark?: boolean;
  background?: any;
  movie?: any;
}

interface ButtonProps {
  primary?: boolean;
  onClick?: any;
  props?: string;
  type?: any;
}

export const Main = styled.div`
  overflow: hidden;
`;

export const ModalCss = styled.div`
  ${tw`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
  background-color: rgba(0,0,0,0.4);
`;

export const ModalBox = styled.div`
  ${tw`relative w-auto my-8 mx-auto max-w-3xl`}
`;

export const ModalContent: FC<ComponentProps> = styled.div`
  ${tw`border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none`}
  ${(props:ComponentProps) => props === 'null' ?
   `background-color: coral;` : 
   `background: url('https://image.tmdb.org/t/p/w500${props.background}');`
   }
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* background: linear-gradient(to right, #111 30%, transparent 70%); */
`;

export const ModalEffect: FC<ComponentProps> = styled.div`
background: linear-gradient(to right, #111 15%, transparent 85%);
`;

export const ModalHeader = styled.div`
  ${tw`flex items-start justify-between p-5`}
`;

export const ModalTitle = styled.div`
  ${tw`text-5xl
    font-bold
    mb-4`}
`;

export const ModalButton = styled.div`
  ${tw`my-4 text-5xl text-white font-bold mb-1`}
`;

export const ModalBody = styled.div`
  ${tw`relative p-6 flex-auto`}
`;

export const ModalSpan = styled.div`
  ${tw`bg-transparent text-black ml-3 h-6 w-6 text-2xl block outline-none focus:outline-none cursor-pointer`}
`;

export const ModalP = styled.div`
  ${tw`my-4 text-black text-lg leading-relaxed`}
`;

export const ModalClose = styled.button`
  ${tw`p-2 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300 mr-3`}
`;

export const ModalFooter = styled.div`
  ${tw`flex items-center justify-end p-6`}
`;

export const ModalSave = styled.button`
  ${tw`text-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
`;

export const MoviesContainer = styled.div`
  ${tw`
    my-8
  `}
`;

export const Image = styled.img`
  ${tw`justify-center items-center flex w-auto mx-auto max-w-3xl`}
  position: absolute;
`;

export const MoviesTitle = styled.h2`
  ${tw`
      text-2xl
      font-bold
      uppercase
      mx-8
    `}
`;

export const MoviesRowLeft = styled.div`
  left: 0;
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 1;
  transition: all ease 0.5s;
`;

export const MoviesRowRight = styled.div`
  right: 0;
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 1;
  transition: all ease 0.5s;
`;

export const MoviesRow = styled.div`
  ${tw`
      flex
      overflow-x-auto
      mt-4
      p-4
    `}

  &::-webkit-scrollbar {
    display: none;
  }

  transition-duration: 1000ms;
`;

export const MoviesPoster = styled.img`
  ${tw`
    m-2
    w-40
    cursor-pointer
  `}

  // Scale the movie img when the user hovers on it.
  transition: all 0.2s;
  &:hover {
    transform: scale(1.09);
  }
`;

export const HeroContainer: FC<ComponentProps> = styled.div`
  ${tw`
    p-8
  `}
  height: 80vh;
  background-size: cover !important;

  ${(props: any) =>
    `background: url('https://image.tmdb.org/t/p/original${props.background}');`}
`;

export const HeroTitle = styled.h1`
  ${tw`
    text-5xl
    font-bold
    mb-4
  `}

  margin-top: 40vh;
`;

export const HeroDescription = styled.p`
  ${tw`
    font-medium
    text-lg
    mb-4
  `}
  width: 45rem;
  max-width: 80vw;
  line-height: 1.3;
`;

export const HeroButton: FC<ButtonProps> = styled.button`
${tw`font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
  background: ${(props: ButtonProps) => (props.primary ? "red" : "white")};
  color: ${(props: ButtonProps) => (props.primary ? "white" : "black")};
  margin-right: ${(props: ButtonProps) => (props.primary ? "1rem" : "")};
  /* font-weight: 700;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px; */
  &:hover {
    background: ${(props: ButtonProps) =>
      props.primary ? "#e74c3c" : "#ecf0f1"};
    color: ${(props: ButtonProps) => (props.primary ? "white" : "black")};
  }
`;

export const HeaderContainer: FC<ComponentProps> = styled.div`
  ${tw`
    flex
    justify-between
    p-4
    fixed
    top-0
    w-full
    transition-all
    z-10
  `}

  ${(props: any) => (props.dark ? tw`bg-black` : tw`bg-transparent`)}

  img {
    ${tw`
      h-10
      mr-7
    `}
  }
`;
