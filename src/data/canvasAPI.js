import axios from 'axios'

export async function fetchCourses(token, baseUrl) {
  console.log("print debug in fetchCourses")
  console.log('BASE URL:', baseUrl)
console.log('FULL URL:', `${baseUrl}/api/v1/courses`)
  const res = await axios.get(
    `${baseUrl}/api/v1/courses?enrollment_state=active`,
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