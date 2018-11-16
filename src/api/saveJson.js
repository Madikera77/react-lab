import catalogue from '../datas/catalogue'

const loadJson = () => {
  const json = window.localStorage.getItem('SiiConsultants')
  return (!json || JSON.parse(json).length === 0) ? catalogue : JSON.parse(json)
}

const saveJson = (json) => {
  if (!json) return

  window.localStorage.setItem(
    'SiiConsultants',
    JSON.stringify(json)
  )
}

export { loadJson, saveJson }