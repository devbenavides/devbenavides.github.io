import { Component, signal } from '@angular/core';
import  {PROJECTS} from '../../core/data/project.data'
import { Project } from '../../core/models/project.model';
import { Carousel } from "../../shared/components/carousel/carousel";
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  imports: [CommonModule, Carousel],
})
export class Projects {
  // Lista de proyectos
  projects = signal<Project[]>(PROJECTS);

  // Modal
  private _selectedProject = signal<Project | null>(null);
  modalOpen = signal(false);

  // Getter para HTML limpio
  get selectedProject(): Project | null {
    return this._selectedProject();
  }

  // Abrir modal
  openModal(project: Project) {
    this._selectedProject.set(project);
    this.modalOpen.set(true);
  }

  // Cerrar modal
  closeModal() {
    this.modalOpen.set(false);
    this._selectedProject.set(null);
  }

}
