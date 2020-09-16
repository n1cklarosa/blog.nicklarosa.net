import styled from 'styled-components';
import variables from "../../../../content/variables";

export const PageWrapper = styled.div`
   
  margin-left: auto;
  margin-right: auto;
  margin: 0 auto;
  max-width: ${variables.wrapperWidth};
  width: 100%;
  padding: 0 1.45rem;
  box-sizing: border-box;

  &.wrapper {
    max-width: ${variables.wrapperWidth};
    margin: auto;
  }
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    
  }
  
`