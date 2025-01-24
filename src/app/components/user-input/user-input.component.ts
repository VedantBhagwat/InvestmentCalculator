import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../models/investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestnment = signal(10000);
  annualInvestment = signal(6000);
  expectedReturn = signal(12);
  duration = signal(5);

  calculate = output<InvestmentInput>();

  onSubmit() {
    const data: InvestmentInput = {
      initialInvestment: +this.initialInvestnment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    };
    console.log(data);
    this.calculate.emit(data);

    // Reset the form values to default values
    this.initialInvestnment.set(10000);
    this.annualInvestment.set(6000);
    this.expectedReturn.set(12);
    this.duration.set(5);
  }
}
