import React from 'react';
import { dataFilter, IFilterProps } from 'components';
import './filter.css';

function FilterItem({ name }: IFilterProps) {
  return <li>{name}</li>;
}

export const Filter: React.FC<IFilterProps> = ({ id, name }) => {
  return (
    <div className="filter">
      <h4 className="filterTitle">Category</h4>
      <span className="categories">
        {dataFilter.map(({ id, name }) => (
          <FilterItem key={id} id={id} name={name} />
        ))}
      </span>
    </div>
  );
};
