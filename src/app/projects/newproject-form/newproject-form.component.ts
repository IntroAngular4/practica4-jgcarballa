import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../projects/models/project';
import { ProjectserviceService } from '../projectservice.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newproject-form',
  templateUrl: './newproject-form.component.html',
  styles: [
  ]
})
export class NewprojectFormComponent implements OnInit {
  @Input () public titulo: string;
  @Input () public project: Project;
  @Input () public legend: string;
  @Output () public createProject = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  public saveProject(){
    const projectName = this.project.name;
    this.createProject.emit(projectName);
  }
}
