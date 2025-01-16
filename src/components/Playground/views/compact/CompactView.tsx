import * as React from 'react';
import {
  Panel,
  Flex,
  HFlex,
  IconButton,
  Typography,
  VFlex,
} from '@devoinc/genesys-ui';
import { GIMenuAltVertical } from '@devoinc/genesys-icons';

export const CompactView: React.FC = () => {
  return (
    <VFlex alignItems="stretch">
      <HFlex>
        <Panel flex="1">
          <Panel.Header
            actions={[
              <IconButton
                key="weekly-active-users-widget-actions"
                colorScheme="quiet"
                size="sm"
                icon={<GIMenuAltVertical />}
              />,
            ]}
            bordered
            title="Weekly active users"
            subtitle="Last 7 days"
            size="sm"
          />
          <Panel.Body>
            <Flex height="8rem" justifyContent="center" alignItems="center">
              <Typography.Heading textAlign="center" size="hero-sm">
                138
              </Typography.Heading>
            </Flex>
          </Panel.Body>
        </Panel>
        <Panel flex="1">
          <Panel.Header
            actions={[
              <IconButton
                key="daily-ingest-volume-widget-actions"
                colorScheme="quiet"
                size="sm"
                icon={<GIMenuAltVertical />}
              />,
            ]}
            bordered
            title="Avg daily ingestion volume"
            subtitle="Last 7 days"
            size="sm"
          />
          <Panel.Body>
            <Flex height="8rem" justifyContent="center" alignItems="center">
              <Typography.Heading textAlign="center" size="hero-sm">
                201.39 GiB
              </Typography.Heading>
            </Flex>
          </Panel.Body>
        </Panel>
        <Panel flex="1">
          <Panel.Header
            actions={[
              <IconButton
                key="data-search-query-widget-actions"
                colorScheme="quiet"
                size="sm"
                icon={<GIMenuAltVertical />}
              />,
            ]}
            bordered
            title="Data search query count"
            subtitle="Last 24h"
            size="sm"
          />
          <Panel.Body>
            <Flex height="8rem" justifyContent="center" alignItems="center">
              <Typography.Heading textAlign="center" size="hero-sm">
                36
              </Typography.Heading>
            </Flex>
          </Panel.Body>
        </Panel>
      </HFlex>
      <HFlex alignItems="flex-start">
        <Panel>
          <Panel.Header
            actions={[
              <IconButton
                key="ingest-by-tech-widget-actions"
                colorScheme="quiet"
                size="sm"
                icon={<GIMenuAltVertical />}
              />,
            ]}
            bordered
            title="Ingestion per technology"
            subtitle="Last 7 days"
            size="sm"
          />
          <Panel.Body>
            <img
              src="/chart-01.png"
              alt="Chart"
              style={{ width: '100%', height: 'auto' }}
            />
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Header
            actions={[
              <IconButton
                key="resource-usage-widget-actions"
                colorScheme="quiet"
                size="sm"
                icon={<GIMenuAltVertical />}
              />,
            ]}
            bordered
            title="Resource usage % by component"
            subtitle="Last 24h"
            size="sm"
          />
          <Panel.Body>
            <img
              src="/chart-02.png"
              alt="Chart"
              style={{ width: '100%', height: 'auto' }}
            />
          </Panel.Body>
        </Panel>
      </HFlex>
    </VFlex>
  );
};
