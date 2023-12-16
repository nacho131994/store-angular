// product-list.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() filteredProducts: any[] = [];
  @Input() selectedCategory: string = '';
  showModal: boolean = false;
  selectedItem: any;
  confirmationMessage: string = '';
  selectedItemPrice: number | undefined;

  confirmPurchase(item: any) {
    this.showModal = true;
    this.selectedItem = item;
    this.selectedItemPrice = item.price;
    this.confirmationMessage = `¿Are you sure that you want to buy ${item.title}?`;
  }

  onConfirmPurchase() {
    // Aquí puedes agregar la lógica para procesar la compra
    console.log('Compra confirmada:', this.selectedItem);
    this.showModal = false;
  }

  onCancelPurchase() {
    this.showModal = false;
  }
}
