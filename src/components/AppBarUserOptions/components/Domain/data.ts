import type { TDomainState } from './declarations';

export const domainsConfig: {
  name: string;
  status: TDomainState;
}[] = [
  {
    name: 'datacontroltest',
    status: 'success',
  },
  {
    name: 'demo@customer',
    status: 'success',
  },
  {
    name: 'best_whishes_poc',
    status: 'success',
  },
  {
    name: 'customer@customer',
    status: 'warning',
  },
  {
    name: 'who_knows_poc',
    status: 'success',
  },
  {
    name: 'security_management',
    status: 'success',
  },
  {
    name: 'waffleiron',
    status: 'success',
  },
  {
    name: 'test@asap-spain',
    status: 'success',
  },
];
