import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar, Sort } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl mt-24'>
      <Header category="Page" title="Employees"/>
      <GridComponent 
        id='gridcomp'
        dataSource={employeesData}
        allowSorting
        allowPaging
        toolbar={['Search']}
        width='auto'
        >
        <ColumnsDirective >
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Sort]} />
      </GridComponent>
    </div>
  )
}

export default Employees