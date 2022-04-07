import {inject, Provider} from '@loopback/core';
import {Request, Response} from '@loopback/rest';
import * as helmet from 'helmet';

import {HelmetSecurityBindings} from '../keys';

export interface HelmetAction {
  (request: Request, response: Response): Promise<void>;
}

export class HelmetActionProvider implements Provider<HelmetAction> {
  constructor(
    @inject(HelmetSecurityBindings.CONFIG, {
      optional: true,
    })
    private readonly config?: helmet.HelmetOptions,
  ) {}

  value(): HelmetAction {
    return (req, resp) => this.action(req, resp);
  }

  async action(request: Request, response: Response): Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
      helmet.default(this.config)(request, response, (err: unknown) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
    await promise;
  }
}
