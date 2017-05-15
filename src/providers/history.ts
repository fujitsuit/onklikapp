import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class History{

  places = [
    {
      id: 1,
      placeId: 1,
      name: 'Заведение 1',
      zone: 'zone1',
      table: 'table1',
      date: new Date(),
      time: new Date()
    },
    {
      id: 2,
      placeId: 1,
      name: 'Заведение 2',
      zone: 'zone2',
      table: 'table2',
      date: new Date(),
      time: new Date()
    },
    {
      id: 3,
      placeId: 1,
      name: 'Заведение 3',
      zone: 'zone3',
      table: 'table3',
      date: new Date(),
      time: new Date()
    }
  ];
  checkin = [
    {
      id: 21,
      placeId: 1,
      name: 'checkin1',
      zone: 'zone1',
      table: 'table1',
      date: new Date(),
      time: new Date(),
      start: new Date(),
      end: new Date(),
      amount: 12312,
      opened: false,
      menu: [
        {
          id: 2,
          name: 'Dish 1',
          value: 1000
        },
        {
          id: 3,
          name: 'Dish 2',
          value: 1200
        },
        {
          id: 4,
          name: 'Dish 3',
          value: 1000
        },
        {
          id: 5,
          name: 'Dish 4',
          value: 1200
        }
      ]
    },
    {
      id: 22,
      placeId: 1,
      name: 'checkin2',
      zone: 'zone1',
      table: 'table1',
      date: new Date(),
      time: new Date(),
      start: new Date(),
      end: new Date(),
      amount: 12312,
      opened: false,
      menu: [
        {
          id: 2,
          name: 'Dish 1',
          value: 1000
        },
        {
          id: 3,
          name: 'Dish 2',
          value: 1200
        },
        {
          id: 4,
          name: 'Dish 3',
          value: 1000
        },
        {
          id: 5,
          name: 'Dish 4',
          value: 1200
        }
      ]
    },
    {
      id: 23,
      placeId: 1,
      name: 'checkin3',
      zone: 'zone1',
      table: 'table1',
      date: new Date(),
      time: new Date(),
      start: new Date(),
      end: new Date(),
      amount: 12312,
      opened: false,
      menu: [
        {
          id: 2,
          name: 'Dish 1',
          value: 1000
        },
        {
          id: 3,
          name: 'Dish 2',
          value: 1200
        },
        {
          id: 4,
          name: 'Dish 3',
          value: 1000
        },
        {
          id: 5,
          name: 'Dish 4',
          value: 1200
        }
      ]
    }
  ];
  delivery = [
    {
      id: 21,
      placeId: 1,
      name: 'checkin1',
      zone: 'zone1',
      table: 'table1',
      date: new Date(),
      time: new Date(),
      amount: 12312,
      opened: false,
      menu: [
        {
          id: 2,
          name: 'Dish 1',
          value: 1000
        },
        {
          id: 3,
          name: 'Dish 2',
          value: 1200
        },
        {
          id: 4,
          name: 'Dish 3',
          value: 1000
        },
        {
          id: 5,
          name: 'Dish 4',
          value: 1200
        }
      ]
    },
    {
      id: 22,
      placeId: 1,
      name: 'checkin2',
      zone: 'zone1',
      table: 'table1',
      date: new Date(),
      time: new Date(),
      amount: 12312,
      opened: false,
      menu: [
        {
          id: 2,
          name: 'Dish 1',
          value: 1000
        },
        {
          id: 3,
          name: 'Dish 2',
          value: 1200
        },
        {
          id: 4,
          name: 'Dish 3',
          value: 1000
        },
        {
          id: 5,
          name: 'Dish 4',
          value: 1200
        }
      ]
    },
    {
      id: 23,
      placeId: 1,
      name: 'checkin3',
      zone: 'zone1',
      table: 'table1',
      date: new Date(),
      time: new Date(),
      amount: 12312,
      opened: false,
      menu: [
        {
          id: 2,
          name: 'Dish 1',
          value: 1000
        },
        {
          id: 3,
          name: 'Dish 2',
          value: 1200
        },
        {
          id: 4,
          name: 'Dish 3',
          value: 1000
        },
        {
          id: 5,
          name: 'Dish 4',
          value: 1200
        }
      ]
    }
  ];


}