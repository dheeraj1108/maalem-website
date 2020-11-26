import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Heading from 'common/src/components/Heading';
import Logo from 'common/src/components/UIElements/Logo';
import LogoImage from 'common/src/assets/image/maalem/logo.png';
import Container from 'common/src/components/UI/Container';
import SocialProfile from '../SocialProfile';
import FooterWrapper, {
  List,
  ListItem,
  SelectWrapper,
  SocialList,
} from './footer.style';
import AppImage from 'common/src/assets/image/maalem/footer/footerapp.svg';
import PlaystoreImage from 'common/src/assets/image/maalem/footer/footerplay.svg';
// Social Icons
import { Icon } from 'react-icons-kit';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { github } from 'react-icons-kit/fa/github';
const Footer = ({ row, col, colOne, colTwo, titleStyle }) => {
  const Data = {
    rideJson: {
      menuWidget: [
        {
          id: 1,
          title: ['My Account', 'حسابي'],
          menuItems: [
            {
              id: 1,
              text: ['Login', 'تسجيل الدخول'],
              url: 'http://122.166.172.240:3000/customer/signin?lang=',
            },
            {
              id: 2,
              text: ['Customer', 'الزبون'],
              url: 'http://122.166.172.240:3000/customer/signin?lang=',
            },
            {
              id: 3,
              text: ['Agent', 'وكيل'],
              url: 'http://122.166.172.240:3000/agent/signin?lang=',
            },
            {
              id: 4,
              text: ['Admin', 'مشرف'],
              url: 'http://122.166.172.240:3000/business/signin?lang=',
            },
            {
              id: 5,
              text: ['SME', 'الشركات الصغيرة والمتوسطة'],
              url: 'http://122.166.172.240:3000/agent/sme/signin?lang=',
            },
          ],
        },
        {
          id: 2,
          title: ['Quick Links', 'روابط سريعة'],
          menuItems: [
            /* {
              id: 1,
              text: ['Home', 'الصفحة الرئيسية'],
              url: '#'
            }, 
            {
              id: 2,
              text: ['About Us', 'معلومات عنا'],
              url: '#HowtoApplay'
            },*/
            {
              id: 1,
              text: ['Product', 'المنتج'],
              url: '#features',
            },
            {
              id: 2,
              text: ['How To Apply', 'كيفية التقديم'],
              url: '#HowtoApplay',
            },
            {
              id: 3,
              text: ['Apply Now', 'قدم الآن'],
              url: 'http://122.166.172.240:3000/customer/signup?lang=',
            },
          ],
        },
      ],
      Language_NAMES: [
        {
          label: 'English',
          value: 'eng',
        },
        {
          label: 'Chinese',
          value: 'chinese',
        },
        {
          label: 'Indian',
          value: 'indian',
        },
      ],
      SOCIAL_PROFILES: [
        {
          icon: 'flaticon-facebook-logo',
          url:
            'https://www.facebook.com/pages/category/Financial-Service/Maalem-Financing-104818407547676/',
        },
        {
          icon: 'flaticon-twitter-logo-silhouette',
          url: 'https://twitter.com/maalemfinancing?lang=en',
        },
        {
          icon: 'flaticon-instagram',
          url: 'https://www.instagram.com/maalemfinancing/',
        },
        {
          icon: 'flaticon-linkedin',
          url: 'https://www.linkedin.com/company/maalem-financing-company',
        },
      ],
    },
  };
  // Local state
  const [langIndex, setLangIndex] = React.useState(1); // default en
  // On page mount with DOM
  React.useEffect(() => {
    setLangIndex(window.sessionStorage.getItem('lang') !== 'en' ? 0 : 1);
    document.getElementById('faq').style.display = 'none';
    document.getElementById('aboutUs').style.display = 'none';
  }, []);

  // Hidden Page
  const showFaq = () => {
    const faqSection = document.getElementById('faq');
    faqSection.style.display = faqSection && 'block';
  };

  const showAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutUs');
    aboutUsSection.style.display = aboutUsSection && 'block';
    /* if (aboutUsSection.style.display === 'none') {
      aboutUsSection.style.display = 'block';
    } else {
      window.location.href = '#aboutUs';
    } */
  };

  // Toggle change language.
  const toggleLanguage = () => {
    const selectedLang = window.sessionStorage.getItem('lang');
    const footerElement = document.querySelector('#footerSection');
    if (selectedLang === 'en') {
      footerElement.style.direction = 'ltr';
      window.sessionStorage.setItem('lang', 'ar');
      setLangIndex(0);
    } else {
      footerElement.style.direction = 'rtl';
      window.sessionStorage.setItem('lang', 'en');
      setLangIndex(1);
    }
  };

  return (
    <FooterWrapper id="footerSection">
      <Container noGutter mobileGutter width="1200px">
        <Box className="row" {...row}>
          <Box {...colOne}>
            {/* <Heading
              content={langIndex === 0 ? 'Language' : 'لغة'}
              {...titleStyle}
            />
            <SelectWrapper>
              <select
                aria-label="language switcher"
                onChange={toggleLanguage}
                value={langIndex === 1 ? 'ar' : 'en'}
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>
              <svg
                style={{ right: langIndex === 1 ? '65px' : '10px' }}
                xmlns="http://www.w3.org/2000/svg"
                width="21.994"
                height="21.991"
                viewBox="0 0 21.994 21.991"
              >
                <path
                  d="M424,10280a10.931,10.931,0,0,1,2.3-6.712,11.244,11.244,0,0,1,1.255-1.372,10.982,10.982,0,0,1,14.843-.046c.173.157.338.322.5.49l.17.179a11.007,11.007,0,0,1,2.061,3.187v0l.058.023.034.186h-.008a10.921,10.921,0,0,1,.726,2.993c.031.315.049.636.052.956,0,.039,0,.075,0,.113a11.22,11.22,0,0,1-.17,1.922c-.039.22-.085.437-.137.653A11,11,0,0,1,424,10280Zm2.071-4.7-.362.439v.315a10.088,10.088,0,0,0,17.116,10.31h-.333v-.672l-.385-.516v-.809l-.294-.292-.026-.336.375-.713-.71-1.25.085-.85-.638-.064-.235-.235h-.429l-.217.2h-.754l-.026.066h-.418l-.963-1.1.008-.857.158-.057.059-.328h-.225l-.093-.344,1.116-.806v-.57l.545-.3.222.023h.449l.351-.19,1.131-.086v.579l.894.225.176.126h.165v-.314l.514-.052.491.366h.806l.054-.052c-.08-.271-.17-.537-.271-.8l-.527.008-.263-.289-.052-.465-.269.147-.145.568-.39-.416-.018-.393-.377-.323-.139-.14h-.436l.139.391.524.294.093.1-.114.057.005.311-.256.105-.22-.049-.137-.191.356.019.1-.13-.788-.531-.059-.226-.32.287-.325-.064-.493.641-.1.253-.315.028-.467,0-.279-.132-.083-.556.1-.266.475-.1.519.1.062-.284-.22-.055.075-.446.522-.083.367-.514.377-.064.338.049h.127l-.07-.483-.413.168-.145-.361-.24-.033-.046-.248.2-.215.465-.181.121-.214a10.063,10.063,0,0,0-12.593-.592l.509,0,.227.127.429.093.034.165.679.026-.093-.217-.6-.019.142-.132-.049-.16H429.8l.594-.444h.571l.269.37.444.025.269-.261.2.1-.369.361-.486.008a1.813,1.813,0,0,1,.041.352l.62-.016.067-.168.426-.025.052-.251-.251-.044.083-.225.194-.057.669.031-.369.336.059.261.387.057-.026-.468.369-.193.653-.075.948.419v.361l.3.075-.152.286h-.426l-.127.325-.979-.229.77-.411-.294-.247-.661.082-.059.06h0l-.01.016-.189.2-.315.028.023.157.111.044-.005.052-.256.039-.018.147-.245.013-.044-.295-.442.132-.9.527.1.369.251.165.5.07v.57l.232-.036.214-.447.535-.17V10273l.3-.225.718.168-.049.452h.191l.529-.259.026.6.385.232-.018.354-.367.126.023.116.447.2-.01.243-.129.013v-.008l-.56-.173-.026-.181.165-.111v-.165l-.178-.044-.044.152-.307.047-.031-.011v.016l-.108.016-.085-.176-.1-.044h-.22l-.1.08v.181l.191.064.183.026-.041.018-.168.188-.075-.093-.165-.044-.447.421.059.047-.661.366-.62.646-.041.286-.622.408-.31.313.034.62-.426-.2,0-.364-1.191,0-.617.31-.269.493-.1.393.173.38.486.06.772-.517.067.256-.235.444.586.1.059.906.8.137.511-.589.622.124.217.3.6-.036.016-.176.328.158.367.581.638.008.235.41.034.5.705.269.888.008.261.426.393.127-.075.354-.431.548-.127,1.214-.39.31-.579-.018-.194.336.145.63-.63.806-.2.369-.6.287-.4.06-.015.167.276.078-.034.181-.248.24.152.188.3.008-.016.232-.08.225-.026.184.442.372-.059.193-.6-.011-.6-.521-.467-.818.065-.791-.351-.47.142-.795-.209-.06v-1.729s-.586-.441-.62-.441-.31-.077-.31-.077l-.059-.328-.764-.956.077-.343.023-.561.529-.372-.077-.628-.77-.059-.6-.687-.429-.116-.276-.049.034-.253-.351-.05v.143l-.881-.22-.354-.54.142-.266-.558-.813-.093-.594h-.227l.075.578.387.6-.044.232-.325-.049-.4-.685v-.8l-.418-.2v-.573c.046-.11.1-.22.146-.327-.051.108-.1.217-.148.327v-.315l.362-.439.421-.509-.018-.184.015.184-.418.509Zm18.714,2.42.072.135Zm-.865-1.779.2-.025.106,0-.106,0Zm-12.784-.149h.323l.145-.145v0l-.147.145h-.32Zm-.6-.24.178.093.426-.6-.426.6Zm1.317.025h.32v0Zm-.511-.2.189-.033.152-.1v0l-.152.1-.189.033Zm.535-.269.124.1.121-.1-.121.1Zm.245,0-.152-.1h0Zm-.61-.145.207-.052Zm-.937-.064.227.064h.6v0h-.6Zm.741-.145h0v-.119h0Zm-1.312-.757.163.336Zm11.9-.2.044.145.692,0,.2-.294-.2.294-.692,0ZM430.5,10273.927Zm-1.433-.986.1.111.5-.031s.008-.095.008-.159c0,.064-.008.159-.008.159l-.5.031Zm0-.39h.5l.1-.14v0l-.1.14Zm4.347,2.673.093-.119.127.1-.021.146-.209.019Zm.465.031h-.067v-.15h.287l.062-.152.114,0,.132.025-.057.116-.142.013-.028.14-.111.069-.178.014C433.886,10275.285,433.881,10275.255,433.881,10275.255Zm5.891-.8.034-.349.245-.052-.021-.163-.23-.142-.158-.108v-.16l.093-.143.331-.067.083.4.178.284.116.137.214.08-.2.24-.39.039Zm-.674-.135v-.209l.2-.323.271-.064.194.083-.018.22-.413.294Z"
                  transform="translate(-424.002 -10269.002)"
                />
              </svg>
            </SelectWrapper> */}
            <Heading
              content={
                langIndex === 0 ? 'Download The App' : 'قم بتنزيل التطبيق'
              }
              {...titleStyle}
              className="appDownload"
            />
            <Box className="imageWrapper">
              <a href="https://play.google.com/store/apps/details?id=com.maalem">
                <Image src={AppImage} alt="App Image" />
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.maalem">
                <Image src={PlaystoreImage} alt="PlaystoreImage Image" />
              </a>
            </Box>
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {Data.rideJson.menuWidget.map((widget) => (
              <Box className="col" {...col} key={widget.id}>
                <Heading
                  content={langIndex === 0 ? widget.title[0] : widget.title[1]}
                  {...titleStyle}
                />
                <List
                  style={{
                    direction: langIndex === 1 ? 'ltr' : 'rtl',
                    textAlign: langIndex === 1 ? 'right' : 'left',
                  }}
                >
                  {widget.title[0] === 'Quick Links' && (
                    <ListItem key={`list__item-faq`}>
                      <a
                        href="#aboutUs"
                        className="ListItem"
                        onClick={showAboutUs}
                      >
                        {langIndex === 0 ? 'About Us' : 'معلومات عنا'}
                      </a>
                    </ListItem>
                  )}
                  {widget.menuItems.map((item) => (
                    <ListItem key={`list__item-${item.id}`}>
                      <a
                        href={item.url}
                        className="ListItem"
                        onClick={item.calFunc && item.calFunc}
                      >
                        {item.text[langIndex]}
                      </a>
                    </ListItem>
                  ))}

                  {widget.title[0] === 'Quick Links' && (
                    <ListItem key={`list__item-faq`}>
                      <a href="#faq" className="ListItem" onClick={showFaq}>
                        {langIndex === 0 ? 'Faq' : 'التعليمات'}
                      </a>
                    </ListItem>
                  )}
                </List>
              </Box>
            ))}
            <Box className="col" {...col} key="add">
              <Logo
                className="logo"
                href="https://maalem.com.sa/en"
                logoSrc={LogoImage}
                title="App Classic"
              />
              {/* <Heading content="Contact Us" {...titleStyle} /> */}
              <List>
                <ListItem key="address">
                  <a href="#" className="ListItem">
                    AR: +077 1456 5924 <br />
                    IN: +361-541-4241 <br />
                    maalem@maalem.com
                  </a>
                </ListItem>
              </List>
            </Box>
          </Box>
          {/* End of footer List column */}
        </Box>
        <Box className="row copyRight" {...row}>
          <Text
            content="Copyright 2020 &copy; Maalem Financing."
            className="copyRightText"
          />
          <SocialProfile
            className="footer_social"
            items={Data.rideJson.SOCIAL_PROFILES}
            iconSize={18}
          />
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-4px',
    mr: '-4px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '33%', '33%'],
    mb: ['30px', 0],
    pl: ['0px', 0],
    pr: ['0px', '0px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '67%', '67%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', 1 / 3, 1 / 3, 1 / 3],
    pl: [0, '15px'],
    pr: [0, '15px'],
    mb: ['30px', '30px'],
  },
  // widget title default style
  titleStyle: {
    color: '#FFFFFF',
    fontSize: ['18px', '20px', '20px', '24px', '24px'],
    fontWeight: '600',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#FFFFFF',
    fontSize: '16px',
    mb: '12px',
    fontWeight: '600',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
};

export default Footer;
