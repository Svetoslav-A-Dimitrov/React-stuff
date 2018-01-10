/**
 * Created by sve on 2.11.2017 г..
 */
let PokemonValidationFunc = (
  name,
  image,
  info,

) => {

  let validName = (() => {
    if (name !== '') {
      return true
    }
    return false
  })()

  let validImage = (() => {
    if (image !== '') {
      return true
    }
    return false
  })()

  let validInfo = (() => {
    if (info !== '') {
      return true
    }
    return false
  })()

  return {
    validName,
    validImage,
    validInfo
  }
}

export default PokemonValidationFunc
