import { Component } from '@angular/core';
import { PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { Contatos } from 'src/app/interfaces/Contatos';
import { ListaService } from 'src/app/services/lista.service';
import { FormsModule } from '@angular/forms';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {

  nome: string = '';
  numero: string = '';

  contatos: Contatos[] = []

  constructor(private listaService: ListaService) {
    this.getContatos()
  }

  getContatos(): void {
    this.listaService.getAll().subscribe((contatosGet) => (this.contatos = contatosGet));
  }


  adicionar() {
    if (!this.nome || !this.numero) {
      alert('Preencha todos os campos antes de adicionar.');
    } else {
      this.listaService.jaExiste(this.numero).subscribe(contatosEncontrados => {
        if (contatosEncontrados.length > 0) {
          alert('Número já existe na agenda de contatos.');
        } else {
          this.listaService.postItem(this.nome, this.numero).subscribe(response => {
            console.log('Contato adicionado:', response);
            this.getContatos();
          });
        }
      });
    }
  }

  excluir(id: number) {
    this.listaService.deleteItem(id).subscribe(response => {
      console.log('Contato excluído:', response);
      this.getContatos();
    });
  }

}
