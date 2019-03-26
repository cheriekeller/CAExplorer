// derived from: https://codepen.io/zeroskillz/pen/mPmENy

import React from 'react'
import PropTypes from 'prop-types'

import styled, { theme, themeGet } from 'util/style'
import { formatNumber } from 'util/format'

const Circle = styled.circle`
  fill: transparent;
`

const PercentLabel = styled.tspan`
  font-size: 30px;
  fill: ${themeGet('colors.grey.800')};
`

const Percent = styled.tspan`
  font-size: 20px;
  fill: ${themeGet('colors.grey.700')};
`

const Label = styled.tspan`
  font-size: 14px;
  fill: ${themeGet('colors.grey.700')};
`

const Donut = ({
  percent,
  percentLabel,
  label,
  color,
  size,
  donutWidth,
  offset,
  isPercent,
}) => {
  const halfsize = size * 0.5
  const radius = halfsize - donutWidth * 0.5
  const circumference = 2 * Math.PI * radius
  const rotateval = `rotate(${(offset / 100) * 365 -
    90} ${halfsize},${halfsize})`

  return (
    <svg width={`${size}px`} height={`${size}`} className="donutchart">
      <Circle
        r={radius}
        cx={halfsize}
        cy={halfsize}
        stroke={theme.colors.grey[200]}
        strokeWidth={donutWidth}
      />
      <Circle
        r={radius}
        cx={halfsize}
        cy={halfsize}
        transform={rotateval}
        stroke={color}
        strokeWidth={donutWidth}
        strokeDasharray={`${(percent * circumference) / 100} ${circumference}`}
      />
      <text
        className="donutchart-text"
        x={halfsize}
        y={halfsize}
        style={{
          textAnchor: 'middle',
          dominantBaseline: label ? '' : 'central',
        }}
      >
        <PercentLabel>
          {percentLabel !== null
            ? percentLabel
            : formatNumber(percent, percent < 1 ? 1 : 0)}
        </PercentLabel>

        {isPercent && <Percent>%</Percent>}

        {label && (
          <Label x={halfsize} y={halfsize + 20}>
            {label}
          </Label>
        )}
      </text>
    </svg>
  )
}

Donut.propTypes = {
  percent: PropTypes.number.isRequired, // percent, preferably integer
  percentLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string, // label placed below percent in middle of donut
  donutWidth: PropTypes.number, // width of donut
  color: PropTypes.string, // color of the indicator on the donut
  size: PropTypes.number, // width of the chart
  offset: PropTypes.number, // additional percentage to rotate the indicator (e.g., sum of percents of preceding charts in a series)
  isPercent: PropTypes.bool,
}

Donut.defaultProps = {
  percentLabel: null,
  label: null,
  donutWidth: 26,
  color: theme.colors.primary[300],
  size: 200,
  offset: 0,
  isPercent: true,
}

export default Donut
