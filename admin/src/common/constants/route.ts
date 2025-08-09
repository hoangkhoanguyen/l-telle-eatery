export const ROUTES = {
    signIn:'/signin',
    home:'/',
    products:'/products',
    productApi:'/api/products',

}

export class RouteGenerator {
    static productDetails (id:number){
        return `${ROUTES.products}/${id}`
    }
}