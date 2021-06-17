import { html } from 'lit-html';
import '../index.js';

export default {
  title: 'FooterSlickteam',
  component: 'footer-slickteam',
  argTypes: {
    textCredit: { control: 'text' },
    hideTwitterIcon: { control: 'boolean' },
    urlTwitterIcon: { control: 'text' },
    hideFacebookIcon: { control: 'boolean' },
    urlFacebookIcon: { control: 'text' },
    hideLinkedinIcon: { control: 'boolean' },
    urlLinkedinIcon: { control: 'text' },
    hideGithubIcon: { control: 'boolean' },
    urlGithubIcon: { control: 'text' },
    hideMediumIcon: { control: 'boolean' },
    urlMediumIcon: { control: 'text' }
  },
};

function Template({
    textCredit = 'Slickteam ©2017 - 2021',
    hideTwitterIcon = false,
    urlTwitterIcon = 'https://twitter.com/SlickteamFR',
    hideFacebookIcon = false,
    urlFacebookIcon = 'https://www.facebook.com/SlickteamFR',
    hideLinkedinIcon = false,
    urlLinkedinIcon = 'https://www.linkedin.com/company/slickteam',
    hideGithubIcon = false,
    urlGithubIcon = 'https://github.com/Slickteam',
    hideMediumIcon = false,
    urlMediumIcon = 'https://medium.com/slickteam'
  }) {
  return html`
    <footer-slickteam
      .textCredit=${textCredit}
      .hideTwitterIcon=${hideTwitterIcon}
      .urlTwitterIcon=${urlTwitterIcon}
      .hideFacebookIcon=${hideFacebookIcon}
      .urlFacebookIcon=${urlFacebookIcon}
      .hideLinkedinIcon=${hideLinkedinIcon}
      .urlLinkedinIcon=${urlLinkedinIcon}
      .hideGithubIcon=${hideGithubIcon}
      .urlGithubIcon=${urlGithubIcon}
      .hideMediumIcon=${hideMediumIcon}
      .urlMediumIcon=${urlMediumIcon}
    ></footer-slickteam>
  `;
}

export const Regular = Template.bind({});
