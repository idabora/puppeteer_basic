const puppeteer=require('puppeteer');

async function launcher(){

    const browser=await puppeteer.launch({overhead:false});
    const page=await browser.newPage();


  //   await page.goto('https://www.npmjs.com/package/puppeteer');
  //   // await page.goto('https://www.npmjs.com/search?q=express');
  //   await page.setViewport({height:1024,width:1080});

  //   await page.type('._390acbc5',"express");

  //   const searchResultSelector='db7ee1ac';
  //   await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);

  // const textSelector = await page.waitForSelector(
  //   'additions and fixes/bugs'
  // );
  // const fullTitle = await textSelector.evaluate(el => el.textContent);

  // // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  // await browser.close();

}
launcher();