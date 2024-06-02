// @flow
import * as React from 'react';
import logo from "../assets/images/logo.png";
import picture from "../assets/images/picture.png";
import dog from "../assets/images/dog.png";

type Props = {

};
export const SnDimych = (props: Props) => {
    return (
        <div className="App-wrapper">
            <header className={'header'}>
                <img src={logo} alt="logo"/>
            </header>
            <aside className={'sidebar'}>
                <nav>
                    <ul>
                        <li>
                            <a href="">Profile</a>
                        </li>
                        <li>
                            <a href="">Messages</a>
                        </li>
                        <li>
                            <a href="">News</a>
                        </li>
                        <li>
                            <a href="">Music</a>
                        </li>
                        <li>
                            <a href="">Settings</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <section className={'content'}>
                <img src={picture} alt="picture"/>
                <div>
                    <img src={dog} alt="dog"/>
                    <h1>Kristina T.</h1>
                    <p>Bate of birth: 6.12</p>
                    <p>City: Brest</p>
                    <p>Education: it-incubator</p>
                </div>
                <form>
                    <p>My posts</p>
                    <input/>
                    <button>Send</button>
                </form>
            </section>
        </div>
    );
};