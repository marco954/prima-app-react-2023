import"./Footer.css"

let Footer=() =>{
    return(
        
        <footer>
            
        <div>
            <a href="##" className="mypage">Mypage</a>
            <div>
                <div className="contact">
                    <ul>
                    <li>Contact</li>
                    <li> Via Roma, 1 - Roma (RM)</li>
                    <li> Cel. 123456789</li>
                    </ul>
                </div>
                <div className="footnav">
                    <a href="##">Mypage</a>
                    <a href="##">Explore</a>
                    <a href="##">why</a>
                    <a href="##">how</a>
                </div>
            </div>
        </div>

            <hr />
            <div className="copy flexbetween">
                <span>© 2023 Bricks Design Kit. All rights reserved</span>
                <div>
                    <i className="fa-brands fa-facebook fa-xl"></i>
                    <i className="fa-brands fa-tiktok fa-xl"></i>
                    <i className="fa-brands fa-instagram fa-xl"></i>
                    <i className="fa-brands fa-linkedin-in fa-xl"></i>
                    <i className="fa-brands fa-twitter fa-xl"></i>
                </div>
            </div>
       
        
    </footer>
    )
}
export default Footer