import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { randomNumberGenerator } from '../../lib/gravatar'

export async function getServerSideProps(context) {
  const texto = randomNumberGenerator().toUpperCase()
  return {
    props: {
      texto,
    },
  }
}

export default function FistPost({ texto }) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>
        Officia quis Lorem sint nulla non officia amet proident. Commodo
        voluptate ut aute ipsum. Aliquip labore elit veniam non et magna
        exercitation. Eu ea cillum voluptate in ullamco sunt cillum esse et.
      </p>
      <p>Random Element: {texto}</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
