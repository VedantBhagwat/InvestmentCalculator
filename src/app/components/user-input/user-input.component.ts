import { Component, output, signal } from '@angular/core';
import { InvestmentInput } from '../../models/investment.model';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestnment = signal(10000);
  annualInvestment = signal(6000);
  expectedReturn = signal(12);
  duration = signal(5);

  // calculate = output<InvestmentInput>();

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    /* const data: InvestmentInput = {
      initialInvestment: +this.initialInvestnment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    };
    console.log(data);
    this.calculate.emit(data); */

    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.initialInvestnment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });

    // Reset the form values to default values
    this.initialInvestnment.set(10000);
    this.annualInvestment.set(6000);
    this.expectedReturn.set(12);
    this.duration.set(5);
  }
}
