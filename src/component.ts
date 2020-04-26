import {Component, ProviderMap, Binding} from '@loopback/core';
import {HelmetSecurityBindings} from './keys';
import {HelmetActionProvider} from './providers/helmet-action.provider';

export class Loopback4HelmetComponent implements Component {
  constructor() {
    this.providers = {
      [HelmetSecurityBindings.HELMET_SECURITY_ACTION.key]: HelmetActionProvider,
    };
    this.bindings.push(
      Binding.bind(HelmetSecurityBindings.CONFIG.key).to(null),
    );
  }

  providers?: ProviderMap;
  bindings: Binding[] = [];
}
