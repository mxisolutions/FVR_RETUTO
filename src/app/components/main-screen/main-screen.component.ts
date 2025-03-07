import { 
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChild,
  SimpleChanges
} from '@angular/core';

import { Subscription } from 'rxjs';

import { ButtonGroup } from '../shared/btn-group/btn-group.model';
import { BtnGroupService } from '../../services/btn.service';
import { BtnGroupConfig } from '../shared/btn-group/btn-group-config.model';
import { TutoService } from '../../services/tuto.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent implements OnInit, OnChanges {
  buttonGroup :ButtonGroup[] = [];

  panels = [
    "Intro",
    "Timer",
    "Alert",
    "Selfie",
    "Video",
    "Outfit",
    "Chat",
    "Meetup Started",
    "Prep",
    "Tutorial",
  ];

  constructor(
    private btnGroupService: BtnGroupService,
    private walkService: TutoService
  ){
    this.btnGroupService.getButtonConfig().subscribe((data:BtnGroupConfig) => {
      this.buttonGroup = data['btngroup'];
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {   
  }

  ngAfterViewInit(){
  }

  setBtnGroupReady(data: string){
    this.btnGroupService.notifyButtonGrpReady(data);
  }

  
}
