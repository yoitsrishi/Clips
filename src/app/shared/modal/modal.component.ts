import { Component, Input, ElementRef } from '@angular/core';
import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() ModelID: string = '';
  constructor(public modal: ModalService, public el: ElementRef) {}
  toggleModal($event: Event) {
    this.modal.toggleModal(this.ModelID);
  }
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
}
