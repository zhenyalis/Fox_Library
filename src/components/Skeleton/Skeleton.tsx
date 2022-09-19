import React from "react"
import ContentLoader from "react-content-loader"
import styled from "styled-components"

export const Skeleton = () => (
  <SkeletonWrapper>
      <ContentLoader 
        speed={2}
        width={260}
        height={185}
        viewBox="0 0 260 185"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="92" y="106" rx="0" ry="0" width="1" height="0" /> 
        <rect x="203" y="4" rx="0" ry="0" width="0" height="1" /> 
        <rect x="3" y="0" rx="8" ry="8" width="126" height="185" /> 
        <rect x="225" y="13" rx="0" ry="0" width="4" height="5" /> 
        <rect x="145" y="0" rx="8" ry="8" width="100" height="26" /> 
        <rect x="134" y="56" rx="0" ry="0" width="122" height="19" /> 
        <rect x="134" y="100" rx="0" ry="0" width="122" height="16" /> 
        <rect x="134" y="126" rx="0" ry="0" width="19" height="19" /> 
        <rect x="159" y="126" rx="0" ry="0" width="19" height="19" /> 
        <rect x="184" y="126" rx="0" ry="0" width="19" height="19" /> 
        <rect x="209" y="127" rx="0" ry="0" width="19" height="19" /> 
        <rect x="234" y="127" rx="0" ry="0" width="19" height="19" /> 
        <rect x="134" y="153" rx="8" ry="8" width="122" height="32" />
      </ContentLoader>
  </SkeletonWrapper>
  
)

export const SkeletonWrapper = styled.div`
    display: flex;
    min-width: 256px;
    height: 185px;
    margin-left: 32px;
    margin-top: 48px;
    flex-grow: 1;
`

