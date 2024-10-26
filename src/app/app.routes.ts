import { Routes } from '@angular/router';
import { PortfolioDashboardComponent } from './portfolio-dashboard/portfolio-dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: PortfolioDashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'track-investments',
    loadComponent: () =>
      import('./track-investments/track-investments.component').then(
        (m) => m.TrackInvestmentsComponent
      ),
  },
  {
    path: 'asset',
    loadComponent: () =>
      import('./investment-form/investment-form.component').then(
        (m) => m.InvestmentFormComponent
      ),
  },
  {
    path: 'market-trends',
    loadComponent: () =>
      import('././market-trends/market-trends.component').then(
        (m) => m.MarketTrendsComponent
      ),
  },
];
