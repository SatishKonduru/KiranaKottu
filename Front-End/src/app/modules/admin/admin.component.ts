import {  Component} from '@angular/core';
import { MenuItems } from 'src/app/shared/menuItems';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
 constructor(public menuItems: MenuItems){}
}
