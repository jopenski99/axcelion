import { boot } from 'quasar/wrappers'
import L from 'leaflet'
import 'leaflet-css/dist/leaflet.css'


export default boot(async ({ app }) => {
  app.config.globalProperties.$L = L
})