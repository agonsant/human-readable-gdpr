---
layout: example.11ty.cjs
title: <brief-me-gdpr> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example using JS to add information
---

<brief-me-gdpr id="example"></brief-me-gdpr>
<script>
      customElements.whenDefined('brief-me-gdpr').then(wc => {
        gdprComponent = document.getElementById('example');
        gdprComponent.user = [
          {
            title: 'Name and Surname',
            iconURL: '/brief-me-gdpr/assets/user-info.png'
          },
          {
            title: 'Location',
            iconURL: '/brief-me-gdpr/assets/location.png'
          },
          {
            title: 'Phone Number',
            iconURL: '/brief-me-gdpr/assets/phone-number.png'
          },
          {
            title: 'Email',
            iconURL: '/brief-me-gdpr/assets/email.png'
          },
          {
            title: 'Financials Info',
            iconURL: '/brief-me-gdpr/assets/financial.png'
          },
          {
            title: 'Working Information',
            iconURL: '/brief-me-gdpr/assets/job.png'
          }
        ];
        gdprComponent.usage = [
          {
            title: 'Web Operation',
            iconURL: '/brief-me-gdpr/assets/web.png',
            description: 'We use some of your data for our web proper operation'
          },
          {
            title: 'Comercial',
            iconURL: '/brief-me-gdpr/assets/comercial.png',
            description: 'We use some of your data for commercial purposes, such us offer you a filtered product'
          },
          {
            title: 'Analytics',
            iconURL: '/brief-me-gdpr/assets/analytics.png',
            description: 'We improve our website by seeing how you browse'
          }
        ];

        gdprComponent.protection = [
          {
            title: 'Data Protection Officer',
            iconURL: '/brief-me-gdpr/assets/officer.png',
            description: 'A DPO is responsible for overseeing the data protection approach, strategy, and its implementation'
          },
          {
            title: 'Security',
            iconURL: '/brief-me-gdpr/assets/security.png',
            description: 'We follow all security protocols and keep our systems updated, eliminating vulnerabilities'
          },
          {
            title: 'Encryption',
            iconURL: '/brief-me-gdpr/assets/encryption.png',
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

<h3>HTML</h3>

```html
<script type="module" src="brief-me-gdpr.js"></script>
<brief-me-gdpr id="example"></brief-me-gdpr>
```

<h3>JS</h3>

```js
      customElements.whenDefined('brief-me-gdpr').then(wc => {
        gdprComponent = document.getElementById('example');
        gdprComponent.user = [
          { title: 'Name and Surname', iconURL: '/brief-me-gdpr/assets/user-info.png' },
          { title: 'Location',iconURL: '/brief-me-gdpr/assets/location.png'},
          { title: 'Phone Number', iconURL: '/brief-me-gdpr/assets/phone-number.png' },
          { title: 'Email', iconURL: '/brief-me-gdpr/assets/email.png' },
          { title: 'Financials Info', iconURL: '/brief-me-gdpr/assets/financial.png' },
          { title: 'Working Information', iconURL: '/brief-me-gdpr/assets/job.png' }
        ];
        gdprComponent.usage = [
          { title: 'Web Operation', iconURL: '/brief-me-gdpr/assets/web.png', description: 'We use some of your data for our web proper operation' },
          { title: 'Comercial', iconURL: '/brief-me-gdpr/assets/comercial.png', description: 'We use some of your data for commercial purposes, such us offer you a filtered product' },
          { title: 'Analytics', iconURL: '/brief-me-gdpr/assets/analytics.png', description: 'We improve our website by seeing how you browse' }
        ];

        gdprComponent.protection = [
          { title: 'Data Protection Officer', iconURL: '/brief-me-gdpr/assets/officer.png', description: 'A DPO is responsible for overseeing the data protection approach, strategy, and its implementation' },
          { title: 'Security', iconURL: '/brief-me-gdpr/assets/security.png', description: 'We follow all security protocols and keep our systems updated, eliminating vulnerabilities'},
          { title: 'Encryption', iconURL: '/brief-me-gdpr/assets/encryption.png', description: 'We store your encrypted data in an independent database' }
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
