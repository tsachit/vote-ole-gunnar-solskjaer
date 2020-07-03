const { openBrowser, goto, waitFor, $, click, closeBrowser } = require('taiko');
const max = 500;
(async () => {
    for (i = 0; i < max; i++) {


        try {
            await openBrowser();
            await goto("https://www.premierleague.com/news/1703136");
            await waitFor("June's Barclays Manager shortlist");
            await scrollTo("June's Barclays Manager shortlist");
            await click($('//main[@id="mainContent"]/div[3]/div[1]/section[1]/div[5]/div/div/div[2]/ul/li[4]/div/span[1]'));
            await waitFor("Thank you for voting. Results will be announced soon.");
        } catch (error) {
            console.error(error);
        } finally {
            await closeBrowser();
        }
        console.log(`========================Iteration ${i+1} complete========================`)
    }
})();
