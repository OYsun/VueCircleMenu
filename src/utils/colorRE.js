const hexColors = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
const rgbColors = /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/g
export function isColors (value) {
  return hexColors.test(value) || rgbColors.test(value)
}