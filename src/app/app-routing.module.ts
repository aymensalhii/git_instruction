import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutPage } from './layout/main-layout/main-layout.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
      }
    ]
    
  },
  {
    path: 'auth/login',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
      }
    ]
    
  },
  {
    path: 'favorites',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
      }
    ]
    
  },
  {
    path: 'saloons',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/saloons/saloons.module').then( m => m.SaloonsPageModule)
      }
    ]
    
  },
  {
    path: 'main-layout',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/main-layout/main-layout.module').then( m => m.MainLayoutPageModule)
      }
    ]
    
  },
  {
    path: 'bookings',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
      }
    ]
    
  },
  {
    path: 'requests',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/requests/requests.module').then( m => m.RequestsPageModule)
      }
    ]
    
  },
  {
    path: 'statistics',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/statistics/statistics.module').then( m => m.StatisticsPageModule)
      }
    ]
    
  },
  {
    path: 'reports',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/reports/reports.module').then( m => m.ReportsPageModule)
      }
    ]
    
  },
  {
    path: 'notifs',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/notifs/notifs.module').then( m => m.NotifsPageModule)
      }
    ]
    
  },
  {
    path: 'messages',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
      }
    ]
    
  },
  {
    path: 'profile',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
      }
    ]
    
  },
  {
    path: 'settings',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
      }
    ]
    
  },
  {
    path: 'build-apps',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/build-apps/build-apps.module').then( m => m.BuildAppsPageModule)
      }
    ]
    
  },
  {
    path: 'our-apps',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/our-apps/our-apps.module').then( m => m.OurAppsPageModule)
      }
    ]
    
  },
  {
    path: 'help',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
      }
    ]
    
  },
  {
    path: 'offers',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/offers/offers.module').then( m => m.OffersPageModule)
      }
    ]
    
  },
  {
    path: 'shop',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/shop/shop.module').then( m => m.ShopPageModule)
      }
    ]
    
  },
  {
    path: 'profile-completion',
    loadChildren: () => import('./pages/profile-completion/profile-completion.module').then( m => m.ProfileCompletionPageModule)
  },
  {
    path: 'gmap',
    loadChildren: () => import('./gmap/gmap.module').then( m => m.GmapPageModule)
  }
  /*{
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
