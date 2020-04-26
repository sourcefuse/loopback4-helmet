import {BindingKey} from '@loopback/core';
import {HelmetAction} from './providers/helmet-action.provider';
import {IHelmetConfiguration} from 'helmet';

export namespace HelmetSecurityBindings {
  export const HELMET_SECURITY_ACTION = BindingKey.create<HelmetAction>(
    'sf.security.helmet.actions',
  );

  export const CONFIG = BindingKey.create<IHelmetConfiguration | null>(
    'sf.security.helmet.config',
  );
}
