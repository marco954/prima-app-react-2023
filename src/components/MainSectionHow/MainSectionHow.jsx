import "./MainSectionHow.css"

function MainSectionHow(){

    return(
        <section className="Sectionhow">
            <h2>How does this work?</h2>
            <h4>Create you website in 3 easy steps!</h4>
            <div className="how">
                <div>
                    <span>01</span>
                    <h3>Clone</h3>
                    <p>Clone the repository from Github, the code is public and constantly evolving thanks to the
                        community
                        that supports us.</p>
                </div>
                <div>
                    <span>02</span>
                    <h3>Customize</h3>
                    <p>Add your own content and pay attention to the graphic changes you make. Always check if the
                        minimum
                        contrast is sufficient, if the font is accessible and if the focus is visible.</p>
                </div>
                <div>
                    <span>03</span>
                    <h3>Go live</h3>
                    <p>Once all the customizations have been made, all that remains is to upload the site online. If you
                        need help, don't hesitate to contact us!</p>
                </div>
            </div>
        </section>
    )
}
export default MainSectionHow