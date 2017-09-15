import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]' : 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  leader: Leader;
  promotion: Promotion;

  errMessDish: string;
  errMessPromotion: string;
  errMessLeader: string;


  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish, errmessdish => this.errMessDish = <any>errmessdish);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion, 
          errmesspromotion => this.errMessPromotion = <any>errmesspromotion);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader, 
          errmessleader => this.errMessLeader = <any>errmessleader);
  }
}
