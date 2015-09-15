export default {
  name: "notification-menu-item",

  initialize: function(container) {
    $(document).ready(function() {
      var source   = $("#notification-menu-item").html();
      var template = Handlebars.compile(source);
      var notification_url = "";
      var logged_user = false;
      if(Discourse.User.current()){
        logged_user = true;
        notification_url = '/users/' + Discourse.User.current().username + '/notifications';
      }
      var html = template({logged_user: logged_user, notification_url: notification_url});
      $('body').prepend(html);
    });
  }
}
