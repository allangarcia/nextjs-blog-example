import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async (context) {
  return {
    redirect: {
      destination: '/',
      permanent: true, // triggers 308
    },
  }
}
