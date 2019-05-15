import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Unser Outdoors',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Experience unique adventures with a local.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Why pay exorbitant fees tp a service when you can get a guided tour from a local!</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                We offer true adventure, a genuine and personal odyssey. We are passionate about making the outdoors more accessible
                to travelers who hear the call of the wild. We create memories and experiences not found on typical travel sites and
                beyond what traditional guiding services can offer.
              </h2>

              <p>
                We connect you with Locals, passionate about what they do and thrilled to share their curated experiences with you.
                Whether you want to hike, mountain bike, ski, climb, run or love beautiful nature photography, our Locals show you
                what “off the beaten path” truly means. They take you where only a Local can.
              </p>

              <p>
                Our platform is simple to use. It's easy to find the outdoor adventure fitting your experience level, interests, and schedule.
                Unser is on demand and on your time. We are ushering in a revolution in adventure travel!
              </p>

              <p>Unser is your portal to the outdoors, wherever adventure might take you.</p>

              <h3 className={css.subtitle}>Are you a local?</h3>

              <p>
                Unser offers you a good way to earn some extra cash! If you're an outdoor enthusiast and would like to share
                your passion for the outdoors, sign up and create an adventure that you can share. Giving a truly authentic experience
                to others who share your love of the outdoors is itself a fulfilling and unique experience.
              </p>

              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
