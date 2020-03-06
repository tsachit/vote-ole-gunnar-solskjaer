const { openBrowser, goto, waitFor, $, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://www.premierleague.com/news/1634481?fbclid=IwAR0F3U8I2b4h6QRB57tStZ6V4jd40aJ1gti4X3DVOAez2iRn4CcLfxiN0nQ");
	await waitFor(2000);
        await click($('//main[@id="mainContent"]/div[3]/div[1]/section[1]/div[5]/div/div/div[2]/ul/li[3]/div/span[1]'));
	await waitFor(2000);
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
