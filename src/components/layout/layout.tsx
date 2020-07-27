import React, { FunctionComponent } from "react"
import { Nav } from "../nav/nav"
import { Header } from "../header/header"
import { Container } from "../container/container"
import "./layout.css"

export interface LayoutProps {
  pageTitle: string
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = props => (
  <div className="layout">
    <Container>
      <Header text={props.pageTitle} />
      {props.children}
    </Container>
  </div>
)
