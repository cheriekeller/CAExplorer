import React, { useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { setConfig } from 'react-hot-loader'
import { Text } from 'rebass'
import { FaCaretDown, FaCaretRight } from 'react-icons/fa'
import { fromJS } from 'immutable'

import { Flex } from 'components/Grid'
import Icon from 'components/elements/Icon'
import styled, { theme, themeGet } from 'util/style'
import { hasWindow, scrollIntoView } from 'util/dom'
import { Link } from 'components/Link'



const expandoColor = theme.colors.grey[500]
const expandoSize = '1rem'

export const CaretDown = styled(FaCaretDown).attrs({ color: expandoColor })`
  width: ${expandoSize};
  height: ${expandoSize};
`

export const CaretRight = styled(FaCaretRight).attrs({ color: expandoColor })`
  width: ${expandoSize};
  height: ${expandoSize};
`

export const Expander = styled(Flex)`
  cursor: pointer;
  margin-left: -${expandoSize};
  margin-top: -4px;
  opacity: 0.75;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  svg {
    display: block;
  }
`

export const StyledIcon = styled(Icon)`
  margin-right: 0.25em;
  cursor: pointer;
`

export const Label = styled.div`
  font-size: 0.9em;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${themeGet('colors.secondary.800')};
    `}

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      border-bottom-color: ${themeGet('colors.secondary.800')};
    `}
`


export const HoverContainer = styled.div`
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`


export const SidebarLink = styled(Link)`
  font-size: 0.9em;
  border-bottom: 2px solid transparent;
  color: ${themeGet('colors.primary.800')};

  &:hover {
    text-decoration: none;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${themeGet('colors.secondary.800')};
    `}

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      border-bottom-color: ${themeGet('colors.secondary.800')};
    `}
`