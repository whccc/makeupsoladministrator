import React from 'react' 
import {Input} from './styles'

export const Inputs =({
    type,
    placeholder
})=>{
    return <Input type={type} placeholder={placeholder} />
}