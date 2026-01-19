export const Component2 = ({ param1, param2}) => {
    // 1.
    let context;
    if(!param1 && param2) 
        context = <div>I am showing up if param1 is FALSE and param2 is TRUE</div>

    return (
        <>
            {/* 2. */}
            {param1 ?  (
                <div>I am showing up if param1 is TRUE</div>
            ) : (
                <div>I am showing up if param1 is FALSE</div>
            )}
            { /* 3. */}
            {param2 && (
                <div>I am showing up if param2 is TRUE</div>
            )}
            {/* 1. kontynuacja*/}
            {context}
        </>
    )
}
