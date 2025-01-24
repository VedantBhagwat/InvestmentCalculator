import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InvestmentResultsComponent } from './components/investment-results/investment-results.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentInput, InvestmentResult } from './models/investment.model';
import { InvestmentService } from './services/investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentResultsComponent, UserInputComponent],
})
export class AppComponent {
  // resultData!: InvestmentResult[];
  // resultData = signal<InvestmentResult[] | undefined>(undefined);
  /* // Move this method to service
  onCalculateInvestmentResults(data: InvestmentInput) {
    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          data.initialInvestment + data.annualInvestment * year,
      });
    }

    // this.resultData = annualData
    this.resultData.set(annualData);
    console.log(this.resultData());
  } */
}
