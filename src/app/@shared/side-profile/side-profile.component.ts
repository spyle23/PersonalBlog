import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../Models/profile.model';
import { SideProfileServiceService } from '../sideProfileService/side-profile-service.service';

@Component({
  selector: 'app-side-profile',
  templateUrl: './side-profile.component.html',
  styleUrls: ['./side-profile.component.scss']
})
export class SideProfileComponent implements OnInit {
  myProfile$!:Observable<Profile>;
  constructor(private sideProfileService:SideProfileServiceService) { }

  ngOnInit(): void {
    this.myProfile$ = this.sideProfileService.getInfoProfile();
  }

  onView(): void{
    
  }
}
