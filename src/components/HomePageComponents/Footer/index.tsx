import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import instagram from '../../../assets/icons/instagram.svg';
import facebook from '../../../assets/icons/facebook.svg';

export const FooterYourOrdesPage = () => {
    return (
        <FooterWrapper>
            <FooterBlock>
                <AboutBlock>
                    <TitleAboutBlock>About Fox Library</TitleAboutBlock>
                    <LinkList>
                        <Link to='*'><LinkFooter>About us</LinkFooter></Link>
                        <Link to='*'><LinkFooter>Privacy&Security</LinkFooter></Link>
                        <Link to='*'><LinkFooter>Contact us</LinkFooter></Link>
                    </LinkList>
                </AboutBlock>
                <HelpBlock>
                    <TitleHelpBlock>Help</TitleHelpBlock>
                    <LinkList>
                       <Link to='*'><LinkFooter>Help center</LinkFooter></Link> 
                       <Link to='*'><LinkFooter>FAQs</LinkFooter></Link>
                    </LinkList>
                </HelpBlock>
                <MyAccountBlock>
                    <TitleMyAccountBlock>My account</TitleMyAccountBlock>
                    <LinkList>
                    <Link to='/settings'><LinkFooter>Edit profile</LinkFooter></Link>
                    <Link to='/your-orders'><LinkFooter>My orders</LinkFooter></Link>
                    </LinkList>
                </MyAccountBlock>
                <ConnectedBlock>
                    <TitleSocialBlock>Stay connected</TitleSocialBlock>
                    <SocialBlock>
                    <a href='/'><InstagramImg src = { instagram }/></a>
                    <a href='/'><FacebookImg src = { facebook }/></a>
                    </SocialBlock>
                </ConnectedBlock>
            </FooterBlock>
        </FooterWrapper>
    );
};
export const LinkList = styled.ul`
    display: flex;
    flex-direction: column;
`
export const FooterWrapper = styled.div`
    width: auto;
    height: 200px;
    background: #D3EBF9;
    margin: 0 auto;
`
export const FooterBlock = styled.div`
    display: flex;
    align-items: center;
    width: 1230px;
    height: 200px;
    margin: 0 auto;
`
export const AboutBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 185px;
    height: 120px;

`
export const HelpBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 185px;
    height: 120px;
    margin-left: 24px;
`
export const MyAccountBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 185px;
    height: 120px;
    margin-left: 24px;
`
export const ConnectedBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 185px;
    height: 120px;
    margin-left: 442px;
`
export const SocialBlock = styled.div`
    display: flex;
    align-items: center;
`
export const TitleAboutBlock = styled.h3`
    margin-bottom: 20px;
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    color: #000000;`

export const TitleHelpBlock = styled.h3`

    margin-bottom: 20px;
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    color: #000000;`

export const TitleMyAccountBlock = styled.h3`
    margin-bottom: 20px;
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    color: #000000;`

export const TitleSocialBlock = styled.h3`
    margin-bottom: 20px;
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    color: #000000;`

export const LinkFooter = styled.a`
    margin-bottom: 8px;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #000000;
`
export const InstagramImg = styled.img`
    width: 26px;
    height: 26px;
`
export const FacebookImg = styled.img`
    width: 26px;
    height: 26px;
    margin-left: 16px;
`