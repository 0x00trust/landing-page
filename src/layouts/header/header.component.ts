import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {TeamService} from '../../core/teamService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  featureShow = false;
  partnerShow = false;
  resourceShow = false;
  aboutShow = false;
  public innerWidth: any;
  isContainer = false;
  ariaExpanded = false;
  constructor(public teamService: TeamService, private element: ElementRef) { }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.isContainer = this.innerWidth > 1920;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isContainer = this.innerWidth > 1920;
    this.ariaExpanded = false;
  }

  switchStaffData(dataType: 'advisor' | 'team') {
    this.teamService.switchStaffData(dataType);
  }

  scroll(id, position: 'nearest' | 'end' | 'start' | 'center') {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: position });
  }
}
