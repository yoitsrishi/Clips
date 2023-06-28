import { Component, Input } from '@angular/core';
import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() ModelID: string = '';
  constructor(public modal: ModalService) {}
  toggleModal($event: Event) {
    this.modal.toggleModal(this.ModelID);
  }
}
