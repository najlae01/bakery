import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../category';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  listProduct(){
    return this.httpClient.get('http://127.0.01/api/products');
  }

  getProduct(id: any){
    return this.httpClient.get('http://127.0.01/api/product/'+id);
  }

  addProduct(product: Product){
    return this.httpClient.post('http://127.0.01/api/addProduct', product);
  }

  updateProduct(id: any, product: Product){
    return this.httpClient.put('http://127.0.01/api/updateProduct/'+id, product);
  }

  deleteProduct(id: any){
    return this.httpClient.get('http://127.0.01/api/deleteProduct/'+id);
  }

  listCategory(){
    return this.httpClient.get('http://127.0.01/api/categories');
  }

  getCategory(id: any){
    return this.httpClient.get('http://127.0.01/api/category/'+id);
  }

  addCategory(category: Category){
    return this.httpClient.post('http://127.0.01/api/addCategory', category);
  }

  updateCategory(id: any, category: Category){
    return this.httpClient.put('http://127.0.01/api/updateCategory/'+id, category);
  }

  deleteCategory(id: any){
    return this.httpClient.get('http://127.0.01/api/deleteCategory/'+id);
  }

  listUser(){
    return this.httpClient.get('http://127.0.01/api/users');
  }

  getUser(id: any){
    return this.httpClient.get('http://127.0.01/api/user/'+id);
  }


}
