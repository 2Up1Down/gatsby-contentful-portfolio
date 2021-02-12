// import React, { useState } from "react"
// import Title from "./Title"
// import { FaAngleDoubleRight } from "react-icons/fa"
// import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"

// const query = graphql`
//   {
//     allStrapiJobs {
//       nodes {
//         id
//         strapiId
//         company
//         date
//         position
//         desc {
//           id
//           name
//         }
//       }
//     }
//   }
// `

// const Jobs = () => {
//   const [value, setValue] = useState(0)
//   const data = useStaticQuery(query)
//   const {
//     allStrapiJobs: { nodes: jobs },
//   } = data
//   const { company, date, desc, position } = jobs[value]

//   const jobsTemp = jobs.map((job, index) => (
//     <button
//       key={job.strapiId}
//       className={`job-btn ${index === value && "active-btn"}`}
//       onClick={() => setValue(index)}
//     >
//       {job.company}
//     </button>
//   ))

//   const descTemp = desc.map(item => (
//     <li key={item.id} className="job-desc">
//       <FaAngleDoubleRight className="job-icon" />
//       <p>{item.name}</p>
//     </li>
//   ))

//   return (
//     <section className="section">
//       <Title title="Experience" />
//       <div className="jobs-center">
//         <div className="btn-container">
//           <ul>{jobsTemp}</ul>
//         </div>
//         <article className="job-info">
//           <h3 className="job-info">{position}</h3>
//           <h4 className="job-info">{company}</h4>
//           <p className="job-date">{date}</p>
//           <ul>{descTemp}</ul>
//         </article>
//       </div>
//       <Link className="btn center-btn" to="/about">
//         more info
//       </Link>
//     </section>
//   )
// }

// export default Jobs

import React from "react"
import PropTypes from "prop-types"

const Jobs = props => {
  return <div>hello</div>
}

Jobs.propTypes = {}
