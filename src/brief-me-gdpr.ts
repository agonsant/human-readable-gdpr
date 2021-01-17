import { LitElement, html, customElement, property, css, TemplateResult } from 'lit-element';
import { DataManagement, DataUsage, ProtectionData, UserData } from './model';

/**
 * A Web Component for a human readable GDPR compliance
 */
@customElement('brief-me-gdpr')
export class BriefMeGDPR extends LitElement {
  static styles = css`
    h2 {
      color: #000;
      text-align: center;
      font-size: 2em;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .tab {
      cursor: pointer;
      padding: 10px 20px;
      margin: 0px 2px;
      background: #000;
      display: inline-block;
      color: #fff;
      border-radius: 3px 3px 0px 0px;
      box-shadow: 0 0.5rem 0.8rem #00000080;
    }
    .panels {
      background: #fffffff6;
      box-shadow: 0 2rem 2rem #00000080;
      min-height: 200px;
      max-width: 945px;
      border-radius: 3px;
      overflow: hidden;
      padding: 20px;
    }
    .panel {
      display: none;
      animation: fadein 0.8s;
    }
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .panel-title {
      font-size: 1.5em;
      font-weight: bold;
      text-align: center;
    }
    .radio {
      display: none;
    }
    #one:checked ~ .panels #one-panel,
    #two:checked ~ .panels #two-panel,
    #three:checked ~ .panels #three-panel,
    #four:checked ~ .panels #four-panel {
      display: block;
    }
    #one:checked ~ .tabs #one-tab,
    #two:checked ~ .tabs #two-tab,
    #three:checked ~ .tabs #three-tab,
    #four:checked ~ .tabs #four-tab {
      background: #fffffff6;
      color: #000;
      border-top: 3px solid #000;
    }

    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border: black;
      border-radius: 0.5em;
      border-style: solid;
      transition: 0.3s;
      flex: 1 0 25%;
      margin: 5px 15px 5px 15px;
      color: dodgerblue;
    }

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
    }

    img {
      border-radius: 5px 5px 0 0;
    }

    .items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      text-align: center;
      justify-content: space-between;
      padding-top: 10px;
      margin-left: 80px;
      margin-right: 80px;
    }

    .icon {
      width: 100px;
      padding-top: 10px;
    }

    .container {
      flex: 1 0 25%;
      padding: 5px;
    }

    .text {
      margin: 15px 15px 5px 15px;
      text-align: justify;
    }

    .button {
      background-color: transparent;
      border: none;
      color: dodgerblue;
      font-weight: bold;
      width: 100%;
      height: 50px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }

    .button:hover {
      border-top: 3px solid #000;
    }
  `;

  /**
   * Data elements for user data GDPR.
   */
  @property({ type: Array })
  user: UserData[] = [];

  /**
   * Data usage elements.
   */
  @property({ type: Array })
  usage: DataUsage[] = [];

  /**
   * User data rights.
   */
  @property({ type: Array })
  management: DataManagement[] = [];

  /**
   * How do we protect information.
   */
  @property({ type: Array })
  protection: ProtectionData[] = [];

  render(): TemplateResult {
    return html`
      <div class="wrapper">
        <input class="radio" id="one" name="group" type="radio" checked>
        <input class="radio" id="two" name="group" type="radio">
        <input class="radio" id="three" name="group" type="radio">
        <input class="radio" id="four" name="group" type="radio">
        <div class="tabs">
          <label class="tab" id="one-tab" for="one">What kind of data we have</label>
          <label class="tab" id="two-tab" for="two">How we use your data</label>
          <label class="tab" id="three-tab" for="three">Manage your data</label>
          <label class="tab" id="four-tab" for="four">How we protect your data</label>
        </div>
        <div class="panels">
          <div class="panel" id="one-panel">
            <h2 class="panel-title">What kind of data we have about you</h2>
            <div class="items">
              ${this.user.map(
                e =>
                  html`
                    <div class="card">
                      <img src=${e.iconURL} alt="${e.title} icon" class="icon" />
                      <h4><b>${e.title}</b></h4>
                    </div>
                  `,
              )}
            </div>
          </div>
          <div class="panel" id="two-panel">
            <h2 class="panel-title">How we use your data</h2>
            <div class="items">
              ${this.usage.map(
                e =>
                  html`
                    <div class="container">
                      <div class="card">
                        <img src="${e.iconURL}" alt="${e.title} icon" class="icon" />
                        <h4><b>${e.title}</b></h4>
                      </div>
                      <p class="text">${e.description}</p>
                    </div>
                  `,
              )}
            </div>
          </div>
          <div class="panel" id="three-panel">
            <h2 class="panel-title">Manage your data</h2>
            <div class="items">
              ${this.management.map(
                e =>
                  html`
                    <div class="container card">
                      <button @click="${e.action}" class="button">${e.title}</button>
                    </div>
                  `,
              )}
            </div>
          </div>
          <div class="panel" id="four-panel">
            <div class="panel-title">How we protect your data</div>
            <div class="items">
              ${this.protection.map(
                e =>
                  html`
                    <div class="container">
                      <div class="card">
                        <img src="${e.iconURL}" alt="${e.title} icon" class="icon" />
                        <h4><b>${e.title}</b></h4>
                      </div>
                      <p class="text">${e.description}</p>
                    </div>
                  `,
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface HTMLElementTagNameMap {
    'brief-me-gdpr': BriefMeGDPR;
  }
}
