import React from 'react'

export default function Card(ele) {
    // console.log(ele)
  return (
    <div>
        <div className="card text-left">
          {/* <img className="card-img-top" src="" alt="" /> */}
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
    </div>
  )
}
