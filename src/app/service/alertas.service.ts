import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(msg: string, tipo: String){
  const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
  bsModalRef.content.type = tipo
  bsModalRef.content.message = msg
  }
}
