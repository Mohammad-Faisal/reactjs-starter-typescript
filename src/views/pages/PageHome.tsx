import * as React from 'react';

interface Props {
    name? : string;
}


export const  PageHome  : React.FC<Props> = (props)  =>  {

    return (
        <div> This is home page</div>
    )
}
