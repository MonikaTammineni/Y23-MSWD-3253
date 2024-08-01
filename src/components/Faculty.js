import React from 'react'

const faculty = () => {
  return (
    <div class="body">
        <h2>Faculty</h2>
        <table>
        <thead>
        <tr>
            <td>NAME</td>
            <td>FACULTY ID</td>
            <td>DEPARTMENT</td>
            <td>DESIGNATION</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Dr. Ramesh</td>    
            <td>1023 </td>   
            <td>CSE</td>
            <td>XYZ</td>
        </tr>
        <tr>
            <td>Dr. ABC</td>    
            <td>1234 </td>   
            <td>CSE</td>
            <td>POE</td>
        </tr>
        <tr>
            <td>Dr. Nithya</td>    
            <td>5432 </td>   
            <td>CSE</td>
            <td>YOS</td>         
        </tr>
        
        </tbody>
      </table>
    </div>
  )
}

export default faculty
