
$('#likes_buttons_<%= @tweet.id %>').html("<%= j(render partial: 'likes/like', locals: {tweet: @tweet}) %>");
