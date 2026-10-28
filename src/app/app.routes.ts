import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'upload',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:12101/remoteEntry.js',
        exposedModule: './UploadForm',
      }).then((m) => m.UploadForm),
  },
  {
    path: 'download',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:12102/remoteEntry.js',
        exposedModule: './DocumentEditor',
      }).then((m) => m.DocumentManagement),
  },
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full',
  },
];
