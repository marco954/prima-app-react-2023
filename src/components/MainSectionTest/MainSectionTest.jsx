import "./MainSectionTest.css"

function MainSectionTest(){
    return(
    <section className="testimonial">
    <h2>Our customers love us</h2>
    <div>
        <svg width="28" height="46" viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.724178 21.2507L20.7518 1.22418C21.7173 0.258607 23.2837 0.258607 24.2493 1.22418L26.5854 3.5603C27.5499 4.52484 27.551 6.08707 26.5895 7.05367L10.7169 22.9995L26.5885 38.9463C27.551 39.9129 27.5489 41.4752 26.5844 42.4397L24.2482 44.7758C23.2827 45.7414 21.7163 45.7414 20.7507 44.7758L0.724178 24.7482C-0.241393 23.7827 -0.241393 22.2163 0.724178 21.2507Z"
                fill="black" />
        </svg>
        <div className="quote flexcenter">

            <div>
                <img src="./assets/Video.png" alt=""/>
                <div>
                    <p>The perfect repo for an inclusive and captivating landing page!</p>
                    <p><b> Luigi</b><span> Designer at CatCare</span></p>
                </div>
            </div>


            <div>
                <img src="./assets/Video (1).png" alt=""/>
                <div>
                    <p>In the company we were looking for a tool that would help us create minimal landing pages
                        and
                        at the
                        same time with a beautiful design and MyPage is all of this.</p>
                    <p><b> Marta</b><span> Developer at VeggyFood</span></p>
                </div>
            </div>
            <div>
                <img src="./assets/Video (2).png" alt=""/>
                <div>
                    <p>MyPage has revolutionized our workflow, we always use it as a starting point for our
                        clients.
                    </p>
                    <p><b> Rahul</b><span> Designer at Peace&Love</span></p>
                </div>
            </div>

        </div>
        <svg width="28" height="46" viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M27.2757 24.7488L7.24881 44.7756C6.28293 45.7415 4.717 45.7415 3.75123 44.7756L1.41542 42.4398C0.451196 41.4756 0.449341 39.9128 1.4113 38.9463L17.283 22.9999L1.4113 7.05367C0.449341 6.08717 0.451196 4.52444 1.41542 3.56021L3.75123 1.22441C4.71711 0.258531 6.28303 0.258531 7.24881 1.22441L27.2756 21.2512C28.2415 22.217 28.2415 23.7829 27.2757 24.7488Z"
                fill="black" />
        </svg>
    </div>
</section>
)
}
export default MainSectionTest