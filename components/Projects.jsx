import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Thedoctors from '../public/assets/projects/thedoctors.png';
import Thdacademy from '../public/assets/projects/thdacademy.png'
import Minhanutri from '../public/assets/projects/minhanutri.png'
import Stylefigma from '../public/assets/projects/stylefigma.png'
import Allegro from '../public/assets/projects/allegro.png'
import Wilson from '../public/assets/projects/wilson.png'
import Ytrade from '../public/assets/projects/ytrade.png'
import Style from '../public/assets/projects/style.png'
import Twitch from '../public/assets/projects/browse.png'
import Mobilestyle from '../public/assets/projects/mobilestyle.png'
import Figmacria from '../public/assets/projects/figmacria.png'
import Food from '../public/assets/projects/food.png'
import Mobilethd from '../public/assets/projects/mobilethd.png'
import Cria from '../public/assets/projects/cria.png'
import Nubank from '../public/assets/projects/nubank.png'
import Youtube from '../public/assets/projects/youtube.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Thedoctors'
            backgroundImg={Thedoctors}
            projectUrl='https://thedoctorsagencia.com.br/'
            tech='HTML / CSS / JS'
          />
          <ProjectItem
            title='App Twitch'
            backgroundImg={Twitch}
            projectUrl='https://github.com/catarinogabrielle/Twitch'
            tech='Next JS / Tailwind / Next Auth'

          />
          <ProjectItem
            title='App Style'
            backgroundImg={Mobilestyle}
            projectUrl='https://style.ymonetize.com/'
            tech='React Native / Expo / Typescript'

          />
          <ProjectItem
            title='ThdAcademy'
            backgroundImg={Thdacademy}
            projectUrl='https://thdacademy.com/home'
            tech='Next Js / Typescript / Node Js'

          />
          <ProjectItem
            title='App Escola a Bordo'
            backgroundImg={Wilson}
            projectUrl='https://www.figma.com/file/3NRdIoylPHnaGxVVDhLIyc/Escola-a-Bordo?node-id=0-1&t=kd1H94kBpbdcABNu-0'
            tech='Figma'

          />
          <ProjectItem
            title='App ThdAcademy'
            backgroundImg={Mobilethd}
            projectUrl='https://github.com/catarinogabrielle/The.doctors-react-native-mobile'
            tech='React Native / Expo / Typescript'

          />
          <ProjectItem
            title='Allegro Website'
            backgroundImg={Allegro}
            projectUrl='https://catarinogabrielle.github.io/website_allegro/'
            tech='HTML / CSS / JS'

          />
          <ProjectItem
            title='Minha Nutri'
            backgroundImg={Minhanutri}
            projectUrl='https://minha-nutri.vercel.app/'
            tech='HTML / CSS / JS'

          />
          <ProjectItem
            title='UI/UX Dashboard'
            backgroundImg={Figmacria}
            projectUrl='https://www.figma.com/proto/wC9OW2H04LSAqU9WGG1PSy/Dashboard?node-id=401-4&scaling=scale-down&page-id=0%3A1'
            tech='Figma'

          />
          <ProjectItem
            title='App Food'
            backgroundImg={Food}
            projectUrl='https://food-seven-omega.vercel.app/'
            tech='React JS / Tailwind'

          />
          <ProjectItem
            title='App Ytrade'
            backgroundImg={Ytrade}
            projectUrl='https://dev_ytrader.ymonetize.com/home'
            tech='Next JS / Typescript'

          />
          <ProjectItem
            title='App Cria'
            backgroundImg={Cria}
            projectUrl='https://appcria.com/index.php'
            tech='React Js / Node Js'

          />
          <ProjectItem
            title='Style Website'
            backgroundImg={Style}
            projectUrl='https://style.ymonetize.com/'
            tech='Next JS / Typescript'

          />
          <ProjectItem
            title='App Nubank'
            backgroundImg={Nubank}
            projectUrl='https://github.com/catarinogabrielle/Nubank'
            tech='Flutter'

          />
          <ProjectItem
            title='UI/UX Style'
            backgroundImg={Stylefigma}
            projectUrl='https://www.figma.com/file/QOazFBfdm45WdlVrdOVPoE/Ymonetize-style-WEB-(Copy)?node-id=0-1&t=HGckzzSVKQ0IglQC-0'
            tech='Figma'

          />
          <ProjectItem
            title='Youtube Chanel'
            backgroundImg={Youtube}
            projectUrl='https://www.youtube.com/@effect8739/videos'
            tech='Adobe Premier / Affter Effects'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
