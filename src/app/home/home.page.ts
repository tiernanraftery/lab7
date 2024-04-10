import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';
import { MovieService } from '../Services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent],
})
export class HomePage implements OnInit {
  movies:any= [];
  constructor(private movieService:MovieService) {

  }

  ngOnInit(): void {
    this.movieService.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
      }
    );
  }

}
