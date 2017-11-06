/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Item } from '../item';

@Component({
    styleUrls: ['./imagesGrid.component.scss'],
    selector: 'imagesGrid',
    template: 
    `
      <div class="card">
		<div class="card-block">
		    <h3 class="card-title">{{title}}</h3>
		    <div class="row">
		      <div class="col-xs-6" *ngFor="let item of items | slice:0:4; let i=index;">
		          <a (click)="showItem(item);"><img src="{{item.img_url}}"></a>
		      </div>
		    </div>
		</div>
	</div>
	<clr-modal [(clrModalOpen)]=showDetail [clrModalSize]="'xl'">
      <h3 class="modal-title">{{selectedItem.name}}</h3>
      <div class="modal-body">
          <div class="row"  style="height=300px;">
          	<div class="col-xs-6">
          		<img src="{{selectedItem.img_url}}">
          	</div>
          	<div class="col-xs-6">
          		<table class="table table-vertical">
				    <tbody>
				        <tr>
				            <td>Description</td>
				            <td>></td>
				        </tr>
				        <tr>
				            <td>Specs</td>
				            <td>></td>
				        </tr>
				        <tr>
				            <td>Reviews</td>
				            <td>></td>
				        </tr>
				        <tr>
				            <td>Seller Info</td>
				            <td>></td>
				        </tr>
				    </tbody>
				</table>
			</div>
          </div>
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-outline" (click)="showDetail = false">Cancel</button>
          <button type="button" class="btn btn-primary" (click)="addItem();">Add to Cart</button>
          <div style="margin: 0px 12px 0px 12px">
	          <div class="select" >
	            <select id="aForm_3">
	              <option>1</option>
	              <option>2</option>
	              <option>3</option>
	              <option>4</option>
	            </select>
	          </div>
	      </div>
      </div>
    </clr-modal>
	`
})

export class ImagesGridComponent {
	@Input() title: string;
	items: Item [];
	selectedItem: Item = { name: "", brand: "", price: 0.0, img_url:""};
	showDetail = false;
	constructor(private dataService: DataService) { }

	ngOnInit(): void {
		this.getItems();
	}

	getItems(): void {
		this.items = this.dataService.getItems();
	}

	showItem(item: Item): void {
		this.selectedItem = item;
		this.showDetail = true;
	}

	addItem(): void {
		this.dataService.addToCart(this.selectedItem);
		this.showDetail = false;
	}
}