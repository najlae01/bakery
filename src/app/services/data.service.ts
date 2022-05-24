import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category';
import { Product } from '../product';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  listProduct(){
    return this.httpClient.get('http://127.0.0.1:8000/api/products');
  }

  getProduct(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/product/'+id);
  }

  addProduct(product: Product){
    return this.httpClient.post('http://127.0.0.1:8000/api/addProduct', product);
  }

  updateProduct(id: any, product: Product){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateProduct/'+id, product);
  }

  deleteProduct(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/deleteProduct/'+id);
  }

  listCategory(){
    return this.httpClient.get('http://127.0.0.1:8000/api/categories');
  }

  getCategory(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/category/'+id);
  }

  addCategory(category: Category){
    return this.httpClient.post('http://127.0.0.1:8000/api/addCategory', category);
  }

  updateCategory(id: any, category: Category){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateCategory/'+id, category);
  }

  deleteCategory(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/deleteCategory/'+id);
  }

  listUser(){
    return this.httpClient.get('http://127.0.0.1:8000/api/users');
  }

  getUser(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/user/'+id);
  }

  register(user: User){
    return this.httpClient.post('http://127.0.0.1:8000/api/register', user);
  }

  login(email: any, password:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/login', email, password);
  }

  user(){
    return this.httpClient.get('http://127.0.0.1:8000/api/user');
  }

  logout(){
    return this.httpClient.get('http://127.0.0.1:8000/api/logout');
  }

  productData = [
    {
      id:1,
      productName: "Panner Grilled Sandwich",
      productDetails: "Pan-fried masala paneer",
      productPrice: 20,
      productImg: "../../../assets/img/paneer-grilled-sandwich.jpg"
    },
    {
      id:2,
      productName: "Veggie Supreme",
      productDetails: "Healthy and Yummy Beans Creamy Veggie Salad.",
      productPrice: 30,
      productImg: "../../../assets/img/veggie-supreme.jpg"
    },
    {
      id:3,
      productName: "Avocado Brunch",
      productDetails: "Vegetarian Avocado Brunch with Avocado.",
      productPrice: 25,
      productImg: "../../../assets/img/avocado.jpg"
    },
    {
      id:4,
      productName: "Oreo Cupcakes",
      productDetails: "Oreo Cupcakes with cookies.",
      productPrice: 10,
      productImg: "../../../assets/img/oreo-cupcakes.jpg"
    },
  ];


}
