import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  productList: any[] = [];
  selectedCategory: string = '';
  searchByName: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.productList = data;
    });
  }

  handleSelectCategory(e: any) {
    this.selectedCategory = e.target.value;
  }

  handleSearchByName(e: any) {
    this.searchByName = e.target.value;
  }

  get filteredProducts() {
    return this.productList.filter(
      (product) =>
        (this.selectedCategory === 'all' || this.selectedCategory === product.category) &&
        product.title.toLowerCase().startsWith(this.searchByName.toLowerCase())
    );
  }
}
