import { Layout } from "@/components/custom/layout"
import { Sidebar } from "@/components/sidebar"
import { useState } from "react"

export default function Dashboard() {
  return (
    <Layout>
      <Layout.Header sticky>
        <div>
          <h1>LOGO</h1>
        </div>
      </Layout.Header>
      <Layout.Body>
        <div></div>
      </Layout.Body>
    </Layout>
  )
}
