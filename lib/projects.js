import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

function processMarkdown(data) {
  return remark().use(html).process(data)
}

export async function getProjectsData(type) {
  const projectsDirectory = path.join(process.cwd(), 'projects/') + type
  const fileNames = fs.readdirSync(projectsDirectory)

  const allProjectsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '')

      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const matterResult = matter(fileContents)

      const processedMarkdown = await processMarkdown(matterResult.content)

      const fixedText = String(processedMarkdown).replace(/<a /g, `<a target="_blank" `)

      return {
        id,
        text: fixedText,
        ...matterResult.data,
      }
    })
  )

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
