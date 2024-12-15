import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  gettingStartedSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['Getting Started/installation', {
        type: 'category',
        label: 'How to use',
          items: ['Getting Started/How to use/firmware_vault'],
        },
        'Getting Started/debugdocker',
        'Getting Started/knowntodos',
      ],
    },
    {
      type: 'category',
      label: 'Frontend',
      items: ['Frontend/introduction'],
    },
    {
      type: 'category',
      label: 'Backend',
      items: ['Backend/introduction', 'Backend/wrapperdoku'],
    },
  ],
};

export default sidebars;