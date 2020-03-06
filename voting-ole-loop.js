const { openBrowser, goto, waitFor, $, click, closeBrowser } = require('taiko');
const max = 500;
(async () => {
    for (i = 0; i < max; i++) {


        try {
            await openBrowser();
            await goto("https://www.premierleague.com/news/1634481");
        await waitFor(2000);
            await click($('//main[@id="mainContent"]/div[3]/div[1]/section[1]/div[5]/div/div/div[2]/ul/li[3]/div/span[1]'));
        await waitFor(2000);
        } catch (error) {
            console.error(error);
        } finally {
            await closeBrowser();
        }
        console.log(`========================Iteration ${i+1} complete========================`)
    }
})();
