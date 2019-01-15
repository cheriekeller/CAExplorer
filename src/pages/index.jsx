import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import styled from 'util/style'
import { Flex, Container } from 'components/Grid'
import { Link } from 'components/Link'
import Divider from 'components/elements/Divider'
import InfoBox from 'components/elements/InfoBox'
import Layout from 'components/layout/Home'
import SEO from 'components/SEO'

import ImageBanner from 'components/ImageBanner'

import CBILogo from '../images/cbi_logo.png'
import PFLCCLogo from '../images/pflcc_logo.png'

const Logo = styled.img`
  height: 70px;
`

const BannerContainer = styled.div`
  margin-top: 4.5rem;
`

const IndexPage = ({ data: { headerImage } }) => (
  <Layout>
    <SEO />

    <BannerContainer>
      <ImageBanner headerImage={headerImage.childImageSharp.fluid} />
    </BannerContainer>

    <Container mx={[2, 2, 4, 'auto']}>
      <h1>Florida&apos;s unique wildlife are at risk from climate change.</h1>
      <p>
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
        <br />
        <br />
      </p>

      <h2>
        This tool can help, by empowering you with the latest available
        information about:
      </h2>

      <Flex flexWrap="wrap">
        <InfoBox>
          <h3>Climate Impacts</h3>
          <p>
            TODO: Stuff about climate impacts
            <br />
            <br />
            <Link to="/background">Read more...</Link>
          </p>
        </InfoBox>
        <InfoBox>
          <h3>Species</h3>
          <p>
            TODO: Stuff about species
            <br />
            <br />
            <Link to="/species">Read more...</Link>
          </p>
        </InfoBox>
        <InfoBox>
          <h3>Habitats</h3>
          <p>
            TODO: Stuff about habitats
            <br />
            <br />
            <Link to="/habitats">Read more...</Link>
          </p>
        </InfoBox>
      </Flex>

      <p>
        <br />
        <br />
        The Climate Adaptation Explorer provides a starting point from which to
        address the predicted impacts of climate change on Florida’s fish,
        wildlife, and ecosystems. It is intended to serve as a resource in
        understanding potential impacts and to help in the development of
        adaptation strategies that could be implemented by the Florida Fish and
        Wildlife Conservation Commission (FWC) and other natural resource
        management agencies and groups. The goal is that this “guide” will
        provide the tools for better integration of adaptation actions and tasks
        into broader policies and programs, serving as a toolkit to help natural
        resource managers and others understand and address the current and
        future impacts of climate change on Florida’s ecosystems.
        <br />
        <br />
      </p>

      <h3>Credits</h3>
      <p>
        Much of the content presented here is taken from{' '}
        <a
          href="http://www.myfwc.com/media/3794360/adaptation-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Guide to Climate Change Adaptation for Conservation: Resources and
          Tools for Climate Smart Management of Florida&apos;s Fish and Wildlife
          Species and Their Habitats
        </a>{' '}
        (Florida Fish and Wildlife Commission, 2016) and the{' '}
        <a
          href="http://floridaclimateinstitute.org/docs/climatebook/Ch12-Stys.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Climate Change Impacts on Florida&apos;s Biodiversity and
          Ecology&quot; chapter in &quot;Florida’s Climate: Changes, Variations
          and Impacts
        </a>{' '}
        (Florida Climate Insitute, 2017)
      </p>

      <Divider />

      <p>
        This application was created by{' '}
        <a href="mailto:bcward@consbio.org">Brendan C. Ward</a> at the&nbsp;
        <a href="https://consbio.org" target="_blank" rel="noopener noreferrer">
          Conservation Biology Institute
        </a>
        &nbsp; (CBI) in partnership with{' '}
        <a href="mailto:beth.stys@myfwc.com">Beth Stys</a>,{' '}
        <a href="mailto:Lily.SwanbrowBecker@myfwc.com">Lily Swanbrow Becker</a>,
        and <a href="mailto:Cherie.Keller@myfwc.com">Cherie Keller</a> with the{' '}
        <a
          href="http://peninsularfloridalcc.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peninsular Florida Landscape Conservation Cooperative
        </a>{' '}
        /{' '}
        <a
          href="https://myfwc.com/about/inside-fwc/fwri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Florida Fish and Wildlife Commission Fish and Wildlife Research
          Institute
        </a>
        .
      </p>
      <Flex justifyContent="space-between">
        <Logo src={CBILogo} alt="CBI Logo" />
        <Logo src={PFLCCLogo} alt="PFLCC Logo" />
      </Flex>

      <p />
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
      relativePath: { eq: "nik-shuliahin-621547-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
