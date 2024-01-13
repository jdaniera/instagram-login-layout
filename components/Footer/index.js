import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                <ul>
                    <li><Link href="/">Meta</Link></li>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Blog</Link></li>
                    <li><Link href="/">Jobs</Link></li>
                    <li><Link href="/">Help</Link></li>
                    <li><Link href="/">API</Link></li>
                    <li><Link href="/">Privacy</Link></li>
                    <li><Link href="/">Terms</Link></li>
                    <li><Link href="/">Locations</Link></li>
                    <li><Link href="/">Instaram Lite</Link></li>
                    <li><Link href="/">Threads</Link></li>
                    <li><Link href="/">Contact Uploading & Non-Users</Link></li>
                    <li><Link href="/">Meta Verified</Link></li>
                </ul>
            </div>
            <div>
                © 2024 Instagram from Meta
            </div>
      </footer>
    )
}