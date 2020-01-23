import common from './common'

export const TYPE = '3DFACE'

export const process = (tuples) => {
  return tuples.reduce((entity, tuple) => {
    const type = tuple[0]
    const value = tuple[1]
    switch (type) {
      case 10:
        entity.firstCorner.x = value
        break
      case 20:
        entity.firstCorner.y = value
        break
      case 30:
        entity.firstCorner.z = value
        break
      case 11:
        entity.secondCorner.x = value
        break
      case 21:
        entity.secondCorner.y = value
        break
      case 31:
        entity.secondCorner.z = value
        break
      case 12:
        entity.thirdCorner.x = value
        break
      case 22:
        entity.thirdCorner.y = value
        break
      case 32:
        entity.thirdCorner.z = value
        break
      case 13:
        entity.fourthCorner.x = value
        break
      case 23:
        entity.fourthCorner.y = value
        break
      case 33:
        entity.fourthCorner.z = value
        break
      default:
        Object.assign(entity, common(type, value))
        break
    }
    return entity
  }, {
    type: TYPE,
    firstCorner: {},
    secondCorner: {},
    thirdCorner: {},
    fourthCorner: {}
  })
}

export default { TYPE, process }
