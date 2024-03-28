import { Customer } from "../customer/customer"
import { Product } from "../product/product"

export type Purchase = {
    customer: Customer,
    purchaseItem: PurchaseItem[]
}

export type PurchaseItem = {
    product: Product,
    amount: number,
    price: number
}