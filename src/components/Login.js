import styled from "styled-components";

const Login = (props) => {
    return(
        <Container>
          <Content>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' alt='error loading image' />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Drag with Disney+ subscription. As of 03/07/22,and The Disney Bundle will increase by 67 rupees.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt='error loading image' />
            </CTA>
            <BgImage />
          </Content>
       </Container>
    );
};

const Container = styled.section`
  overflow: hidden;
  dislay: flex;
  flex-direction: column;
  text-align: center;
  height:100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  paddding: 80px 40px;
  height: 100%
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;  
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;

`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover{
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95, 3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;


export default Login;