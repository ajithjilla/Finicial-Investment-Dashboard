import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';
import { AssetAllocation, PerformanceData } from '../data.model';
import { MarketTrendsComponent } from "../market-trends/market-trends.component";
import { TrackInvestmentsComponent } from "../track-investments/track-investments.component";

@Component({
  selector: 'app-portfolio-dashboard',
  standalone: true,
  imports: [CommonModule, NgxChartsModule, HttpClientModule, MarketTrendsComponent, TrackInvestmentsComponent],
  providers: [ApiService],
  templateUrl: './portfolio-dashboard.component.html',
  styleUrls: ['./portfolio-dashboard.component.scss'],
})
export class PortfolioDashboardComponent implements OnInit {
  assetAllocation: AssetAllocation[] = [];
  performanceData: PerformanceData[] = [];

  colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };

  constructor(private apiService: ApiService) {
    
  }

  ngOnInit(): void {
    this.fetchPortfolioData();

  }


  fetchPortfolioData() {
   this.apiService.getAssetAllocation().subscribe({
      next: (data) => {
        this.assetAllocation = data;
        console.log('Asset Allocation Data:', this.assetAllocation);
      },
      error: (err) => {
        console.error('Error fetching asset allocation data:', err);
      }
    });

    this.apiService.getPerformanceData().subscribe({
      next: (data) => {
        this.performanceData = data;
        console.log('Performance Data:', this.performanceData);
      },
      error: (err) => {
        console.error('Error fetching performance data:', err);
      }
    });
  }
}


