import { folderPaths } from "@src/app/core/const/folder-paths"
import { PRODUCT_INTERFACE_DB } from "@src/app/core/const/products"


export const getProductImagePath = (product: PRODUCT_INTERFACE_DB) => {
  return `${folderPaths[product.category]}/${product.image}`
}
