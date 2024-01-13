import styles from './Button.module.css'

export default function Button({
    title = "",
    bgcolor = "var(--white)",
    textColor = "var(--facebookblue)",
    fontSize = "14px",
    fontWeight = "600",
    imageSrc,
    bgImgSrc,
    logoImgSrc,
}) {
    return (
        <button className={styles.button} 
        style={{backgroundColor: bgcolor, 
            color: textColor,
            fontSize: fontSize,
            fontWeight: fontWeight
            }}
        >
            {imageSrc && <img src={imageSrc} alt="Button Image" className={styles.smButtonImage} />}
            {bgImgSrc && <img src={bgImgSrc} alt="Button Image" className={styles.lgButtonImage} />}
            {logoImgSrc && <img src={logoImgSrc} alt="Button Image" className={styles.logoImgSrc} />}
            {title}
        </button>
    )
}