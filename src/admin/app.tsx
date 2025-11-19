import type { StrapiApp } from '@strapi/strapi/admin';
// @ts-ignore: allow importing image asset without type declaration
import favicon from "./extensions/favicon.png";
import './extensions/custom.css';

export default {
  config: {
    locales: ['nl'],
    head: {
      favicon: favicon,
    },
    theme: {
      light: {
        colors: {
          // VRCafe Theme
          neutral0: '#5F0E88',           // SIDEBAR BACKGROUND (paars)
          neutral100: '#1E1921',         // MAIN CONTENT BACKGROUND (zwart)
          neutral150: '#824BD5',         // GRID lINES (paarse lijnen)
          neutral200: '#824BD5',         // LINE THROUGH MIDDLE
          neutral500: 'rgba(255,255,255,0.74)', // MENU IDLE COLOR
          neutral600: '#FFFFFF',         // MENU HOVER COLOR
          neutral700: '#FFFFFF',         // MENU ACTIVE ICON COLOR
          neutral800: '#FFFFFF',         // TITLE COLORS
          neutral900: '#34E9A3',         // TOOLTIP BG
          primary100: '#5F0E88',         // MENU ACTIVE BG
          primary200: '#5F0E88',         // PLUS SIGN BG
          primary500: '#F23B7B',         // PRIMARY BUTTON HOVER
          primary600: '#34E9A3',         // PRIMARY BUTTON COLOR (groen)
          primary700: '#34E9A3',         // HIGHLIGHT COLOR
          secondary100: '#2B272D',       // INFO BOX COLOR
          success100: '#2B272D',         // SUCCESS BOX BG
          danger100: '#ff0000ff',          // TOGGLE OFF BG
          danger700: '#bf4c69',          // TOGGLE OFF COLOR
        },
      },
    },
  },

  bootstrap(app: StrapiApp) {
    console.log('VRCafe CMS loaded');
  },
};
