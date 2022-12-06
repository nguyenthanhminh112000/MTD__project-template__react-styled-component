import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  padding: 10px 150px;
  background-color: ${(props) => props.theme.headerBackgroundColor};
`;

export const HeaderTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const HeaderBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderLogo = styled.p`
  color: ${(props) => props.theme.textWhite};
  font-size: 3rem;
`;

export const HeaderSearchInput = styled.input``;

export const HeaderSearchButton = styled.button``;

export const HeaderRightContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderQuickLink = styled(Link)`
  text-decoration: none;
  & p:hover {
    color: ${(props) => props.theme.textWhiteHover};
    pointer: cursor;
  }
`;
export const HeaderQuickLinkLogo = styled(Link)`
  text-decoration: none;
  & p:hover {
    pointer: cursor;
  }
`;

export const HeaderText = styled.p`
  color: ${(props) => props.theme.textWhite};
  font-size: ${(props) => props.theme.fontSizePrimary};
`;
