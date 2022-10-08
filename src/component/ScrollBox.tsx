// import React, { Component } from 'react';

/* App.js

import './App.css';
import React from 'react';
import { Component } from 'react';
import ScrollBox from './component/ScrollBox';


class App extends Component {

  render() {
    return (
      <>
        <ScrollBox ref={(ref) => this.scrollBox = ref} />

        <button onClick={() => this.scrollBox.ScrollToTop()}>맨 위로</button>
        <button onClick={() => this.scrollBox.ScrollToCenter()}>중간으로</button>
        <button onClick={() => this.scrollBox.ScrollToBottom()}>맨 밑으로</button>
      </>
    );
  }
}

export default App;


*/
// class ScrollBox extends Component {
//     ScrollToTop = () => {
//         this.box.scrollTop = 0;
//     }

//     ScrollToCenter = () => {
//         const { scrollHeight, clientHeight } = this.box;
//         this.box.scrollTop = (scrollHeight - clientHeight) / 2;
//     }

//     ScrollToBottom = () => {
//         const { scrollHeight, clientHeight } = this.box;
//         this.box.scrollTop = scrollHeight - clientHeight;
//     }

//     render() {
//         const style = {
//             border: '1px solid black',
//             height: '300px',
//             width: '300px',
//             overflow: 'auto',
//             position: 'relative'
//         };

//         const innerStyle = {
//             width: '100%',
//             height: '650px',
//             background: 'linear-gradient(white, black)'
//         }

//         return (
//             <div
//                 style={style}
//                 ref={(ref) => { this.box = ref }}
//             >
//                 <div style={innerStyle} />
//             </div>
//         );
//     }
// }
const ScrollBox: Function = () => {
    return <div></div>
};
export default ScrollBox;