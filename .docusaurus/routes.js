import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/firmware-analysis-docs/__docusaurus/debug',
    component: ComponentCreator('/firmware-analysis-docs/__docusaurus/debug', 'ab6'),
    exact: true
  },
  {
    path: '/firmware-analysis-docs/__docusaurus/debug/config',
    component: ComponentCreator('/firmware-analysis-docs/__docusaurus/debug/config', '8f3'),
    exact: true
  },
  {
    path: '/firmware-analysis-docs/__docusaurus/debug/content',
    component: ComponentCreator('/firmware-analysis-docs/__docusaurus/debug/content', 'd2d'),
    exact: true
  },
  {
    path: '/firmware-analysis-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/firmware-analysis-docs/__docusaurus/debug/globalData', 'aff'),
    exact: true
  },
  {
    path: '/firmware-analysis-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/firmware-analysis-docs/__docusaurus/debug/metadata', 'c9f'),
    exact: true
  },
  {
    path: '/firmware-analysis-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/firmware-analysis-docs/__docusaurus/debug/registry', '2cb'),
    exact: true
  },
  {
    path: '/firmware-analysis-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/firmware-analysis-docs/__docusaurus/debug/routes', 'a8a'),
    exact: true
  },
  {
    path: '/firmware-analysis-docs/markdown-page',
    component: ComponentCreator('/firmware-analysis-docs/markdown-page', '95c'),
    exact: true
  },
  {
    path: '/firmware-analysis-docs/docs',
    component: ComponentCreator('/firmware-analysis-docs/docs', '430'),
    routes: [
      {
        path: '/firmware-analysis-docs/docs',
        component: ComponentCreator('/firmware-analysis-docs/docs', '40c'),
        routes: [
          {
            path: '/firmware-analysis-docs/docs',
            component: ComponentCreator('/firmware-analysis-docs/docs', '4ac'),
            routes: [
              {
                path: '/firmware-analysis-docs/docs/Backend/introduction',
                component: ComponentCreator('/firmware-analysis-docs/docs/Backend/introduction', 'c3e'),
                exact: true,
                sidebar: "gettingStartedSidebar"
              },
              {
                path: '/firmware-analysis-docs/docs/Backend/wrapperdoku',
                component: ComponentCreator('/firmware-analysis-docs/docs/Backend/wrapperdoku', 'baf'),
                exact: true,
                sidebar: "gettingStartedSidebar"
              },
              {
                path: '/firmware-analysis-docs/docs/Frontend/introduction',
                component: ComponentCreator('/firmware-analysis-docs/docs/Frontend/introduction', '505'),
                exact: true,
                sidebar: "gettingStartedSidebar"
              },
              {
                path: '/firmware-analysis-docs/docs/Getting Started/debugdocker',
                component: ComponentCreator('/firmware-analysis-docs/docs/Getting Started/debugdocker', '6b4'),
                exact: true,
                sidebar: "gettingStartedSidebar"
              },
              {
                path: '/firmware-analysis-docs/docs/Getting Started/How to use/firmware_vault',
                component: ComponentCreator('/firmware-analysis-docs/docs/Getting Started/How to use/firmware_vault', '6db'),
                exact: true,
                sidebar: "gettingStartedSidebar"
              },
              {
                path: '/firmware-analysis-docs/docs/Getting Started/installation',
                component: ComponentCreator('/firmware-analysis-docs/docs/Getting Started/installation', '089'),
                exact: true,
                sidebar: "gettingStartedSidebar"
              },
              {
                path: '/firmware-analysis-docs/docs/Getting Started/knowntodos',
                component: ComponentCreator('/firmware-analysis-docs/docs/Getting Started/knowntodos', '414'),
                exact: true,
                sidebar: "gettingStartedSidebar"
              },
              {
                path: '/firmware-analysis-docs/docs/introduction',
                component: ComponentCreator('/firmware-analysis-docs/docs/introduction', '35e'),
                exact: true,
                sidebar: "gettingStartedSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/firmware-analysis-docs/',
    component: ComponentCreator('/firmware-analysis-docs/', '689'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
