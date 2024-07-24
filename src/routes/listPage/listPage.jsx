import React from 'react';
import './listPage.scss';
import {listData} from '../../lib/dummydata';
import Filter from '../../components/filter/Filter'
import Map from '../../components/map/Map';
import Card from '../../components/card/Card';


function ListPage() {

  const data=listData;

  return (
    <div className='listPage'>

      <div className='listContainer'>
        <div className='wrapper'>
          <Filter />

          {data.map( item => (
            <Card key={item.id} element={item} />
          ))}

        </div>
      </div>

      <div className='mapContainer'>
        <Map items={data}/>
      </div>

    </div>
  )
}

export default ListPage