import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
 information =null;

  constructor(private activatedRoute:ActivatedRoute,
              private movieService:MovieService) { }

  ngOnInit() {
    // get the ID that was passed as a param with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDetails(id);
  }

  getDetails(id){
    this.movieService.getDeatils(id).subscribe(res => {
      this.information = res
    });
  }

  openWebsite(){
    window.open(this.information.Website, '_blank');
  }
}
