import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './models/project';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {
  projectList: Project[];

  constructor(private projectService: ProjectserviceService) { }

  ngOnInit() {
    this.projectList = this.projectService.getProjects();
  }

}
