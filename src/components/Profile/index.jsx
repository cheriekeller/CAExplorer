import Img from 'gatsby-image'

import { Flex } from 'components/Grid'
import styled, { themeGet } from 'util/style'

export const DONUTSIZE = 160
export const DONUTWIDTH = 20

export const Photo = styled(Img)`
  min-width: 290px;
  flex: 1 0 auto;

  img {
    margin-bottom: 0.5rem;
  }

  @media (min-width: ${themeGet('breakpoints.0')}) {
    flex-grow: 0 !important;
  }
`

export const PhotoCaption = styled.figcaption`
  font-size: smaller;
  margin-bottom: 3rem;
  text-align: right;
  font-weight: normal;
  margin-bottom: 0;
  font-size: small;
`

export const Map = styled(Img)`
  flex: 1 0 auto;

  &:after,
  &:before {
    position: absolute;
    opacity: 0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }

  &:before {
    position: absolute;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    content: 'Explore interactive map';
    width: 100%;
    color: #fff;
    z-index: 1;
    top: calc(50% - 1rem);
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4px 10px;
    text-align: center;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  &:hover {
    &:before,
    &:after {
      opacity: 1;
    }
  }

  img {
    margin-bottom: 0.5rem;
  }
`

export const Section = styled.section`
  padding-top: 2rem;
  margin-top: 2rem;

  &:not(:first-of-type) {
    border-top: 1px solid ${themeGet('colors.grey.200')};
  }
`

export const SectionHeader = styled.h2``

export const SubHeader = styled.h3`
  margin-bottom: 0.5rem;
`

export const MinorHeader = styled.h4``

export const VulnerabilityList = styled.ul`
  margin-left: 0;
  list-style: none;
  li + li {
    margin-top: 2rem;
  }

  li > div {
    margin-left: 2rem;
  }
`

export const DonutWrapper = styled(Flex)`
  height: 100%;
  @media (min-width: ${themeGet('breakpoints.3')}) {
  }
`

export const Subsection = styled.div`
  &:not(:first-child) {
    margin-top: 2rem;
  }
`

export const Note = styled.span`
  color: ${themeGet('colors.grey.500')};
  font-size: smaller;
`
