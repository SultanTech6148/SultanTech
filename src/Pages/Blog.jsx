import Footer from '../Component/Footer';
import Img from '../assets/Blog-Check.png'

function BlogCard(){
  return<>
  <div id="home-blog-right-container">
                    <div id="blog-box-main-container">
                      <div id="blog-img-container">
                        <img src={Img} alt="" />
                      </div>
                      <div id="blog-text-container">
                        <h2>Blog Heading Show Here</h2>
                        <span>19 May 2025</span>
                      </div>
                    </div>
                  </div>
  </>
}

function Blog() {
  return (
    <>
     <div id="Blog-page-main-heading">
        <h1>Our Blogs</h1>
      </div>
    <div id="blog-page-main-container">
      <div id="blog-page-second-main-container">
      <BlogCard/>
      </div>

    </div>
    <Footer/>
</>
  );
}

export default Blog;
