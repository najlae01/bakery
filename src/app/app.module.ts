import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/update-category/update-category.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ListOrderComponent } from './pages/list-order/list-order.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductByCategoryComponent } from './pages/product-by-category/product-by-category.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'product/:id', component: ProductPageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'order/:id', component: OrderPageComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'updateprofile/:id', component: UpdateProfileComponent},
  { path: 'categories', component: ListCategoryComponent},
  { path: 'addcategory', component: AddCategoryComponent},
  { path: 'updatecategory/:id', component: UpdateCategoryComponent},
  { path: 'products', component: ListProductComponent},
  { path: 'addproduct', component: AddProductComponent},
  { path: 'updateproduct/:id', component: UpdateProductComponent},
  { path: 'orders', component: ListOrderComponent},
  { path: 'users', component: ListUserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProductPageComponent,
    OrderPageComponent,
    ContactComponent,
    AboutComponent,
    ProfileComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ListProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    ListOrderComponent,
    ListUserComponent,
    UpdateProfileComponent,
    LoginComponent,
    RegisterComponent,
    ProductByCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
