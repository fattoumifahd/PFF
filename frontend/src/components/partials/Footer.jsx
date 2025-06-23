export default function Footer() {
  return (
    <footer className="mt-5">
      <div className="d-flex d-flex justify-content-between">
        <div className="d-flex flex-column justify-content-center">
          <h3>About</h3>
          <div> </div>
          <div><i className="fa-solid fa-location-dot" style={{fontSize: 'large' }}></i> Location</div>
          <div>NBA</div>
        </div>
        <div>
          <h2>Social Media</h2>
          <div><i className="fa-brands fa-facebook"></i> FaceBook</div>
          <div><i className="fa-brands fa-instagram"></i> Instagram</div>
          <div><i className="fa-brands fa-twitter"></i> Twitter</div>
        </div>
      </div>
    </footer>
  )
}
