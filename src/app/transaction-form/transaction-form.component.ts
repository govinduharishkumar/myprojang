import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import here

@Component({
  selector: 'app-transaction-form',
  standalone: true, // Indicate that this component is standalone
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
  imports: [ReactiveFormsModule] // Include ReactiveFormsModule in imports
})
export class TransactionFormComponent implements OnInit {
  transactionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      tradeID: ['', Validators.required],
      version: ['', Validators.required],
      securityCode: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      action: ['', Validators.required],
      buySell: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.transactionForm.valid) {
      console.log(this.transactionForm.value);
    }
  }
}
