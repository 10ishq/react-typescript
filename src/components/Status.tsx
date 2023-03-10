import React from 'react'
type StatusProps={
    status :'Loading' | 'Success' | 'Error'
}
const Status = (props: StatusProps) => {
    let message
    if(props.status === 'Loading'){
        message = <h1>Loading</h1>
    }else if(props.status === 'Success'){
        message = <h2>Success</h2>
    }else if(props.status === 'Error'){
        message = <h2>Error</h2>
    }
  return (
    <div>
        {message}
    </div>
  )
}

export default Status