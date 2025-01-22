window.addEventListener('load', function() {
    // Check if the "领取今日的登录奖励" button exists and hasn't been clicked
    const rewardButton = document.querySelector('a[href="/mission/daily"]');
    if (rewardButton) {
        rewardButton.click();
    }
    const rewardButton2 = document.querySelector('input[value="领取 X 铜币"]');
    if (rewardButton2) {
        rewardButton2.click();
    }
});
