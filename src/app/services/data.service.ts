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

  addProduct(product: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addProduct', product);
  }

  updateProduct(id: any, product: any){
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

  products(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/products/'+id);
  }

  addCategory(category: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addCategory', category);
  }

  updateCategory(id: any, category: any){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateCategory/'+id, category);
  }

  deleteCategory(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/deleteCategory/'+id);
  }

  listUser(){
    return this.httpClient.get('http://127.0.0.1:8000/api/users');
  }

  register(user: User){
    return this.httpClient.post('http://127.0.0.1:8000/api/register', user);
  }

  login(user: User){
    return this.httpClient.post('http://127.0.0.1:8000/api/login', user);
  }

  user(){
    return this.httpClient.get('http://127.0.0.1:8000/api/user');
  }

  logout(){
    return this.httpClient.get('http://127.0.0.1:8000/api/logout');
  }

  listGallery(){
    return this.httpClient.get('http://127.0.0.1:8000/api/galleries');
  }

  getGallery(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/gallery/'+id);
  }

  addGallery(gallery: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addGallery', gallery);
  }

  updateGallery(id: any, gallery: any){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateGallery/'+id, gallery);
  }

  deleteGallery(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/deleteGallery/'+id);
  }

  listChef(){
    return this.httpClient.get('http://127.0.0.1:8000/api/chefs');
  }

  getChef(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/chef/'+id);
  }

  addChef(chef: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addChef', chef);
  }

  updateChef(id: any, chef: any){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateChef/'+id, chef);
  }

  deleteChef(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/deleteChef/'+id);
  }

}
