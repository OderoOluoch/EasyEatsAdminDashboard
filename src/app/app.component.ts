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
    new Shop('La Ratatulie', 'For the best Italian cuisines'),
    new Shop('Mama Nyama', 'Need your chomas hot, we got you covered.'),
    new Shop ('Americana Hotel', 'Nothing Tastes better than American Burgers..'),
    new Shop ('Tamu Tamu Dishes', 'Get an experience of the Coast in your plate'),
    new Shop ('Purple Hibiscus Hotel', 'Wanna go natural, try our drinks.. Best served cold'),
  ];
}
