// YeetTheFeed - Replace YouTube's garbage recommendations with your own feed
// TODO: Add channel list configuration
// TODO: Fetch RSS feeds from subscribed channels
// TODO: Inject custom feed into homepage

console.log('YeetTheFeed loaded - algorithm yeeting in progress');

// Detect if we're on the homepage
function isHomepage() {
  return window.location.pathname === '/' || window.location.pathname === '/feed/subscriptions';
}

// Remove the recommended content
function yeetTheAlgo() {
  if (!isHomepage()) return;

  // Target the main content area
  const feed = document.querySelector('ytd-rich-grid-renderer');
  if (feed) {
    feed.innerHTML = `
      <div id="yeeted-feed" style="padding: 20px; text-align: center;">
        <h2>Algorithm has been yeeted</h2>
        <p>Custom feed coming soon...</p>
      </div>
    `;
  }
}

// Run on page load and URL changes (YouTube is an SPA)
yeetTheAlgo();

// Watch for YouTube's SPA navigation
const observer = new MutationObserver(() => {
  yeetTheAlgo();
});

observer.observe(document.body, { childList: true, subtree: true });
