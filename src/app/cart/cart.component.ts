/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, ViewChild, EventEmitter, Output } from "@angular/core";
import { Wizard, Modal } from "clarity-angular";
import { DataService } from '../data.service';

@Component({
    styleUrls: ['./cart.component.scss'],
    selector: 'cart',
    templateUrl: './cart.component.html',
})
export class CartComponent {
	@ViewChild("wizardxl") wizardLarge: Wizard;
	@ViewChild("modal") modal: Modal;

	@Input() yolo: boolean = false;
	@Output() yoloChange = new EventEmitter<boolean>();

	constructor(public dataService: DataService) {
    }
}
