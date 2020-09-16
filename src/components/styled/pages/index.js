import styled from "styled-components"
import variables from "../../../../content/variables"

export const Title = styled.h1`
  font-size: 2rem;
`

export const TileTitle = styled.h2`
  font-size: 25px;
  @media screen and (min-width: ${variables.breakpointPhone}) {
    font-size: 32px;
  }
  color:${variables.primary};
  margin-top:0;
`

export const PageTitle = styled.h1`
  font-size: 35px;
  text-align:center;
  margin-top:0;
  @media screen and (min-width: ${variables.breakpointPhone}) {
    font-size: 65px;
  }
  &.text-left{
    text-align:left; 
  }
`
export const TypeWriterCss = styled.h2`
  font-size: 32px;
  text-align:left;
  line-height:1.1em;
  min-height:130px;
  @media screen and (min-width: ${variables.breakpointPhone}) {
    font-size: 70px; 
     min-height:310px;
  }
`

export const PageLeader = styled.div`
  display: flex;
  background: ${variables.backgroundGradient};
  color: white;
  padding-top: 100px;
  padding-bottom: 40px;
  transform: translateZ(0);
  transition: color 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-bottom:80px;
  @media screen and (min-width: ${variables.breakpointPhone}) {
    padding-top: 160px;
    padding-bottom: 90px; 
  }
  &.no-margin{
    margin-bottom:0px;
  }
`



export const StyledBurger = styled.button`
  // position: absolute;
  // top: 5%;
  // right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  z-index:9;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  // @media (max-width: 576px) {
      width: 100%;
    // }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`