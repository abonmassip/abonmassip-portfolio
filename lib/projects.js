import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'projects');

function processMarkdown(data) {
  return remark()
    .use(html)
    .process(data)
}

async function asyncFunction(item) {
  return processMarkdown(item);
}

export async function getProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjectsData = await Promise.all(fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '');
    
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedMarkdown = await processMarkdown(matterResult.content);

    return {
      id,
      text: processedMarkdown.toString(),
      ...matterResult.data,
    }
  }));

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}