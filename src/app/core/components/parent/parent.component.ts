import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  electronicsProduct = [
    {
      name: 'Mitsubishi',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTtycrnn1XV3f14eQ92-coA-774u3Z-pSa4g6oXZxemAd5ZLQGM5IMUjd1dsceXFwX20&usqp=CAU',
      price: 70000,
      category: 'A.C',
    },
    {
      name: 'Alexa',
      image:
        'https://t3.ftcdn.net/jpg/04/90/37/48/360_F_490374887_ZzB27OtMi733pwgZVNNoYc7IW1W12Qkb.jpg',
      price: 9999,
      category: 'Speakers',
    },
    {
      name: 'Galaxy S23',
      image:
        'https://images.news18.com/ibnlive/uploads/2022/04/samsung_galaxys22_ultra.jpg',
      price: 74999,
      category: 'Mobile',
    },
    {
      name: 'Samsung',
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/in/qa85qn90cakxxl/gallery/in-qled-qn90c-455012-qa85qn90cakxxl-535909549?$1300_1038_PNG$',
      price: 80000,
      category: 'T.V',
    },
    {
      name: 'Daikin',
      image:
        'https://5.imimg.com/data5/JO/JO/MY-10627100/daikin-air-conditioner-500x500.jpg',
      price: 75000,
      category: 'A.C',
    },
    {
      name: 'TATA - Watch',
      image:
        'https://staticimg.titan.co.in/Titan/Catalog/90172AP01_1.jpg?impolicy=pqmed&imwidth=640',
      price: 30000,
      category: 'Watch',
    },
    {
      name: 'Sony Bravia 139 cm',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2021/12/CX/NQ/SQ/142939515/sy1-500x500.jpg',
      price: 124990,
      category: 'T.V',
    },
  ];
}
