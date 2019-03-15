import React from 'react'
import styled from 'styled-components'
import TechItem from './TechItem'

const data = [
  {
    name: 'Node.js',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png'
  },
  {
    name: 'TypeScript',
    logo: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png'
  },
  {
    name: 'Ruby',
    logo: 'https://cdn.worldvectorlogo.com/logos/ruby.svg'
  },
  {
    name: 'Python',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'
  },
  {
    name: 'Golang',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Go_Logo_Aqua.svg/1280px-Go_Logo_Aqua.svg.png'
  },
  {
    name: 'AWS',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2000px-Amazon_Web_Services_Logo.svg.png'
  },
  {
    name: 'GCP',
    logo: 'https://www.gstatic.com/images/branding/product/2x/cloud_512dp.png'
  },
  {
    name: 'kubernetes',
    logo: 'https://avatars1.githubusercontent.com/u/13629408?s=400&v=4'
  },
  {
    name: 'Terraform',
    logo: 'https://www.terraform.io/assets/images/og-image-8b3e4f7d.png'
  },
  {
    name: 'React',
    logo:
      'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
  }
]

interface TechStackProps {}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <Root>
      <h2>Tech Stack</h2>
      <List>
        {data.map((tech, idx) => (
          <TechItem key={idx} name={tech.name} logo={tech.logo} />
        ))}
      </List>
    </Root>
  )
}

export default TechStack
