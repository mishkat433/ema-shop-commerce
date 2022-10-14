import { getFromLocalDb } from "../utilities/fakedb";

export const Loader = async () => {
    // load data
    const ProductsData = await fetch("products.json");
    const products = await ProductsData.json();

    // cart data
    const saveCart = getFromLocalDb();
    const initialCart = [];
    for (const id in saveCart) {

        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct)
        }
    }

    return { products, initialCart }
}