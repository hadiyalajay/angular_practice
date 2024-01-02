import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  listOfCountry = [
    {
      country: 'India',
      state: [
        {
          name: 'Gujarat',
          dist: [
            'Surendranagar',
            'Rajkot',
            'Ahmedabad',
            'Bhuj',
            'Jamnagar',
            'Junagadh',
            'Kheda',
            'Vadodara',
            'Surat',
          ],
        },
        {
          name: 'Rajasthan',
          dist: [
            'Jalore',
            'Pali',
            'Jodhpur',
            'Jhunjhunu',
            'Jaipur',
            'Ajmer',
            'Alwar',
            'Sriganganagar',
            'Gangapur City',
            'Sikar',
          ],
        },
        {
          name: 'Goa',
          dist: ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Ludhiana'],
        },
        {
          name: 'Panjab',
          dist: [
            'Amritsar',
            'Barnala',
            'Bathinda',
            'Faridkot',
            'Ludhiana',
            'Firozpur',
            'Gurdaspur',
            'Ludhiana',
            'Mansa',
            'Sri Muktsar Sahib	',
          ],
        },
      ],
    },
  ];
}
