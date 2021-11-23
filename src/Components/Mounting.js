import React from 'react'

function Mounting() {
    return (
        <div style={{ textAlign: 'center', border: '2px solid', margin: '20px', padding: '20px', backgroundColor:'#FAF9F6' }} >

            <h1 > -- Mounting -- </h1>



            <div style={{ textAlign: 'center',  marginBottom: '0px', }}>


                <p  style={{fontWeight:'bolder'}}> These methods are called in the following order when an instance of a component is being created and inserted into the DOM  </p>
                

                  <span style={{marginLeft:'20px',}} > <span style={{fontWeight:'bolder'}}>1] constructor() - </span> The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.</span> <br/>
                   <br/>

                 <span>  <span style={{fontWeight:'bolder', marginLeft:'30px'}}>2] static getDerivedStateFromProps() </span> - getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing. </span><br/>
                 <br/>
                  <span> <span style={{fontWeight:'bolder',marginLeft:'30px'}}>3] render()</span> - The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.</span><br/> <br/>
                   

              <span style={{marginLeft:'30px'}}> <span style={{fontWeight:'bolder'}}>4] componentDidMount() - </span>
              componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount(). </span><br/>
                


            </div>


        </div>
    )
}

export default Mounting
