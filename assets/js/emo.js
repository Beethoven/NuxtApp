const successEmo = ['ðĪ', 'ðĪ', 'ðĪ', 'ð', 'ð', 'ðŠ', 'ð', 'ðĪ', 'ðĨ°', 'ð']
const errorEmo = ['ðĪ·ââïļ', 'ðĪĶââïļ', 'ðĪ', 'ðē']
const greetEmo = ['ðĪ', 'ðĪ', 'ðĪ', 'âïļ', 'ð', 'ðĪ', 'ð', 'ð', 'ðĪŠ']

function random (icons) {
  return icons[Math.floor(Math.random() * icons.length)]
}

export {
  successEmo,
  errorEmo,
  greetEmo,
  random
}
