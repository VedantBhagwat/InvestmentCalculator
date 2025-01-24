import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // results = input.required<InvestmentResult[] | undefined>();
  // @Input() results?: InvestmentResult[];

  private investmentService = inject(InvestmentService);

  // It will return the WRITABLE Signal
  /* get results() {
    return this.investmentService.resultData;
  } */

  // It will return the computed ReadOnly Signal
  results = computed(() => this.investmentService.resultData());
  // OR
  // results = this.investmentService.resultData.asReadonly()
}
