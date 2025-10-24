import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.user.color);
  return (
    <div id='right' className='h-full rounded-4xl flex flex-nowrap gap-10 overflow-x-auto p-6 w-2/3 '>
      {props.user.map(function(elem,idx){

        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
