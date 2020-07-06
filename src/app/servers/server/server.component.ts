import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.server = this.serversService.getServer(+id);
    this.route.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.server = {id: +paramMap.get('id'), 
        name: paramMap.get('name'), 
        status: paramMap.get('status')}
      }
    )
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

}
