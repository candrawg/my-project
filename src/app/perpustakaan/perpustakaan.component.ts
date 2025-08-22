import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { DataService } from '../data.service';


@Component({
  selector: 'app-perpustakaan',
  imports: [JsonPipe],
  templateUrl: './perpustakaan.component.html',
  styleUrl: './perpustakaan.component.css'
})
export class PerpustakaanComponent {
  dataBuku: any;

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBuku().subscribe((res) => {
      this.dataBuku = res;
    });
  }
}
