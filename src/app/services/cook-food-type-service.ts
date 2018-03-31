import { Injectable } from '@angular/core';

@Injectable()
export class CookFoodTypeService {

  constructor() { }

  getCookFoodType(): iCookFoodType[] {
     return [
      {
        id: "1",
        name: "Slow Cooker",
        imageUrl: "https://s3.amazonaws.com/simplyfed-assets/image/images.crateandbarrel_1.jpg"
      },
      {
        id: "2",
        name: "Juicer",
        imageUrl: "https://s3.amazonaws.com/simplyfed-assets/image/images.crateandbarrel_2.jpg"
      },
      {
        id: "3",
        name: "Sous Vide",
        imageUrl: "https://s3.amazonaws.com/simplyfed-assets/image/images.crateandbarrel_3.jpg"
      },
      {
        id: "4",
        name: "Blender",
        imageUrl: "https://s3.amazonaws.com/simplyfed-assets/image/images.crateandbarrel_4.jpg"
      }
    ]
  }

}