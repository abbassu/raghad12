import React from "react";
const news = () => {
return (
<div className ="news_conteiner">
    <div className ="news_header">
        <h4>Today's news</h4>
    </div>
    <div className="news_Body">
        <p>Ten questions you should<br>answer trithfully</br>2hr</p>
        <p>Five unbelievable facts about<br>money</br>2hr</p>
        <p>Best pinterest Boards for<br>learning about business</br>2hr</p>
        <p>Skills that you can learn from<br>business</br>2hr</p>
    </div>
    <div className="news_down">
        <button className="news_button">view all latest news</button>
    </div>
</div>
);
}
export default news;