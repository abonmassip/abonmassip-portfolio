import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getProjects() {
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjectsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    console.log(matterResult);

    return {
      id,
      ...matterResult.data,
    }
  })

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}