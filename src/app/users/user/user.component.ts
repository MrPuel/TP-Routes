import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const name = this.route.snapshot.paramMap.get('name');

    this.user = {id: +id, name};

    this.route.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.user= {id: +paramMap.get('id'), name: paramMap.get('name')}
      }
    )
  }

}
