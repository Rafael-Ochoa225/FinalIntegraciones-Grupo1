import { Routes } from '@angular/router';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { PlatilloListComponent } from './component/platillo-list/platillo-list.component';
import { PlatilloCreateComponent } from './component/platillo-create/platillo-create.component';
import { PlatilloUpdateComponent } from './component/platillo-update/platillo-update.component';
import { CategoriaListComponent } from './component/categoria-list/categoria-list.component';
import { CategoriaUpdateComponent } from './component/categoria-update/categoria-update.component';
import { ClienteListComponent } from './component/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './component/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './component/cliente-update/cliente-update.component';
import { MeserosComponent } from './component/meseros/meseros.component';
import { MeserosUpdateComponent } from './component/meseros-update/meseros-update.component';
import { OrdenesComponent } from './component/ordenes/ordenes.component';
import { OrdenesCreateComponent } from './component/ordenes-create/ordenes-create.component';
import { OrdenesUpdateComponent } from './component/ordenes-update/ordenes-update.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';

export const routes: Routes = [
  { path: 'categoria-crear', component: CategoriaListComponent},
  { path: 'categoria', component: CategoriasComponent},
  { path: 'categoria-update', component: CategoriaUpdateComponent},
  {path: 'platillos', component: PlatilloListComponent},
  {path: 'platillos-create', component: PlatilloCreateComponent},
  {path: 'platillos-update', component: PlatilloUpdateComponent},
  {path: 'cliente', component: ClienteListComponent},
  {path: 'cliente-create', component: ClienteCreateComponent},
  {path: 'cliente-update', component: ClienteUpdateComponent},
  {path: 'meseros', component: LoginComponent},
  {path: 'meseros-list', component: MeserosComponent},
  {path: 'meseros-create', component: CreateUserComponent},
  {path: 'meseros-update', component: MeserosUpdateComponent},
  {path: 'ordenes', component: OrdenesComponent},
  {path: 'ordenes-create', component: OrdenesCreateComponent},
  {path: 'ordenes-update', component: OrdenesUpdateComponent},
  { path: '', redirectTo: '/categoria', pathMatch: 'full' }
];