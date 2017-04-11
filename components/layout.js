import Head from 'next/head'
import { Grid } from 'react-bootstrap'
import stylesheet from '../styles/index.scss'

export default ({ children, title = 'Clnddr' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Grid>

      { children }

      <footer>
        by <a href="github.com/zerojargon/" target="_blank">Ralph Lawrence</a>
      </footer>
    </Grid>
  </div>
)
