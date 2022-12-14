import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/LOGO.png' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: 'Proteo Engenharia Elétrica',
    keywords: 'engenharia elétrica, sistema fotovoltaico, painel solar, projetos elétricos, spda, execução',
    description: 'Empresa especializada em projetos elétricos.'
}

export default Meta