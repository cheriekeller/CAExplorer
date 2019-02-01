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

import { FluidImage } from 'components/Image'
import CBILogo from '../images/cbi_logo.png'
import FWCLogo from '../images/fwc_logo.png'
import PFLCCLogo from '../images/pflcc_logo.png'

const Logo = styled.img`
  height: 70px;
`

const IndexPage = ({ data: { headerImage } }) => (
  <Layout>
    <SEO />

    <FluidImage
      image={headerImage.childImageSharp.fluid}
      height="80vh"
      credits={{
        url: 'https://unsplash.com/photos/bxa3nqFOGmc',
        author: 'Nik Shuliahin',
      }}
    />

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
            <Link to="/impacts">Read more...</Link>
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
      <hr />
      <h3>How to use this tool?</h3>
      <p>TODO:content and organization</p>
      <h4>Species profiles</h4>
      <p>
        There are 139 individual species profiles included in this tool.
        <br />
        <br />
        Each species profile will include information on life history, range,
        habitat use, climate change impacts, vulnerability and adaptation
        strategies. A map interface will include potential habitat and impacts
        from sea level rise. Physical environmental parameters play a major
        direct or indirect role in determining species distribution, survival
        and ecosystem sustainability. Many species of fish and wildlife in
        Florida have limited ranges that are determined in part by climatic
        conditions and their survival could be threatened by future climatic
        shifts. This threat is greater for species with narrower tolerance
        ranges and species occupying habitats in areas where migration or
        relocation is challenging due to physical barriers. Limited
        movement/migration pathways include natural (e.g., rivers) and man-made
        (e.g., roads, land use) barriers. Species with a limited ability to
        disperse or having specialized habitat requirements, small populations
        or low genetic diversity are expected to be most at risk. Florida’s
        species have migrated and adapted to climate change in the past, but
        that ability is severely compromised now due largely to human
        modification of the landscape. Up to 76% of 236 surveyed species were
        deemed unlikely to be able to relocate inland in response to rising sea
        levels. Nearly one quarter of the approximately 1,200 species tracked by
        the Florida Natural Areas Inventory are projected to have at least 50%
        of their range lost to a sea level rise of 1 m. Several keystone species
        are particularly vulnerable to the impacts of climate change and the
        loss of these species can have cascading impacts on natural communities
        and other species. Species will be impacted by changes in temperature,
        precipitation, extreme events, sea level rise, and carbon dioxide
        concentration.
      </p>
      <h4>Adaptation strategies</h4>
      <p>
        <br />
        <br />
        Each species has example adaptation strategies provided on their species
        profile page. <Link to="/species">Read more...</Link>.
        <br />
        <br />
        Adaptation strategies for priority resources and habitats can be
        accessed from the associated profile pages.{' '}
        <Link to="/habitats">Read more...</Link>.
        <br />
        <br />
        There are many general adaptation strategies that address impacts across
        all ecosystems and habitats. Examples of these are presented as
        cross-cutting adaptation strategies. Additionally, examples of general
        strategies for addressing existing non-climate stressors are presented
        here. The majority of these strategies came directly from the National
        Fish Wildlife and Plants Climate Adaptation Strategy.{' '}
        <Link to="/strategies">Read more...</Link>
      </p>
      <hr />
      <h3>Need help?</h3>
      <p>
        We are here to help you interpret and apply the information in this
        tool.
        <br />
        <br />
        Please <a href="#">contact us</a> for assistance or to report issues.
      </p>
      <Divider />
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
        (Florida Fish and Wildlife Conservation Commission, 2016) and the{' '}
        <a
          href="http://floridaclimateinstitute.org/docs/climatebook/Ch12-Stys.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Climate Change Impacts on Florida&apos;s Biodiversity and
          Ecology&quot; chapter in &quot;Florida’s Climate: Changes, Variations
          and Impacts
        </a>{' '}
        (Florida Climate Institute, 2017)
      </p>
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
          href="https://myfwc.com/conservation/special-initiatives/climate-change/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Florida Fish and Wildlife Conservation Commission
        </a>
        .
      </p>
      <Flex justifyContent="space-between">
        <Logo src={CBILogo} alt="CBI Logo" />
        <Logo src={FWCLogo} alt="FWC Logo" style={{ height: 100 }} />
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
