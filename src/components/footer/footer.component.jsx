import {
  FooterContainer,
  FooterBox,
  CompanyInfo,
  BrandName,
  BrandSlogan,
  OtherLinks,
  SocialIcons,
  LinkBox,
} from "./footer.styles";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <CompanyInfo>
          <BrandName>URBANSTYLE</BrandName>
          <BrandSlogan>Where fashion meets comfort</BrandSlogan>
          <SocialIcons>
            <a
              href="#"
              target="_blank"
              className="github_icon"
              rel="noreferrer"
            >
              <Github />
            </a>
            <a
              href="#/"
              target="_blank"
              className="instagram_icon"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="#"
              target="_blank"
              className="twitter_icon"
              rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className="linkedin_icon"
            >
              <Linkedin />
            </a>
          </SocialIcons>
        </CompanyInfo>
        <OtherLinks>
          <LinkBox>
            <h3>Company</h3>
            <a>About</a>
            <a>Contact Us</a>
            <a>Support</a>
            <a>Careers</a>
          </LinkBox>
          <LinkBox>
            <h3>Quick Links</h3>
            <a>Share Location</a>
            <a>Order Tracking</a>
            <a>Size Guide</a>
            <a>FAQs</a>
          </LinkBox>
          <LinkBox>
            <h3>Legal</h3>
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </LinkBox>
        </OtherLinks>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
