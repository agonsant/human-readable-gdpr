/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, customElement, property, css} from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    @import url('https://fonts.googleapis.com/css?family=Arimo:400,700&display=swap');
    h2{
      color:#000;
      text-align:center;
      font-size:2em;
    }
    .wrapper{
      display:flex;
      flex-direction: column;
      align-items: center;
    }
    .tab{
      cursor: pointer;
      padding:10px 20px;
      margin:0px 2px;
      background:#000;
      display:inline-block;
      color:#fff;
      border-radius:3px 3px 0px 0px;
      box-shadow: 0 0.5rem 0.8rem #00000080;
    }
    .panels{
      background:#fffffff6;
      box-shadow: 0 2rem 2rem #00000080;
      min-height:200px;
      width:40%;
      border-radius:3px;
      overflow:hidden;
      padding:20px;  
    }
    .panel{
      display:none;
      animation: fadein .8s;
    }
    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    .panel-title{
      font-size:1.5em;
      font-weight:bold;
      text-align: center;
    }
    .radio{
      display:none;
    }
    #one:checked ~ .panels #one-panel,
    #two:checked ~ .panels #two-panel,
    #three:checked ~ .panels #three-panel,
    #four:checked ~ .panels #four-panel{
      display:block
    }
    #one:checked ~ .tabs #one-tab,
    #two:checked ~ .tabs #two-tab,
    #three:checked ~ .tabs #three-tab,
    #four:checked ~ .tabs #four-tab{
      background:#fffffff6;
      color:#000;
      border-top: 3px solid #000;
    }

    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      border: black;
      border-radius: 0.5em;
      border-style: solid;
      transition: 0.3s;
      flex: 1 0 25%;
      margin: 5px;
      padding: 5px;
      color: dodgerblue;
    }

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    img {
      border-radius: 5px 5px 0 0;
    }

    .items{
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: stretch;
      text-align: center;
      justify-content: space-between;
      padding-top: 10px;
      margin-left: 100px;
      margin-right: 100px;
    }

    .icon{
      width:100px;
      padding-top:10px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * Data elements for first panel.
   */
  @property({type: Array})
  data = [];

  /**
   * Image elements for first panel.
   */
  @property({type: Array})
  images = [""];

  render() {
    return html`
      <div class="wrapper">
        <input class="radio" id="one" name="group" type="radio" checked>
        <input class="radio" id="two" name="group" type="radio">
        <input class="radio" id="three" name="group" type="radio">
        <input class="radio" id="four" name="group" type="radio">
        <div class="tabs">
          <label class="tab" id="one-tab" for="one">Qué datos obtenemos de ti</label>
          <label class="tab" id="two-tab" for="two">Uso de tus datos</label>
          <label class="tab" id="three-tab" for="three">Tus datos</label>
          <label class="tab" id="four-tab" for="four">¿Cómo protegemos tus datos?</label>
        </div>
        <div class="panels">
          <div class="panel" id="one-panel">
            <div class="panel-title">Qué datos obtenemos de ti</div>
            <div class="items">
              ${this.data.map((e, i) => 
                html`
                  <div class="card">
                    <img src="${this.images[i]}" alt="Avatar" class="icon">
                    <h4><b>${e}</b></h4>   
                  </div>
                `)}
                </div>
          </div>
          <div class="panel" id="two-panel">
            <div class="panel-title">Uso de tus datos</div>
            <p>You will learn many aspects of styling web pages! You’ll be able to set up the correct file structure, edit text and colors, and create attractive layouts. With these skills, you’ll be able to customize the appearance of your web pages to suit your every need!</p>
          </div>
          <div class="panel" id="three-panel">
            <div class="panel-title">Tus datos</div>
            <p>We recommend that you complete Learn HTML before learning CSS.</p>
          </div>
          <div class="panel" id="four-panel">
            <div class="panel-title">¿Cómo protegemos tus datos?</div>
            <p>We recommend that you complete Learn HTML before learning CSS.</p>
          </div>
        </div>
      </div>
      <slot></slot>
    `;
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
