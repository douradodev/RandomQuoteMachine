import Link from 'next/link'
import styles from '../../styles/First.module.css'
import Image from 'next/image'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <div className = {styles.container}>
      <Head>
        <title>Victor Dourado</title>
      </Head>
      <h1>Minha primeira página</h1>
      <Image
        src = "/images/minhatela.jpeg"
        height= {144}
        width= {144}
        alt='Victor Dourado'
      />
      
      <h2 className = {styles.mark} >Voltar para a <Link href = '/'><a>página primária</a></Link></h2>
    </div>

  )
}
