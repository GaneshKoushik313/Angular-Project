import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CafetariaService } from '../cafetaria.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-cafetaria',
  templateUrl: './add-cafetaria.component.html',
  styleUrls: ['./add-cafetaria.component.css']
})
export class AddCafetariaComponent implements OnInit {

    constructor(private saveForm:CafetariaService, private router: Router) { }

    ngOnInit(): void {
    }

    success = false

    addCafetariaForm = new FormGroup({
        name: new FormControl('',[Validators.required]),
        address: new FormControl('',[Validators.required,Validators.minLength(3)]),
        email: new FormControl('',[Validators.required,Validators.minLength(3)])
    })

    createCafetaria(){
        this.saveForm.saveCafetariaData(this.addCafetariaForm.value).subscribe((res) =>{
            console.log(res);
            this.success = true
            setTimeout(() => {
                this.router.navigate([''])
            }, 2000);
        })
    }

    get name(){
        return this.addCafetariaForm.get('name');
    }

    get address(){
        return this.addCafetariaForm.get('address');
    }

    get email(){
        return this.addCafetariaForm.get('email');
    }

}
