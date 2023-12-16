
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  template: `
    <div class="modal-overlay" *ngIf="showModal">
      <div class="modal-container">
        <p class="confirmation-message">{{ confirmationMessage }}</p>
        <p *ngIf="price" class="price-message">PRICE: {{ price }} €</p>
        <button (click)="onConfirm()" class="confirm-button">BUY</button>
        <button (click)="onCancel()" class="deny-button">CANCEL</button>
      </div>
    </div>
  `,
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  @Input() confirmationMessage: string = '';
  @Input() price: number | undefined;
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  showModal: boolean = true;

  onConfirm() {
    this.confirm.emit();
    this.showModal = false;
  }

  onCancel() {
    this.cancel.emit();
    this.showModal = false;
  }
}
