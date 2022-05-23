import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { ListOrderComponent } from './pages/list-order/list-order.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateCategoryComponent } from './pages/update-category/update-category.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';

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
  { path: 'updatecategory/:id', component: UpdateProductComponent},
  { path: 'orders', component: ListOrderComponent},
  { path: 'users', component: ListUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
