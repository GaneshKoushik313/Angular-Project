import { Component, OnInit } from '@angular/core';
import { CafetariaService } from '../cafetaria.service';
import {Router} from '@angular/router';
@Component({
    selector: 'app-list-cafetaria',
    templateUrl: './list-cafetaria.component.html',
    styleUrls: ['./list-cafetaria.component.css']
})
    
export class ListCafetariaComponent implements OnInit {

    constructor(private cafetaria: CafetariaService, private router: Router) { }
    hotels:any = []
    success = false

    addCafetaria(){
        console.log("navigate")
        this.router.navigate(['/add']);
    }

    deleteCafetaria(item){
        this.hotels.splice(item-1,1)
        this.cafetaria.deleteCafetariaData(item.id).subscribe((res)=>{
            this.success = true
            setTimeout(() => {
                this.success = false
            }, 1000);
        })
    }

    loadHotels(){
        this.cafetaria.getData().subscribe((response) => {
            this.hotels = response
            console.log(this.hotels)
        })
    }

    ngOnInit(): void {
        this.loadHotels()
    }

}
