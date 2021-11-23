import React from 'react'

function Updating() {
    return (
        <div style={{textAlign:'center', border:'2px solid', margin:'20px', padding:'20px'}}>
            <h1> -- Updating -- </h1>
            <div style={{ textAlign: 'center',  marginBottom: '0px', }}>


<p  style={{fontWeight:'bolder'}}> An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:</p>

  <span style={{marginLeft:'30px',}} > <span style={{fontWeight:'bolder'}}>1] static getDerivedStateFromProps() - </span> getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing. <span style={{fontWeight:"bolder"}}> static getDerivedStateFromProps(props, state) </span></span> <br/>
   <br/>

 <span>  <span style={{fontWeight:'bolder', marginLeft:'30px'}}>2] shouldComponentUpdate() </span> - Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.<span style={{fontWeight:'bolder'}}> shouldComponentUpdate(nextProps, nextState) </span> </span><br/>
 <br/>
  <span> <span style={{fontWeight:'bolder',marginLeft:'30px'}}>3] render()</span> - The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.</span><br/> <br/>
   

<span style={{marginLeft:'5px'}}> <span style={{fontWeight:'bolder'}}> 4] getSnapshotBeforeUpdate() - </span> getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle method will be passed as a parameter to componentDidUpdate().

 </span><br/><br/>


<span style={{marginLeft:'1px'}}> <span style={{fontWeight:'bolder'}}> 5] componentDidUpdate() - </span> componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render. <span style={{fontWeight:'bolder'}}>componentDidUpdate(prevProps, prevState, snapshot) </span></span>
 <br/>



</div>

        </div>
    )
}

export default Updating
