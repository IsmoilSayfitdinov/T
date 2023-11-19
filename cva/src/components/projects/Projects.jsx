import "./Projects.scss"
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
const Projects = () => {

  const animatinBlock = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
		<motion.div
		id="projects"
			initial='hidden'
			whileInView={'visible'}
			className='mainProjects'
		>
			<motion.div className='Projects'>
				<motion.div variants={animatinBlock} className='text'>
					<motion.h2 variants={animatinBlock}>Projects</motion.h2>
				</motion.div>
				<motion.div variants={animatinBlock} className='PrBlock'>
					<motion.div variants={animatinBlock} className='Blokc'>
						<div className='imgBlock'>
							<Link to={'https://spotifys.netlify.app/'}>
								<img
									src='https://www.freeiconspng.com/uploads/spotify-icon-0.png'
									alt=''
								/>
							</Link>
						</div>
						<div className='textImg'>
							<p>Spotify</p>
						</div>
					</motion.div>
					<motion.div variants={animatinBlock} className='Blokc'>
						<div className='imgBlock'>
							<Link to={'https://react-homework-sigma.vercel.app/'}>
								<img src='https://pngimg.com/d/letter_m_PNG77.png' alt='' />
							</Link>
						</div>
						<div className='textImg'>
							<p>MOLD</p>
						</div>
					</motion.div>
					<motion.div variants={animatinBlock} className='Blokc'>
						<div className='imgBlock'>
							<Link to={'https://whimsical-mooncake-a9cbf7.netlify.app/'}>
								<img
									src='https://icon-library.com/images/menus-icon/menus-icon-6.jpg'
									alt=''
								/>
							</Link>
						</div>
						<div className='textImg'>
							<p>Menu</p>
						</div>
					</motion.div>
					<motion.div variants={animatinBlock} className='Blokc'>
						<div className='imgBlock'>
							<Link to={'https://unique-parfait-bb1f97.netlify.app'}>
								<img
									src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png'
									alt=''
								/>
							</Link>
						</div>
						<div className='textImg'>
							<p>Shop</p>
						</div>
					</motion.div>
					<motion.div variants={animatinBlock} className='Blokc'>
						<div className='imgBlock'>
							<Link to={'https://melodious-semolina-f1f3e1.netlify.app/'}>
								<img
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMU7GGaE3bpzFNcpM8LAv9dLQUNhNg2FA0tao7DcVKzPdIy6Pmqhf6NhWr78hGpRJLzY&usqp=CAU'
									alt=''
								/>
							</Link>
						</div>
						<div className='textImg'>
							<p>Mebel </p>
						</div>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default Projects