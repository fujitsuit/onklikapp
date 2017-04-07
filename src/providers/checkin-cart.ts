import { Injectable } from '@angular/core';

@Injectable()
export class Cart{
  status = false;
  items = [];
  count = 0;
}