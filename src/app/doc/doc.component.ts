import { Component, OnInit, Input } from '@angular/core';

interface IApiParam {
  name: string;
  require?: boolean;
  type: string;
  desc: string;
}

export interface IApiOption {
  /** 名称, 默认值methodName  */
  name?: string;
  /** 描述 */
  desc?: string;
  /** 地址, 默认值methodName */
  path?: string;
  /** http方法, 默认值GET */
  method?: string;
  /** 校验参数 */
  schema?: any;
  /** 非校验参数 */
  params?: IApiParam[] | IApiParam;
  /** 返回示例 */
  return?: string;
  /** 返回参数说明 */
  retParams?: IApiParam[] | IApiParam;
  /** 使用中间件 */
  middlewares?: any[];
}

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
})
export class DocComponent implements OnInit {
  @Input()
  data: IApiOption;
  constructor() {}

  ngOnInit() {
    // this.data = {
    //   method: 'GET',
    //   name: '用户登录',
    //   path: '/schema/hello',
    //   schema: {
    //     additionalProperties: false,
    //     properties: {
    //       p: { type: 'string' },
    //       q: { type: 'number' },
    //     },
    //     type: 'object',
    //   },
    //   params: [
    //     {
    //       name: 'usernmae',
    //       require: true,
    //       type: 'string',
    //       desc: '用户名',
    //     },
    //     {
    //       name: 'password',
    //       require: false,
    //       type: 'string',
    //       desc: '密码',
    //     },
    //   ],
    //   retParams: [
    //     {
    //       name: 'usernmae',
    //       type: 'string',
    //       desc: '用户组id，1：超级管理员；2：普通用户',
    //     },
    //   ],
    // };
  }
}
