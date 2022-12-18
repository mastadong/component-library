import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { children, backgroundColor, color, style } = props;

    // If a style wasn't defined, use the default CSS properties.  If it was, overwrite
    // the style properties being called out while inheriting the rest of the default CSS
    // properties.
    let _style: React.CSSProperties = style || {};

    /** Override defaults */
    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <button style={_style} {...props}>
            {children}
        </button>
    );
};
