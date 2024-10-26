import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { investmentTracker } from '../data.model';



@Component({
  selector: 'app-track-investments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-investments.component.html',
  styleUrls: ['./track-investments.component.scss']
})
export class TrackInvestmentsComponent {
  investments: investmentTracker[] = [
    { id: 1, name: 'Stock X', amount: 5000, profit: 150 },
    { id: 2, name: 'Bond Y', amount: 3000, profit: 50 },
    { id: 3, name: 'Real Estate Z', amount: 10000, profit: 300 }
  ];
}
