import imgMe from '../../assets/photo_2023-11-17_21-14-36.jpg'
import './Banner.scss'
import {motion} from "framer-motion"
const Banner = () => {

  const textA = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  } 

  return (
		<motion.div id='about' initial='hidden' whileInView={'visible'} className='ManiBanner'>
			<div className='maintext'>
				<motion.h1 variants={textA}>About Me</motion.h1>
				<motion.div variants={textA} className='imgbanner'>
					<img src={imgMe} alt='' />
					<div className="myAboutsAge">
						<h2>Ismoil Sayfitdinov</h2>
						<p>04.08.2008</p>
					</div>
				</motion.div>
				<div className='textAboutMe'>
					<motion.h2 variants={textA}>
						Frontend Strong Junior developer{' '}
					</motion.h2>
					<motion.p variants={textA}>
						I am a frontend developer, I have been interested in programming
						since I was 10 years old and I entered the world of programming when
						I was 14 years old. In this world of programming, I learned about
						site conditions, data structures. I can get along well with people.
						I can work with Arrays and objects I know DOM well I can do media I
						know data structures well
					</motion.p>
				</div>
			</div>
			<motion.div variants={textA} className='imgBanner'>
				<img
					src='https://cdn.sanity.io/images/tlr8oxjg/production/ee9149cdd64acf761e5087f52adeaf7aa0d2f600-1456x816.png?w=3840&q=100&fit=clip&auto=format'
					alt=''
				/>
			</motion.div>
		</motion.div>
	)
}

export default Banner