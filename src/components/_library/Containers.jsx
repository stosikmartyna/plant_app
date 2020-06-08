import React from 'react';

export const FlexContainer = ({children}) => {
    const style = {
        display: 'flex',
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}