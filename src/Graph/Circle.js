import Graph from '../Graph'
import Cesium from 'cesium/Source/Cesium.js'
import Ellipse from './Ellipse.js'
import * as mu from '../mapUtil.js'
import Polygon from './Polygon.js'
import * as turf from '@turf/turf'

export default class Circle extends Polygon {
  maxPointNum = 2
  ent

  calcuteShape (points, time) {
    if (points.length === 1) {
      return []
    }
    let ctls = points.map((p) => {
      return mu.cartesian2turfPoint(p.position.getValue(time))
    })
    let radius = turf.distance(ctls[0], ctls[1], {units: 'kilometers'})
    let geometry = turf.circle(ctls[0], radius, {units: 'kilometers'})
    return mu.turfGeometry2Cartesians(geometry)
  }
}