import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel implements OnInit, AfterViewInit, OnDestroy {

  @Input() images: CarouselImage[] = [];

  currentIndex = 0;

  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  interval = 4000;

  isHovered = false;

  ngOnInit() {
    this.currentIndex = 0;
  }

  ngAfterViewInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.clearAutoplay();
  }

  get containerClass(): string {

    if (!this.images.length) return 'carousel-pc';

    return this.images[this.currentIndex].type === 'mobile'
      ? 'carousel-mobile'
      : 'carousel-pc';
  }

  next() {

    if (!this.images.length) return;

    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;

    this.restartAutoplay();
  }

  prev() {

    if (!this.images.length) return;

    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) %
      this.images.length;

    this.restartAutoplay();
  }

  goTo(index: number) {

    if (!this.images.length) return;

    this.currentIndex = index % this.images.length;

    this.restartAutoplay();
  }

  private autoplayStep() {

    this.clearAutoplay();

    this.timeoutId = setTimeout(() => {

      if (!this.isHovered && this.images.length) {
        this.currentIndex =
          (this.currentIndex + 1) % this.images.length;
      }

      this.autoplayStep();

    }, this.interval);
  }

  startAutoplay() {

    if (this.images.length <= 1) return;

    this.autoplayStep();
  }

  stopAutoplay() {

    this.isHovered = true;
    this.clearAutoplay();
  }

  resumeAutoplay() {

    this.isHovered = false;
    this.autoplayStep();
  }

  private restartAutoplay() {

    if (!this.isHovered) {
      this.autoplayStep();
    }
  }

  private clearAutoplay() {

    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  /* ---------------- ZOOM ---------------- */

  onZoom(event: MouseEvent) {

    const img = event.target as HTMLImageElement;

    const rect = img.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(2)';
  }

  resetZoom(event: MouseEvent) {

    const img = event.target as HTMLImageElement;

    img.style.transform = 'scale(1)';
    img.style.transformOrigin = 'center';
  }

}