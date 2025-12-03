import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh",
      color: "white",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1>404: Page Not Found</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <Link to="/" style={{ color: "white", textDecoration: "underline" }}>
        Go back to the homepage
      </Link>
    </div>
  )
}

export default NotFoundPage



