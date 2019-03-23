/* eslint-disable max-len, no-underscore-dangle */
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import styled, { themeGet } from 'util/style'

import L from 'leaflet'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet-basemaps'
import 'leaflet-zoombox'
import 'leaflet-geonames'
import 'leaflet-html-legend'

import 'leaflet/dist/leaflet.css'
import 'leaflet-basemaps/L.Control.Basemaps.css'
import 'leaflet-zoombox/L.Control.ZoomBox.css'
import 'leaflet-geonames/L.Control.Geonames.css'
import 'leaflet-html-legend/dist/L.Control.HtmlLegend.css'

// TODO: only load leaflet if window is defined!

// Make leaflet icons work properly from webpack / react context
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl })

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  .leaflet-container {
    font: inherit;
  }

  .leaflet-geonames-search form {
    margin-bottom: 0;
  }

  .leaflet-html-legend {
    h4 {
      font-size: 0.9rem;

      &:hover {
        background: none;
      }
      .legend-caret {
        margin-right: 0.5rem;
      }
      span {
        color: ${themeGet('colors.grey.800')};
      }
    }
    .legend-row {
      label {
        font-size: 0.8rem;
        font-weight: normal;
        color: ${themeGet('colors.grey.600')};
      }
      & + .legend-row {
        margin-top: 0.5em;
      }
    }
    .legend-row .symbol {
      width: 20px;
      height: 20px;
    }
    .slider-label {
      display: none;
    }
    input {
      width: 170px !important;
    }
    .icon-eye,
    .icon-eye-slash {
      opacity: 0.5;
      width: 0.9rem;
      height: 0.9rem;
      background-size: contain;
    }
    .icon-eye-slash {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6bTAgMGgyNHYyNEgwem0wIDBoMjR2MjRIMHptMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDdjMi43NiAwIDUgMi4yNCA1IDUgMCAuNjUtLjEzIDEuMjYtLjM2IDEuODNsMi45MiAyLjkyYzEuNTEtMS4yNiAyLjctMi44OSAzLjQzLTQuNzUtMS43My00LjM5LTYtNy41LTExLTcuNS0xLjQgMC0yLjc0LjI1LTMuOTguN2wyLjE2IDIuMTZDMTAuNzQgNy4xMyAxMS4zNSA3IDEyIDd6TTIgNC4yN2wyLjI4IDIuMjguNDYuNDZDMy4wOCA4LjMgMS43OCAxMC4wMiAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjUgMS41NSAwIDMuMDMtLjMgNC4zOC0uODRsLjQyLjQyTDE5LjczIDIyIDIxIDIwLjczIDMuMjcgMyAyIDQuMjd6TTcuNTMgOS44bDEuNTUgMS41NWMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjY2IDEuMzQgMyAzIDMgLjIyIDAgLjQ0LS4wMy42NS0uMDhsMS41NSAxLjU1Yy0uNjcuMzMtMS40MS41My0yLjIuNTMtMi43NiAwLTUtMi4yNC01LTUgMC0uNzkuMi0xLjUzLjUzLTIuMnptNC4zMS0uNzhsMy4xNSAzLjE1LjAyLS4xNmMwLTEuNjYtMS4zNC0zLTMtM2wtLjE3LjAxeiIvPjwvc3ZnPg==);
    }
    .icon-eye {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDQuNUM3IDQuNSAyLjczIDcuNjEgMSAxMmMxLjczIDQuMzkgNiA3LjUgMTEgNy41czkuMjctMy4xMSAxMS03LjVjLTEuNzMtNC4zOS02LTcuNS0xMS03LjV6TTEyIDE3Yy0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDUtMi4yNCA1LTUgNXptMC04Yy0xLjY2IDAtMyAxLjM0LTMgM3MxLjM0IDMgMyAzIDMtMS4zNCAzLTMtMS4zNC0zLTMtM3oiLz48L3N2Zz4=);
    }
  }
`

// Map configurationParameters
const config = {
  mapParams: {
    minZoom: 3,
    maxZoom: 15,
    zoomControl: false,
    scrollwheel: false,
    zIndex: 1,
  },
  basemaps: [
    L.tileLayer(
      '//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
        maxZoom: 16,
        subdomains: ['server', 'services'],
        label: 'ESRI Gray',
      }
    ),
    L.tileLayer(
      'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        label: 'ESRI Imagery',
      }
    ),
  ],
}

const Map = ({ id, bounds: [west, south, east, north] }) => {
  const layerBounds = [[south, west], [north, east]]

  const mapNode = useRef(null)
  let map = null

  useEffect(() => {
    map = L.map(mapNode.current, config.mapParams)
    map.fitBounds(layerBounds)
    window.map = map

    // add habitat
    const habitatLayer = L.tileLayer(
      `https://tiles.climateadaptationexplorer.org/services/${id}/tiles/{z}/{x}/{y}.png`,
      {
        maxNativeZoom: 14,
        bounds: layerBounds,
        zIndex: 2,
      }
    )
    map.addLayer(habitatLayer)

    L.control.zoom({ position: 'topright' }).addTo(map)
    L.control.zoomBox({ position: 'topright' }).addTo(map)

    L.control
      .geonames({
        position: 'topright',
        username: 'databasin.cbi',
        maxresults: 10,
        bbox: {
          west: -88.615723,
          east: -79.519043,
          north: 31.54109,
          south: 24.006326,
        },
      })
      .addTo(map)

    L.control
      .basemaps({
        basemaps: config.basemaps,
        tileX: 4,
        tileY: 6,
        tileZ: 4,
        position: 'bottomleft',
      })
      .addTo(map)

    L.control
      .htmllegend({
        position: 'bottomright',
        legends: [
          {
            name: 'Sea Level Rise Impacts',
            layer: habitatLayer,
            elements: [
              {
                label: 'Impacted by 1 meter',
                html: null,
                style: { 'background-color': '#0D47A1' },
              },
              {
                label: 'Impacted by 3 meters',
                html: null,
                style: { 'background-color': '#90CAF9' },
              },
              {
                label: 'Not impacted by up to 3 meters',
                html: null,
                style: { 'background-color': '#388E3C' },
              },
            ],
          },
        ],
        defaultOpacity: 1,
        visibleIcon: 'icon icon-eye',
        hiddenIcon: 'icon icon-eye-slash',
        toggleIcon: null,
        updateOpacity: (layer, opacity) => {
          layer.setOpacity(opacity)
        },
      })
      .addTo(map)

    return () => {
      map.remove()
    }
  })

  return (
    <Wrapper>
      <div ref={mapNode} style={{ width: '100%', height: '100%' }} />
    </Wrapper>
  )
}

Map.propTypes = {
  id: PropTypes.string.isRequired,
  bounds: PropTypes.arrayOf(PropTypes.number).isRequired,
}

Map.defaultProps = {}

export default Map
