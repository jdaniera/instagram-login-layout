import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Form from '@/components/Form'
import Button from '@/components/Button'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        <div className={styles.layout}> 
        <div className={styles.demo}>
          <Image src={'/images/demo.png'} alt="instagram demo on phone" width={395} height={611} priority/>
        </div>
        <div>
        <div className={styles.loginBox}>
            <div className={styles.logo}>
              <Button logoImgSrc='/images/logo-text.png'/>
            </div>
            <Form/>
            <div>
                <h5 className={styles.h5Line}><span>OR</span></h5>
            </div>

            <Button imageSrc='/images/facebook.png'
                title="Log in with Facebook"/>
            <br/>
            <Button title="Forgot Password?" 
                        fontSize='12px' fontWeight='normal'/>
        </div>
        <div className={styles.signUpBox}>
          Don't have an account? 
          <Button title="Sign Up" 
              textColor='var(--lightblue)'/>
        </div>

        <div className={styles.downloadApp}>
            <div>Get the app.</div>
        </div>
        <div className={styles.downloadButtons}>
          <Button className={styles.appleButton}
              bgImgSrc='/images/apple.png'/>
          <Button className={styles.googleButton}
              bgImgSrc='/images/google.png'/>
        </div>
        </div>
      </div>
      </main>
      <div className={styles.footerArea}>
       <Footer/>
      </div>
    </>
  )
}
