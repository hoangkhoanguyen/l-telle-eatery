export const ROUTES = {
  signIn: "/signin",
  home: "/",
  products: "/products",
  productApi: "/api/products",
  loginApi: "/api/login",
};

export class RouteGenerator {
  static productDetails(id: number) {
    return `${ROUTES.products}/${id}`;
  }
}
