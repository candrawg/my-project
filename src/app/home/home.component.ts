import { Component } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-home',
  imports: [MatBadgeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  produkBuku: Array<string> = [
    'Buku A',
    'Buku B',
    'Buku C',
    'Buku D',
  ]

  objectBuku: Array<any> = [
    { id: 1,
      judul: 'Buku A',
      penulis: 'Penulis A'
    },
    { id: 2,
      judul: 'Buku B',
      penulis: 'Penulis B'
    },
    { id: 3,
      judul: 'Buku C',
      penulis: 'Penulis C'
    },
    { id: 4,
      judul: 'Buku D',
      penulis: 'Penulis D'
    },
  ];

  tambahObject() {
    this.objectBuku.push({
      id: 5,
      judul: 'Buku E',
      penulis: 'Penulis E'
    })
  }

  hapusObject(obj: any) {
    let index = this.objectBuku.indexOf(obj)
    this.objectBuku.splice(index, 1)
  }
  
  
}
