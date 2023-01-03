import React, { Component } from "react";
import BackGround from "../assets/glassesImage/background.jpg";
import Model from "../assets/glassesImage/model.jpg"
import Glassesg1 from "../assets/glassesImage/g1.jpg"
import Glassesg2 from "../assets/glassesImage/g2.jpg"
import Glassesg3 from "../assets/glassesImage/g3.jpg"
import Glassesg4 from "../assets/glassesImage/g4.jpg"
import Glassesv1 from "../assets/glassesImage/v1.png"
import Glassesv2 from "../assets/glassesImage/v2.png"
import Glassesv3 from "../assets/glassesImage/v3.png"
import Glassesv4 from "../assets/glassesImage/v4.png"
// import Glassesv5 from "../assets/glassesImage/v5.png"
// import Glassesv6 from "../assets/glassesImage/v6.png"
// import Glassesv7 from "../assets/glassesImage/v7.png"
// import Glassesv8 from "../assets/glassesImage/v8.png"
// import Glassesv9 from "../assets/glassesImage/v9.png"


import styles from "./Glasses.module.css";
console.log(styles)

export default class Glasses extends Component {
    // state = {
    //     glassesImage: Glasses1,
    // };
    // changeGlasses(type){
    //     let newGlasses;
    //     switch (type) {
    //         case "v1":
    //             newGlasses = Glassesg1;
    //             break;
    //         case "v2":
    //                 newGlasses = Glassesg2;
    //                 break;               
    //        case "v3":
    //                     newGlasses = Glassesg3;
    //                     break;  
    //         case "v4":
    //                         newGlasses = Glassesg4;
    //                         break;                    
                            
    //         default;
    //         break;
    //     }
    //     if (!newGlasses) return;
    // this.setState(
    //     {
        
    //         glassesImage: newGlasses,
        
    // },
    // () => {
    //     console.log(this.state.glassesImage);
    // }
    // );
    // }
    
  render() {
    return (
      <div className={styles.container}>
          <img className={styles.thumnail} src={BackGround} alt=""></img>
        <div className="row">        
            <img className={styles.imgleft} src={Model} alt=""></img>     
        </div>
        <div>
            <img className={styles.g1} src={Glassesg1}></img>
            <img className={styles.g2} src={Glassesg2}></img>
            <img className={styles.g3} src={Glassesg3}></img>
            <img className={styles.g4} src={Glassesg4}></img>
            <button onClick={() => {this.changeGlasses('v1')}}>
                <img  className={styles.v1} src={Glassesv1}></img>
            </button>

            <button onClick={() => {this.changeGlasses('v2')}}>
            <img  className={styles.v2} src={Glassesv2}></img>
            </button>

            <button onClick={() => {this.changeGlasses('v3')}}>
            <img  className={styles.v3} src={Glassesv3}></img>
            </button>

            <button onClick={() => {this.changeGlasses('v4')}}>
            <img  className={styles.v4} src={Glassesv4}></img>
            </button>

            {/* <img className={styles.v5} src={Glassesv5}></img>

            <img className={styles.v6} src={Glassesv6}></img>

            <img className={styles.v7} src={Glassesv7}></img>

            <img className={styles.v8} src={Glassesv8}></img>

            <img className={styles.v9} src={Glassesv9}></img> */}



        </div>
      </div>
    );
  }
}
