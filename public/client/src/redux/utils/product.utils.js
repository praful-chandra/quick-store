export const getProducts = (oldProducts,payload)=>{
    
    if(payload.append){
        return {
            products : [...oldProducts,...payload.products.products],
            totalCount : payload.products.totalCount
        }
    }

    return{
        products : payload.products.products,
        totalCount : payload.products.totalCount
    }

}