import React from 'react'

export const Component = () => {
    let var1 = "Variable";
    const var2 = "Constant variable";
    const param = var1 + var2

    return (
        <React.Fragment>
            <h4>I am just a simple component</h4>
            <h5>{var1} + {var2} = {param}</h5>
        </React.Fragment>
    )
}
