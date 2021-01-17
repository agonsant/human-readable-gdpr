---
layout: page.11ty.cjs
title: <brief-me-gdpr> ⌲ Home
---

# &lt;brief-me-gdpr&gt;

`<brief-me-gdpr>` is an awesome Web Component for a human readable GDPR compliance.

<brief-me-gdpr id="example"></brief-me-gdpr>
<script>
      customElements.whenDefined('brief-me-gdpr').then(wc => {
        gdprComponent = document.getElementById('example');
        gdprComponent.user = [
          {
            title: 'Name and Surname',
            iconURL: '/assets/user-info.png'
          },
          {
            title: 'Location',
            iconURL: '/assets/location.png'
          },
          {
            title: 'Phone Number',
            iconURL: '/assets/phone-number.png'
          },
          {
            title: 'Email',
            iconURL: '/assets/email.png'
          },
          {
            title: 'Financials Info',
            iconURL: '/assets/financial.png'
          },
          {
            title: 'Working Information',
            iconURL: '/assets/job.png'
          }
        ];
        gdprComponent.usage = [
          {
            title: 'Web Operation',
            iconURL: '/assets/web.png',
            description: 'We use some of your data for our web proper operation'
          },
          {
            title: 'Comercial',
            iconURL: '/assets/comercial.png',
            description: 'We use some of your data for commercial purposes, such us offer you a filtered product'
          },
          {
            title: 'Analytics',
            iconURL: '/assets/analytics.png',
            description: 'We improve our website by seeing how you browse'
          }
        ];

        gdprComponent.protection = [
          {
            title: 'Data Protection Officer',
            iconURL: '/assets/officer.png',
            description: 'A DPO is responsible for overseeing the data protection approach, strategy, and its implementation'
          },
          {
            title: 'Security',
            iconURL: '/assets/security.png',
            description: 'We follow all security protocols and keep our systems updated, eliminating vulnerabilities'
          },
          {
            title: 'Encryption',
            iconURL: '/assets/encryption.png',
            description: 'We store your encrypted data in an independent database'          }
        ];

        gdprComponent.management = [
          {
            title: 'Access',
            action: (ev) => console.log('User has clicked on Access')
          },
          {
            title: 'Modify',
            action: (ev) => console.log('User has clicked on Modify')
          },
          {
            title: 'Erase',
            action: (ev) => console.log('User has clicked on Erase')      
          },
          {
            title: 'Port',
            action: (ev) => console.log('User has clicked on Portability')      
          },
          {
            title: 'Forget',
            action: (ev) => console.log('User has clicked on Forget')      
          },
          {
            title: 'Oppose',
            action: (ev) => console.log('User has clicked on Oppose')      
          },
          {
            title: 'Restrict its usage',
            action: (ev) => console.log('User has clicked on Restrict')      
          }
        ]
      })
    </script>

## As easy as HTML

<section >
  <div>

`<brief-me-gdpr>` is just an HTML element. You can it anywhere you can use HTML!

```html
<brief-me-gdpr></brief-me-gdpr>
```

  </div>
</section>

## Configure with attributes

<section >
  <div>

`<brief-me-gdpr>` can be configured with attributed as JS objects.

```html
<brief-me-gdpr></brief-me-gdpr>
```

```js
      customElements.whenDefined('brief-me-gdpr').then(wc => {
        gdprComponent = document.getElementById('example');
        gdprComponent.user = [
          { title: 'Name and Surname', iconURL: '/assets/user-info.png' },
          { title: 'Location',iconURL: '/assets/location.png'},
          { title: 'Phone Number', iconURL: '/assets/phone-number.png' },
          { title: 'Email', iconURL: '/assets/email.png' },
          { title: 'Financials Info', iconURL: '/assets/financial.png' },
          { title: 'Working Information', iconURL: '/assets/job.png' }
        ];
        gdprComponent.usage = [
          { title: 'Web Operation', iconURL: '/assets/web.png', description: 'We use some of your data for our web proper operation' },
          { title: 'Comercial', iconURL: '/assets/comercial.png', description: 'We use some of your data for commercial purposes, such us offer you a filtered product' },
          { title: 'Analytics', iconURL: '/assets/analytics.png', description: 'We improve our website by seeing how you browse' }
        ];

        gdprComponent.protection = [
          { title: 'Data Protection Officer', iconURL: '/assets/officer.png', description: 'A DPO is responsible for overseeing the data protection approach, strategy, and its implementation' },
          { title: 'Security', iconURL: '/assets/security.png', description: 'We follow all security protocols and keep our systems updated, eliminating vulnerabilities'},
          { title: 'Encryption', iconURL: '/assets/encryption.png', description: 'We store your encrypted data in an independent database' }
        ];

        gdprComponent.management = [
          { title: 'Access', action: (ev) => console.log('User has clicked on Access')},
          { title: 'Modify', action: (ev) => console.log('User has clicked on Modify')},
          { title: 'Erase', action: (ev) => console.log('User has clicked on Erase')},
          { title: 'Port', action: (ev) => console.log('User has clicked on Portability')},
          { title: 'Forget', action: (ev) => console.log('User has clicked on Forget')},
          { title: 'Oppose', action: (ev) => console.log('User has clicked on Oppose')},
          { title: 'Restrict its usage', action: (ev) => console.log('User has clicked on Restrict')}
        ]
      })
```

  </div>
</section>

## Retrieve from CDN or NPM

<section >
  <div>

`<brief-me-gdpr>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```bash
npm i brief-me-gdpr
```

```html
<script type="module" src="https://unpkg.com/brief-me-gdpr?module"></script>
```

```js
import { BriefMeGDPR } from 'https://unpkg.com/brief-me-gdpr?module';
```


  </div>
</section>
