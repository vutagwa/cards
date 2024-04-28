import Profile from './assets/pic.jpg'

function Card(){
    return(
        <div className="card">
            <img className="img"src={Profile} alt="Profile picture" />
                <h2 className="title">Meriel</h2>
                <p className="info">I am a student and watch kdramas</p>
        </div>
    );
}
export default Card