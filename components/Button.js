import { Add, ArrowRight, Cancel, Check, Edit, Logout, Person } from '@mui/icons-material'
import React from 'react'

const Button = (props) => {

    switch(props.type)
    {
        case "logout":
            return(
                <div className='buttons border-secondary bg-white50'>
                    <Logout className="text-lg text-primary" />
                    <p className='text-primary'>Logout</p>
                </div>
            )

        case "primary":
            return(
                <div className='buttons border-secondary bg-primary'>
                    <p className='text-white50'>{props.label}</p>
                    <ArrowRight className="text-xl text-white50" />
                </div>
            )

        case "text":
            return(
                <div className='cursor-pointer text-base text-primary underline'>{props.label}</div>
            )

        case "profile":
        return(
            <div className='buttons border-secondary gap-2 bg-primary'>
                <Person className="text-lg text-white50" />
                <p className='text-white50'>Profile</p>
            </div>
        )

        case "add":
        return(
            <div className='buttons border-secondary gap-2 bg-primary'>
                <Add className="text-lg text-white50" />
                <p className='text-white50'>{props.label}</p>
            </div>
        )

        case "edit":
        return(
            <div className='buttons border-secondary bg-primary'>
                <Edit className="text-lg text-white50" />
                <p className='text-white50'>{props.label}</p>
            </div>
        )

        case "accept":
        return(
            <div className='buttons border-green bg-green'>
                <Check className="text-lg text-white50" />
                <p className='text-white50'>{props.label}</p>
            </div>
        )

        case "decline":
        return(
            <div className='buttons border-red bg-red'>
                <Cancel className="text-lg text-white50" />
                <p className='text-white50'>{props.label}</p>
            </div>
        )
    }
}

export default Button