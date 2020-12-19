import React from "react";
import './Layout.scss';
import ReactHtmlParser from 'react-html-parser'


const Layout =({ selectedItem }) => {
    const reg = /\d+/g;
    let sel = selectedItem.toLowerCase();
    const text = sel.split("/");
    let content = "";
    let slot = 1;

    const SM = () => `<div class='sm col-6'><h3>Slot-${slot}</h3></div>`;
    const L = () => `<div class='l col-12'><h3>Slot-${slot}</h3></div>`;
    const XL = () => `<div class='xl col-12'><h3>Slot-${slot}</h3></div>`;


    for (let item of text) {
      let ItemChange = item.replace(reg, '');
      let itemNum = parseInt(item, 10);
      if (isNaN(itemNum)) itemNum = 1;

      switch (ItemChange) {
        case 'sm':
          for (let i = 0; i < itemNum; i++) {
            content += SM();
            slot +=1;
          }
          break;
        case 'l':
          for (let i = 0; i < itemNum; i++) {
            content += L();
            slot +=1;
          }
          break;
        case 'xl':
          for (let i = 0; i < itemNum; i++) {
            content += XL();
            slot +=1;
          }
          break;
        default:
      }
    }


    return <div className="row main">{ReactHtmlParser(content)}</div>;


}

export default Layout;