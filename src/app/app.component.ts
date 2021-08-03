import { Component } from '@angular/core';
import { Shop } from './shop'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EasyEatsDashboard';
  shops : Shop[] = [
    new Shop(1, 'La Ratatulie', 'For the best Italian cuisines'),
    new Shop(2, 'Mama Nyama', 'Need your chomas hot, we got you covered.'),
    new Shop (3, 'Americana Hotel', 'Nothing Tastes better than American Burgers..'),
    new Shop (4, 'Tamu Tamu Dishes', 'Get an experience of the Coast in your plate'),
    new Shop (5, 'Purple Hibiscus Hotel', 'Wanna go natural, try our drinks.. Best served cold'),
  ];
}
