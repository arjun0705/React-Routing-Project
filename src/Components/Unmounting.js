import React from 'react'

function Unmounting() {
    return (
        <div style={{textAlign:'center', border:'2px solid', margin:'20px', padding:'20px'}}>
            <h1> -- Unmounting -- </h1>

            <div style={{ textAlign: 'center',  marginBottom: '0px', }}>


<p  style={{fontWeight:'bolder'}}> This method is called when a component is being removed from the DOM  </p>


  <span style={{marginLeft:'20px',}} > <span style={{fontWeight:'bolder'}}>1] componentWillUnmount() - </span> componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().</span> <br/>
   <br/>

 



</div>

        </div>
    )
}

export default Unmounting
