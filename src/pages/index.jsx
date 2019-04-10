import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Image } from 'rebass'
import { FaQuestionCircle } from 'react-icons/fa'

import { Flex, Box, Container } from 'components/Grid'
import { Link } from 'components/Link'
import Layout from 'components/layout/Home'
import SEO from 'components/SEO'
import Thumbnail from 'components/Profile/Thumbnail'
import styled, { themeGet } from 'util/style'

import { FluidImage } from 'components/Image'
import CBILogo from '../images/cbi_logo.png'
import FWCLogo from '../images/fwc_logo.png'
import PFLCCLogo from '../images/pflcc_logo.png'

const PullQuote = styled.p`
  margin: 3rem 2rem 0;
  color: ${themeGet('colors.grey.800')};
  font-size: 1.2em;
  font-style: italic;
`

const InvertedHeader = styled.h1`
  background-color: ${themeGet('colors.primary.900')};
  color: ${themeGet('colors.white')};
  padding: 2rem;
  margin: 4rem 0 2rem;
  text-align: center;
  border-radius: 1rem;
`

const Section = styled.section`
  margin-top: 2rem;

  &:not(:first-child) {
    padding-top: 2rem;
    border-top: 1px solid ${themeGet('colors.grey.200')};
  }
`

const SectionHeader = styled.h3``

const SectionBody = styled(Flex).attrs({ flexWrap: 'wrap' })`
  p {
    flex: 1;
    min-width: 200px;
  }
`

const StyledThumbnail = styled(Thumbnail)`
  flex: 0 0 auto;
  margin-right: 1rem;
`

const HelpSection = styled(Box)`
  margin: 6rem 0 4rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${themeGet('colors.primary.900')};
  color: ${themeGet('colors.white')};

  h2 {
    text-align: center;
    color: ${themeGet('colors.white')};
  }
  a {
    color: ${themeGet('colors.white')};
    text-decoration: underline;
  }
`
const HelpIcon = styled(FaQuestionCircle)`
  height: 4rem;
  width: 4rem;
  color: ${themeGet('colors.white')};
  margin: 0 2rem;
`

const CreditsSection = styled.section`
  font-size: 0.9em;
  color: ${themeGet('colors.grey.600')};

  h3 {
    text-align: center;
  }
`

