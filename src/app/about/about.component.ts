import { Component ,Renderer2, ElementRef,OnInit } from '@angular/core';
import { AboutService,about } from '../services/about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  abouts: about[] = [];
  baseUrl: string = 'http://localhost:3000';

  constructor(private aboutservise: AboutService, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.fetchHomes();
  }

  fetchHomes(): void {
    this.aboutservise.getabouts().subscribe(
      (data) => {

        this.abouts  =data;
        if (!this.abouts[0].aboutImage.startsWith('http')) {
          this.abouts[0].aboutImage = `${this.baseUrl}${this.abouts[0].aboutImage}`;
        }





      },
      (error) => {
        console.error('خطأ أثناء جلب البيانات:', error);
      }
    );
  }



  createVideo(): void {

    const container  = this.el.nativeElement.querySelector('#video-container');


    const videoDiv = this.renderer.createElement('div');
    this.renderer.setStyle(videoDiv, 'margin', '20px 0');


    const video = this.renderer.createElement('video');
    this.renderer.setAttribute(video, 'controls', 'true');
    this.renderer.setAttribute(video, 'autoplay', 'true');

    this.renderer.setStyle(video, 'width', '100%');
    this.renderer.setStyle(video, ' position', 'absolute');
    this.renderer.setStyle(video, ' left', '0');
    this.renderer.setStyle(video, ' top', '0');



    const source = this.renderer.createElement('source');
    this.renderer.setAttribute(source, 'src', this.abouts[0].mainVideo);
    this.renderer.setAttribute(source, 'type', 'video/mp4');


    this.renderer.appendChild(video, source);


    this.renderer.appendChild(videoDiv, video);


    this.renderer.appendChild(container, videoDiv);
    this.renderer.listen(videoDiv, 'click', () => {
      this.renderer.removeChild(container, videoDiv);
    });
  }

}
