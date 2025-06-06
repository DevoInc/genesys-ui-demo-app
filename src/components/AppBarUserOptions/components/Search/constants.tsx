import * as React from 'react';
import {
  GIAlerts,
  GIFlow,
  GIGaugeDashboardFullFuel,
  GISearchFindZoom,
  GIWindowNewExternFullScreenMaximize,
} from '@devoinc/genesys-icons';

export const SEARCH_TYPES_ICON_MAP = {
  activeboard: <GIGaugeDashboardFullFuel />,
  search: <GISearchFindZoom />,
  alert: <GIAlerts />,
  flow: <GIFlow />,
  page: <GIWindowNewExternFullScreenMaximize />,
};
