import * as React from "react"

import { Link, navigate } from "gatsby";
import Header from "../components/Header";
import Layout from "../components/Layout";



// markup
const IndexPage = () => {
  return (

    <Layout Headertitle ="Index Page">
      <Header title="Index Page" />
      <br></br>
      Hello Wordl
      <br />
      <Link to='/about'>About</Link>
      <br />
      <button onClick={() => {
        navigate('/about')
      }}>About Page</button>

    </Layout>
  )
}

export default IndexPage
