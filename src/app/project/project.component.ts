import { Component, inject } from '@angular/core';
import { ProjectFilterService } from './project-filter.service';
import { projectList } from './project-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projectFilter = inject(ProjectFilterService)

  filter: string = 'all'

  projectList: projectList[] = []

  ngOnInit() {
    this.projectList = this.projectFilter.projectsList
    console.log(this.projectList = this.projectFilter.projectsList);
    
  }


  // filterProjects(event: any): void {
  //   const filter = event.target.value
  //   console.log(event.target.value);

  //   if (filter === 'all' || this.projectFilter.projectsList.length === 0) {
  //     this.projectList = this.projectFilter.projectsList

  //   } else {
  //     this.projectList = this.projectFilter.projectsList.filter(project => project.filter.toLowerCase() === filter)
  //   }
  // }
}
