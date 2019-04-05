import { instance as api } from './index'
import routes from '../routes'

/**
 * Get all the products
 */
const index = () => {
  return api.get(routes.products.index)
    .then(response => response.data)
}

 export default {
  index
}
