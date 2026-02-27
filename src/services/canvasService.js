import { fetchCourses, fetchAssignments } from '../data/canvasAPI.js'
import { createCourse } from '../factories/courseFactory.js'

export async function getCanvasDomainData(token, baseUrl) {
  const rawCourses = await fetchCourses(token, baseUrl)

  const domainCourses = []

  for (const course of rawCourses) {
    const rawAssignments = await fetchAssignments(
      course.id,
      token,
      baseUrl
    )

    const domainCourse = createCourse(course, rawAssignments)
    domainCourses.push(domainCourse)
  }

  return domainCourses
}