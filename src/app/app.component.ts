import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})
export class AppComponent implements OnInit {
  interfaceList: any = [];
  data: any;
  constructor(public http: HttpClient, public location: Location) {
    // this.interfaceList = interfaceList;
  }

  async ngOnInit() {
    this.interfaceList = await this.http
      .post(this.location.path(), {}, { responseType: 'json' })
      .toPromise();
  }

  changetab(item) {
    this.data = item.value;
  }
}

const interfaceList = [
  {
    name: '用户相关',
    children: [
      {
        name: '用户登录',
        value: {
          method: 'GET',
          name: '用户登录',
          path: '/schema/hello',
          schema: {
            additionalProperties: false,
            properties: {
              p: { type: 'string' },
              q: { type: 'number' },
            },
            type: 'object',
          },
        },
      },
      {
        name: '用户注册',
        value: {
          method: 'GET',
          name: '用户注册',
          path: '/schema/hello',
          schema: {
            additionalProperties: false,
            properties: {
              p: { type: 'string' },
              q: { type: 'number' },
            },
            type: 'object',
          },
        },
      },
    ],
  },
  {
    name: '数据相关',
    children: [
      { name: '城市数据', value: { name: '城市数据' } },
      { name: '省份数据', value: { name: '省份数据' } },
    ],
  },
];
