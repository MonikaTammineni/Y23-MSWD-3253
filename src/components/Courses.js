import React from 'react'

const courses = () => {
  return (
    <div class="body">
      <h2>Courses</h2>
        <table>
        <thead>
        <tr>
            <td>COURSE CODE</td>
            <td>COURSE NAME</td>
            <td>L-T-P-S</td>
            <td>CTEDITS</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>23SCS06EF</td>    
            <td>MSWD </td>   
            <td>0-0-7-6</td>
            <td>4</td>
        </tr>
        <tr>
            <td>23MT2005</td>    
            <td>PROBABILITY</td>   
            <td>2-0-2-0</td>
            <td>3</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default courses
