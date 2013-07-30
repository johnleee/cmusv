  google.load("feeds", "1");

    function initialize() {
      var feed = new google.feeds.Feed("http://www.cmu.edu/silicon-valley/news-events/rss-news.rss");
      feed.setNumEntries(10);
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            //console.log(entry);
            var link = $("<a>", {"href": "#", "target": "_blank", "onclick": "openWindow('" + entry.link +"');return false;"});
            var summary = $("<p style='padding-left:15px;padding-right:35px;'>", {"size": "2"});
            $("#feed").append($("<li>").append(link.html(entry.title)).append(summary.html(entry.content)));
          }
           $("#feed").listview('refresh');
        }
      });

     var alumFeed = new google.feeds.Feed("http://www.cmu.edu/silicon-valley/news-events/news/alumni-rss-feed.rss");
      alumFeed.setNumEntries(10);
      alumFeed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("alumFeed");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            console.log(entry);
            //var link = $("<a>", {"href": entry.link, "target": "_blank"});
            var link = $("<a>", {"href": "#", "target": "_blank", "onclick": "openWindow('" + entry.link +"');return false;"});
            var summary = $("<p style='padding-left:15px;padding-right:35px;'>", {"size": "2"});
            $("#alumFeed").append($("<li>").append(link.html(entry.title)).append(summary.html(entry.content)));
          }
           $("#alumFeed").listview('refresh');
        }
      });

    }
    google.setOnLoadCallback(initialize);

    function openWindow(url) {
        var ref = window.open(url, '_blank', 'location=yes,enableViewportScale=yes');
    }
