import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { CafetariaService } from '../cafetaria.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-cafetaria',
  templateUrl: './update-cafetaria.component.html',
  styleUrls: ['./update-cafetaria.component.css']
})
export class UpdateCafetariaComponent implements OnInit {

    constructor(private cafetaria: CafetariaService, private active: ActivatedRoute,private router: Router ) { }

    editCafetariaForm = new FormGroup({
        name: new FormControl('',[Validators.required]),
        address: new FormControl('',[Validators.required,Validators.minLength(3)]),
        email: new FormControl('',[Validators.required,Validators.minLength(3)])
    })

    success = false

    get name(){
        return this.editCafetariaForm.get('name');
    }
    get address(){
        return this.editCafetariaForm.get('address');
    }
    get email(){
        return this.editCafetariaForm.get('email');
    }

    loadDetails(){
        this.cafetaria.getCafetariaData(this.active.snapshot.params.id).subscribe((res)=> {
            this.editCafetariaForm = new FormGroup({
                name: new FormControl(res['name']),
                address: new FormControl(res['address']),
                email: new FormControl(res['email'])
            })
        })
    }

    ngOnInit(): void {
        this.loadDetails()
    }

    updateCafetaria(){
        this.cafetaria.editCafetaria(this.active.snapshot.params.id,this.editCafetariaForm.value).subscribe((res)=>{
            this.success = true
            setTimeout(() => {
                this.router.navigate([''])
            }, 2000);
        })
    }
}
