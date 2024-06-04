'use client'
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';


const projectData = [

  {
  
  image: '/work/3.png',
  
  category: 'react js',
  
  name: 'Nexa Website',
  
  description: 'VVCFSSStfhbnkjjhgfdsawertyuiolmnbcfghjkl',
  link: '/',
  github:'/',
  },
  
  {
  
      image: '/work/3.png',
      
      category: 'react js',
      
      name: 'Nexa Website',
      
      description: 'VVCFSSStfhbnkjjhgfdsawertyuiolmnbcfghjkl',
      link: '/',
      github:'/',
      },

  {
  
      image: '/work/3.png',
      
      category: 'react js',
      
      name: 'Nexa Website',
      
      description: 'VVCFSSStfhbnkjjhgfdsawertyuiolmnbcfghjkl',
      link: '/',
      github:'/',
      },

  {
  
      image: '/work/3.png',
      
      category: 'react js',
      
      name: 'Nexa Website',
      
      description: 'VVCFSSStfhbnkjjhgfdsawertyuiolmnbcfghjkl',
      link: '/',
      github:'/',
      },

  {
  
      image: '/work/3.png',
      
      category: 'react js',
      
      name: 'Nexa Website',
      
      description: 'VVCFSSStfhbnkjjhgfdsawertyuiolmnbcfghjkl',
      link: '/',
      github:'/',
      },

  {
  
      image: '/work/3.png',
      
      category: 'react js',
      
      name: 'Nexa Website',
      
      description: 'VVCFSSStfhbnkjjhgfdsawertyuiolmnbcfghjkl',
      link: '/',
      github:'/',
      },

  {
  
      image: '/work/3.png',
      
      category: 'react js',
      
      name: 'Nexa Website',
      
      description: 'VVCFSSStfhbnkjjhgfdsawertyuiolmnbcfghjkl',
      link: '/',
      github:'/',
      },

  {
  
      image: '/work/3.png',
      
      category: 'react js',
      
      name: 'Nexa Website',
      
      description: 'VVCFSSStfhbnkjjhgfdsawertyuiolmnbcfghjkl',
      link: '/',
      github:'/',
      },
];

const uniqueCategories = [

  'all projects',
  
  ...new Set(projectData.map((item) => item.category)),
  
];


const Projects = () => {
      const [categories, setCategories] = useState(uniqueCategories);
      const [category,setCategory] = useState('all projects');
      const filteredProjects = projectData.filter((project) =>{
        return category === 'all projects'
        ? project
        : project.category === category;
      });

      return (
        <section className='min-h-screen pt-12' >
          <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
            My Projects
            </h2>
            {/*tabs*/}
            <Tabs defaultValue={category} className='mb-12 xl:mb-12'>
              <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                {categories.map((category, index) => {
                  return(
                  <TabsTrigger
                  onClick={()=> setCategory(category)}
                  value={category} 
                  key={index} 
                  className='capitalize w-[162px] md:w-auto'
                  >
                    {category}
                    </TabsTrigger>
                 );
                })}
              </TabsList>
              {/* content */}
              <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                  {filteredProjects.map((project, index) => {

                  return (

                      <TabsContent value={category} key={index} >

                      <ProjectCard project={project} />

                      </TabsContent>

                  );

                  })}
              </div>
            </Tabs>
          </div>
        </section>
      );
};

export default Projects;