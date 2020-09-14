import { Component, OnInit } from '@angular/core';
import { CafetariaService } from '../cafetaria.service';

@Component({
    selector: 'app-list-cafetaria',
    templateUrl: './list-cafetaria.component.html',
    styleUrls: ['./list-cafetaria.component.css']
})
export class ListCafetariaComponent implements OnInit {

    constructor(private cafetaria: CafetariaService) { }
    hotels:any = []
    ngOnInit(): void {
        this.cafetaria.getData().subscribe((response) => {
            this.hotels = response
            console.log(this.hotels)
        })
    }

}
