import { Injectable } from '@angular/core';
import { projectList } from './project-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectFilterService {

  projectsList: projectList[] = [
    { filter: 'commercial', image: '../../assets/images/projects/project1.png', topic: 'Wildstone Infra Hotel', address: '2715 Ash Dr. San Jose, South Dakota' },
    { filter: 'residential', image: '../../assets/images/projects/projects2.jpg', topic: 'Wish Stone Building', address: '2972 Westheimer Rd. Santa Ana, Illinois ' },
    { filter: 'residential', image: '../../assets/images/projects/projects3.jpg', topic: 'Mr. Parkinston’s House', address: '3517 W. Gray St. Utica, Pennsylvania' },
    { filter: 'other', image: '../../assets/images/projects/projects4.jpg', topic: 'Oregano Height', address: '2464 Royal Ln. Mesa, New Jersey' },
  ]
}
