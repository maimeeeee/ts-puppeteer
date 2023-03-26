import puppeteer from 'puppeteer'
import { URLS } from '../assets/urls'

const baseCrawler = async () => {
  try {
    const browser = await puppeteer.launch({
      channel: 'chrome',
    })
    const page = await browser.newPage()

    URLS.forEach(async (url) => {
      await page.goto(url, { waitUntil: 'networkidle2' })

      const results = await page.$$eval('a', (elements) =>
        elements
          .filter((element) => element.title)
          .map((element) => ({
            title: element.title,
            url: element.href,
          }))
      )

      console.log('LOG Result: ', results)
      await browser.close()
    })
  } catch (error) {
    console.log('Log', error)
  }
}

export { baseCrawler }
