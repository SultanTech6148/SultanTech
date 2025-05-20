import img from "../assets/Blog-Check.png"

function HomeBlog() {
  return (
    <div>
     
        <div id="home-blog-main-container">
            <div id="home-blog-second-main-container">
            <div id="home-blog-left-container">
                <h2>Our Blogs</h2>
                <p>Explore our latest blogs for insights, tips, and updates to keep you informed and inspired.</p>
                <a href="">View More</a>
            </div>
            <div id="home-blog-right-container">
              <div id="blog-box-main-container">
                <div id="blog-img-container">
                  <img src={img} alt="" />
                </div>
                <div id="blog-text-container">
                  <h2>Blog Heading Show Here</h2>
                  <span>19 May 2025</span>
                </div>
              </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default HomeBlog
