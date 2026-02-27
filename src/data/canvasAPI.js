import axios from 'axios'

export async function fetchCourses(token, baseUrl) {
  const res = await axios.get(
    `${baseUrl}/api/v1/courses`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  return res.data
}

export async function fetchAssignments(courseId, token, baseUrl) {
  const res = await axios.get(
    `${baseUrl}/api/v1/courses/${courseId}/assignments`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  return res.data
}