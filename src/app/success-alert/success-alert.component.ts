import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  standalone: true,

  template: `
    <div class="alert">
      <h2>Success!</h2>
      <p>Your investment has been submitted successfully!</p>
      <button (click)="close()">Close</button>
    </div>
  `,
  styles: [`
    .alert {
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    button {
      margin-top: 10px;
      padding: 10px;
    }
  `]
})
export class SuccessAlertComponent {
  @Output() closeSuccess: EventEmitter<any> = new EventEmitter();

  close() {
    this.closeSuccess.emit();
  }
}
