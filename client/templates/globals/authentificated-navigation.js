// events
Template.authenticatedNavigation.events({
    'click .logout' (event) {
        event.preventDefault();
        Meteor.logout((error) => {
            if (error) {
                Bert.alert(error.reason, 'warning');
            }
            else {
                Bert.alert('Vous avez bien été deconnecté!', 'success');
            }
        });
    }, 'click .a-propos' (event) {
        event.preventDefault();
        event.stopPropagation();
        // hide the dropdown
        $('.dropdown').removeClass('open');
        // create menu variables
        var slideoutMenu = $('.slideout-menu');
        var slideoutMenuWidth = $('.slideout-menu').width();
        // toggle open class
        slideoutMenu.toggleClass("open");
        // slide menu Open
        if (slideoutMenu.hasClass("open")) {
            slideoutMenu.animate({
                right: "250px"
            });
            // create a one-time event to close when a user clicks anywhere outside
            $(document).one('touchstart click', function () {
                slideoutMenu.toggleClass("open");
                slideoutMenu.animate({
                    right: -slideoutMenuWidth
                }, 250);
            });
        }
        else {
            // slide menu close
            slideoutMenu.animate({
                right: -slideoutMenuWidth
            }, 250);
        }
    }
});