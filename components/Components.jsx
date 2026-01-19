import React from 'react'

export const Component = ({param1, param2}) => {
    const var1 = param1 + param2

    return (
        <React.Fragment>
            <h4>I am just a simple component</h4>
            <h5>{param1} + {param2} = {var1}</h5>
        </React.Fragment>
    )
}
