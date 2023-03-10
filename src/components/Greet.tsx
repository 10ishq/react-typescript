import React from 'react'

type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <h1>Welcome {props.name}! messageCount = {props.messageCount} {props.isLoggedIn?"loggedin":"loggedOut"}</h1>
  )
}

export default Greet