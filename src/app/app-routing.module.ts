import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { AddChefComponent } from './pages/add-chef/add-chef.component';
import { AddGalleryComponent } from './pages/add-gallery/add-gallery.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { ChefsComponent } from './pages/chefs/chefs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleriesComponent } from './pages/galleries/galleries.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { ListChefComponent } from './pages/list-chef/list-chef.component';
import { ListGalleryComponent } from './pages/list-gallery/list-gallery.component';
import { ListOrderComponent } from './pages/list-order/list-order.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuPerCategoryComponent } from './pages/menu-per-category/menu-per-category.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ProductByCategoryComponent } from './pages/product-by-category/product-by-category.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { UpdateCategoryComponent } from './pages/update-category/update-category.component';
import { UpdateChefComponent } from './pages/update-chef/update-chef.component';
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
  { path: 'cart', component: CartComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'updateprofile/:id', component: UpdateProfileComponent},
  { path: 'categories', component: ListCategoryComponent},
  { path: 'addcategory', component: AddCategoryComponent},
  { path: 'updatecategory/:id', component: UpdateCategoryComponent},
  { path: 'products/:id', component: ProductByCategoryComponent},
  { path: 'products', component: ListProductComponent},
  { path: 'addproduct', component: AddProductComponent},
  { path: 'updateproduct/:id', component: UpdateProductComponent},
  { path: 'cheflist', component: ListChefComponent},
  { path: 'addchef', component: AddChefComponent},
  { path: 'updatechef/:id', component: UpdateChefComponent},
  { path: 'chefs', component: ChefsComponent},
  { path: 'gallery', component: GalleriesComponent},
  { path: 'gallerylist', component: ListGalleryComponent},
  { path: 'addgallery', component: AddGalleryComponent},
  { path: 'orders', component: ListOrderComponent},
  { path: 'users', component: ListUserComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'testimonials', component: TestimonialsComponent},
  { path: 'menu/:id', component: MenuPerCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
