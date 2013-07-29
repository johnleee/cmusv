  google.load("feeds", "1");

    function initialize() {
      var feed = new google.feeds.Feed("http://www.cmu.edu/silicon-valley/news-events/rss-news.rss");
      feed.setNumEntries(10);
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            console.log(entry);
            var link = $("<a>", {"href": entry.link, "target": "_blank"});
            var summary = $("<p style='padding-left:15px;padding-right:35px;'>", {"size": "2"});
            $("#feed").append($("<li>").append(link.html(entry.title)).append(summary.html(entry.content)));
          }
           $("#feed").listview('refresh');
        }
      });
    }
    google.setOnLoadCallback(initialize);
