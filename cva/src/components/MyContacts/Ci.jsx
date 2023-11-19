import "./Ci.scss"
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
const Ci = () => {

    const animationCi = { 
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

  return (
		<motion.div initial=' hidden' whileInView={'visible'} className='Ci'>
			<motion.div variants={animationCi} className='mainCi'>
				<motion.div variants={animationCi} className='imgLogo'>
					<Link
						to={
							'https://tashkent.hh.uz/resume/a79b3cd6ff0c789a940039ed1f524d73746670'
						}
					>
						<motion.img
							variants={animationCi}
							src='https://upload.wikimedia.org/wikipedia/commons/7/79/HeadHunter_logo.png'
							alt=''
						/>
					</Link>
				</motion.div>
				<motion.div variants={animationCi} className='imgLogo'>
					<Link
						to={'https://www.linkedin.com/in/ismoil-sayfitdinov-aba73a293/'}
					>
						<motion.img
							variants={animationCi}
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png'
							alt=''
						/>
					</Link>
				</motion.div>
				<motion.div variants={animationCi} className='imgLogo'>
					<Link to={'https://web.telegram.org/k/#@FullstackdevRDJP'}>
						<motion.img
							variants={animationCi}
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/800px-Telegram_Messenger.png'
							alt=''
						/>
					</Link>
				</motion.div>
				<motion.div variants={animationCi} className='imgLogo'>
					<Link to={'https://github.com/IsmoilSayfitdinov'}>
						<motion.img
							variants={animationCi}
							src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
							alt=''
						/>
					</Link>
				</motion.div>
				<motion.div variants={animationCi} className='imgLogo'>
					<Link to={'https://www.instagram.com/__.theone__uzb/'}>
						<motion.img
							variants={animationCi}
							src='https://freepngimg.com/thumb/instagram/118541-logo-instagram-png-download-free.png'
							alt=''
						/>
					</Link>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default Ci