import FImagePreview from './f-image-preview'
import fInputTag from './f-input-tag'

const coms = [
  FImagePreview,
  fInputTag
]

const install = (Vue) => {
  coms.forEach(com => {
    Vue.component(com.name, com)
  })
}
export default install
