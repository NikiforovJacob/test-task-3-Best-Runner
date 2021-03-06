import styled from '@emotion/styled';

export const StyledTable = styled.div`
  width: 450px;
  min-width: 380px;
  overflow: auto;
  margin: 50px 40px;
  @media screen and (min-width: 890px) {
    max-height: 90%;
  }
  @media screen and (max-width: 890px) {
    margin: 0px 0px 30px 0px;
    overflow: visible;
    width: 400px;
    min-width: 320px;
    font-size: 0.8em;
    height: auto;
  }
`;

export const StyledHeader = styled.div`
  font: bold 20px arial;
  height: 40px;
  margin: 0px auto;
  width: 130px;
`;

export const StyledTablePlug = styled.div`
  display: block:
  margin: auto;
  text-align: center;
`;

export const StyledSortButton = styled.button`
  border-radius: 4px;
  background-color: ${({ active }) => (active ? '#dee2e6' : '#ffffff')};
  border: 1px solid #dee2e6;
  padding: 0px;
  line-height: 18px;
  margin-left: 4px;
`;

export const StyledFilterCheckGroup = styled.div`
  position: absolute;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #dee2e6;
  padding: 10px;
  font-weight: normal;
`;

export const StyledDetails = styled.details`
  width: 20px;
  margin-left: 4px;
  display: inline-block;
`;

export const StyledSummary = styled.summary`
  list-style: none;
  ::-webkit-details-marker {
    display: none
  }
  width: 20px;
  margin: 0;
  text-align: center;  
  border-radius: 3px;
  border: 1px solid #dee2e6;
  background-color: ${({ active }) => (active ? '#dee2e6' : '#ffffff')};
  filter: ${({ active }) => (active ? 'grayscale(0)' : 'grayscale(0.95)')};
`;
