import { Component, OnInit } from '@angular/core';
import { Product } from "../product.model"
import { ProductService } from "../product.service"

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product = {
    name: '',
    id: 0
  }
  edit = true;
  add = false;
  products!: Product[];

  constructor(private product_service: ProductService) { }

  ngOnInit(): void {
    this.get_products()
  }

  private get_products() {
    this.product_service.get_products().subscribe(products => this.products = products);
  }

  add_product() {
    const data = {
      name: this.product.name,
      id: this.product.id
    };
    this.product_service.create_product(data).subscribe(response => {
      console.log(response)
      this.get_products();
    });
  }

  set_product_edit(product: Product) {
    this.product.name = product.name;
    this.product.id = product.id;
    this.edit = false;
    this.add = true;
  }

  reset_values() {
    this.product.name = "";
    this.product.id = 0;
    this.edit = true;
    this.add = false;
  }

  remove_product(product: Product) {
    const id = product.id;
    console.log(product)
    this.product_service.delete_product(id).subscribe(product => console.log(product));
    this.get_products()
  }

  update_product(){
    this.product_service.edit_product(this.product).subscribe(response => console.log(response));
    this.get_products()
    this.reset_values()
  }



}
