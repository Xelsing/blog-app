import React from 'react'
import cl from './MySelect.module.css'

const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            className={cl.mySelector}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option className={cl.myOptions} disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option className={cl.myOptions} key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default MySelect