const IndexPage = ({ data: { headerImage } }) => (
  <Layout>
    <SEO />

    <FluidImage
      image={headerImage.childImageSharp.fluid}
      height="40vh"
      minHeight="24rem"
      credits={{
        url: 'https://unsplash.com/photos/NqFwYtq93l0',
        author: 'Ray Hennessy',
      }}
    />

    <Container mx={[2, 2, 4, 'auto']}>
      <h1>Florida&apos;s unique wildlife are at risk from climate change.</h1>
      <PullQuote>
        Fish, wildlife and plants provide jobs, food, clean water, storm
        protection, health benefits and many other important ecosystems services
        that support people, communities and economics across the nation every
        day. The observed changes in the climate are already impacting these
        valuable resources and systems. These impacts are expected to increase
        with continued changes in the planet’s climate system. Action is needed
        now to help safeguard these natural resources and the communities and
        economies that depend on them.
        <br />
        -- NFWPCAS 2012
      </PullQuote>

      <p>
        <br />
        <br />
        This Climate Adaptation Explorer provides a starting point from which to
        address the predicted impacts of climate change on Florida’s fish,
        wildlife, and ecosystems.
        <br />
        <br />
        It is intended to serve as a resource in understanding potential impacts
        and to help in the development of adaptation strategies that could be
        implemented by the Florida Fish and Wildlife Conservation Commission
        (FWC) and other natural resource management agencies and groups. The
        goal is that this “guide” will provide the tools for better integration
        of adaptation actions and tasks into broader policies and programs,
        serving as a toolkit to help natural resource managers and others
        understand and address the current and future impacts of climate change
        on Florida’s ecosystems.
      </p>

      <InvertedHeader>Use this tool to learn more about:</InvertedHeader>

      <div>
        <Section>
          <SectionHeader>
            <Link to="/impacts">Climate Impacts in Florida</Link>
          </SectionHeader>
          <SectionBody>
            <StyledThumbnail id="118" />
            <p>
              Florida is expected to be more severely impacted by climate change
              over the next century that most other states in the U.S. Many
              species of fish and wildlife in Florida have limited ranges that
              are determined in part by climatic conditions and their survival
              could be threatened by future climatic shifts.
              <br />
              <br />
              Learn more about climate change, climate impacts to Florida&apos;s
              unique species and habitats, and more.{' '}
              <Link to="/impacts">Read more...</Link>
            </p>
          </SectionBody>
        </Section>

        <Section>
          <SectionHeader>
            <Link to="/species">Climate Impacts on Florida&apos;s Species</Link>
          </SectionHeader>
          <SectionBody>
            <StyledThumbnail id="217" />
            <p>
              <b>
                Climate change is expected to have profound impacts on
                Florida&apos;s species.
              </b>
              <br />
              Nearly one quarter of the approximately 1,200 species tracked by
              the Florida Natural Areas Inventory are projected to have at least
              50% of their range lost to a sea level rise of 1 m. Several
              keystone species are particularly vulnerable to the impacts of
              climate change and the loss of these species can have cascading
              impacts on natural communities and other species.
              <br />
              <br />
              Learn more about climate impacts for 138 species of concern in
              Florida. Each species has a detailed profile that includes
              information on life history, range, habitat use, climate change
              impacts, vulnerability, and adaptation strategies.{' '}
              <Link to="/species">Start exploring species profiles...</Link>
            </p>
          </SectionBody>
        </Section>

        <Section>
          <SectionHeader>
            <Link to="/habitats">
              Climate Impacts on Florida&apos;s Ecosystems and Habitats
            </Link>
          </SectionHeader>
          <SectionBody>
            <StyledThumbnail id="1310" />
            <p>
              Explore detailed profiles for 50 ecosystems, conservation assets,
              and habitats across Florida. Each habitat profile includes
              information on the location and defining characteristics of each
              habitat, climate impacts, vulnerability, and adaptation
              strategies.{' '}
              <Link to="/habitats">Start exploring habitat profiles...</Link>
            </p>
          </SectionBody>
        </Section>

        <Section>
          <SectionHeader>
            <Link to="/strategies">Climate Adaptation Strategies</Link>
          </SectionHeader>
          <SectionBody>
            <StyledThumbnail id="328" />
            <p>
              Find out what you can do to help plan for the future survival of
              Florida&apos;s unique species and habitats. Using an adaptation
              approach is vital to offset the increasing impacts from climate
              change combined with existing anthropogenic impacts to natural
              communities and species.{' '}
              <Link to="/strategies">Learn what you can do...</Link>
            </p>
          </SectionBody>
        </Section>
      </div>

      <HelpSection>
        <SectionHeader as="h2">Need help?</SectionHeader>
        <SectionBody justifyContent="space-between">
          <HelpIcon />
          <p>
            We are here to help you interpret and apply the information in this
            tool.
            <br />
            <br />
            Please <a href="mailto:adapt@myfwc.com">contact us</a> for
            assistance or to report issues.
          </p>
          <HelpIcon />
        </SectionBody>
      </HelpSection>

      <CreditsSection>
        <h3>Credits</h3>
        <p>
          Much of the content presented here is taken from{' '}
          <a
            href="https://myfwc.com/media/5864/adaptation-guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Guide to Climate Change Adaptation for Conservation: Resources and
            Tools for Climate Smart Management of Florida&apos;s Fish and
            Wildlife Species and Their Habitats
          </a>{' '}
          (Florida Fish and Wildlife Conservation Commission, 2016) and the{' '}
          <a
            href="http://floridaclimateinstitute.org/docs/climatebook/Ch12-Stys.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Climate Change Impacts on Florida&apos;s Biodiversity and
            Ecology&quot; chapter in &quot;Florida’s Climate: Changes,
            Variations and Impacts
          </a>{' '}
          (Florida Climate Institute, 2017)
        </p>
        <p>
          This application was created by{' '}
          <a href="mailto:bcward@consbio.org">Brendan C. Ward</a> at the&nbsp;
          <a
            href="https://consbio.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conservation Biology Institute
          </a>
          &nbsp; (CBI) in partnership with{' '}
          <a href="mailto:beth.stys@myfwc.com">Beth Stys</a>,{' '}
          <a href="mailto:Lily.SwanbrowBecker@myfwc.com">
            Lily Swanbrow Becker
          </a>
          , and <a href="mailto:Cherie.Keller@myfwc.com">Cherie Keller</a> with
          the{' '}
          <a
            href="http://peninsularfloridalcc.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peninsular Florida Landscape Conservation Cooperative
          </a>{' '}
          /{' '}
          <a
            href="https://myfwc.com/conservation/special-initiatives/climate-change/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Florida Fish and Wildlife Conservation Commission
          </a>
          .
        </p>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Image
            src={CBILogo}
            alt="CBI Logo"
            height={['40px', '50px', '64px']}
          />
          <Image src={FWCLogo} alt="FWC Logo" height={['70px', '100px']} />
          <Image
            src={PFLCCLogo}
            alt="PFLCC Logo"
            height={['40px', '50px', '64px']}
          />
        </Flex>
      </CreditsSection>
    </Container>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    headerImage: PropTypes.any.isRequired,
  }).isRequired,
}

export default IndexPage

// image from:  https://unsplash.com/photos/bxa3nqFOGmc
export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: file(
      relativePath: { eq: "ray-hennessy-1134702-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
