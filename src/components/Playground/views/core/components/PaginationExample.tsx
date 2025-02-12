import * as React from 'react';
import { dataRangePagination, Pagination, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

const itemStyle: React.CSSProperties = {
  margin: '0 0 1rem',
  padding: '0.8rem',
  color: '#484848',
  fontSize: '1.2rem',
  textAlign: 'center',
  backgroundColor: 'rgba(210,210,210,0.45)',
  borderRadius: '0.4rem',
};

export const PaginationExample = () => {
  const list = React.useMemo(() => [...Array(20).keys()], []);
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(3);

  return (
    <VFlex>
      <DefaultHeading>Pagination</DefaultHeading>
      <Pagination
        totalItems={list.length}
        page={page}
        pageSize={pageSize}
        onChange={(newPage: number) => {
          setPage(newPage);
        }}
        onPageSizeChange={(newPageSize: number) => {
          setPage(Math.floor((page * pageSize) / newPageSize));
          setPageSize(newPageSize);
        }}
      />
      <ul>
        {dataRangePagination(list, page, pageSize).map((data, idx) => (
          <li key={idx} style={itemStyle}>
            Item {Number(data) + 1}
          </li>
        ))}
      </ul>
    </VFlex>
  );
};
