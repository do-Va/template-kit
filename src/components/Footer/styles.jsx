import styled from 'styled-components';

export const Wrapper = styled.footer`
  height: 657px;
  width: 1440px;
  margin: 0 auto;

  padding: 180px 128px 73px;
`;

export const FooterHeader = styled.div`
  font-size: var(--fs-xl);
  line-height: var(--lh-xxl);
  color: var(--clr-primary-paragraph);

  & a {
    color: var(--clr-primary-paragraph);
  }

  display: flex;
  gap: 125px;
  margin-bottom: 63px;
`;

export const AddressSide = styled.div``;

export const Address = styled.p`
  max-width: 274px;
  margin-top: 20px;
`;

export const Phone = styled.p`
  margin: 14px 0;
`;

export const Mail = styled.p``;

export const FooterLogo = styled.img``;

export const LinksSide = styled.div``;

export const SupContainer = styled.ul`
  display: flex;
  gap: 100px;
`;

export const SupLink = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;

  p {
    margin-bottom: 5px;
    font-weight: var(--fw-bold);
  }
`;

export const SubContainer = styled.ul``;

export const SubLink = styled.li``;

export const FooterLine = styled.div`
  max-width: 1179px;
  height: 1px;
  background-color: var(--clr-menu-bg);
  margin-bottom: 84px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--fs-l);
  color: var(--clr-primary-paragraph);

  a {
    color: var(--clr-primary-paragraph);
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Social = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid var(--clr-menu-social-icon);
  padding: 5px;
`;

export const SocialIcon = styled.img``;

export const Copyright = styled.p``;

export const Legals = styled.p``;
