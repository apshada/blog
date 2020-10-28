import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          <div style={{ display : 'flex' , justifyContent : "space-between"}}>
  <img src="https://devicons.github.io/devicon/devicon.git/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> 
   <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/>
  <img src="https://devicons.github.io/devicon/devicon.git/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>  
  <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/>
   <img src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg" alt="gastby" width="40" height="40"/> 
   <img src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
    <img src="https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> 
    </div>


        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
