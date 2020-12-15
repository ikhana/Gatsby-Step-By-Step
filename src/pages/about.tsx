import * as React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import styles from './about.module.css';



// markup
const About = () => {
  return (

    <Layout Headertitle="About Page ">
      <div>
        About Div Page 
      </div>
      <br/>
      <div className={styles.myTitle}>
        About Div Page2
      </div>
    </Layout>




  )
}

export default About