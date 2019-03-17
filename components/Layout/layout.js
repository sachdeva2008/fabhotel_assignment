import React from 'react'
import Head from 'next/head'

const Layout = ({children}) =>{
  return (
    <div className="container">
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
    </Head>
        {children}
    </div>
  )
}

export default Layout;