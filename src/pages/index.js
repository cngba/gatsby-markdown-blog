import * as React from "react"
import Layout from "../components/layout"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const HomePage = () => {
  
  return (
    <Layout>
      <p>Welp for now, there is nothing to read yet?
        
      </p>
    </Layout>
  )
}

export const Head = () => <title>CNB Blog</title>

export default HomePage
