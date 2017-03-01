// events
Template.authenticatedNavigation.events({
    'click .logout' (event, template) {
        event.preventDefault();
        Meteor.logout((error) => {
            if (error) {
                Bert.alert(error.reason, 'warning');
            }
            else {
                Bert.alert('Vous avez bien été deconnecté!', 'success');
            }
        });
    }, 'click #parametres' (event, template) {
        event.preventDefault();
        event.stopPropagation();
        // hide the dropdown
        $('.dropdown').removeClass('open');
        // create menu variables
        var slideoutMenu = $('.parametres');
        var slideoutMenuWidth = $('.parametres').width();
        // toggle open class
        slideoutMenu.toggleClass("open");
        // slide menu Open
        if (slideoutMenu.hasClass("open")) {
            slideoutMenu.animate({
                right: "0px"
            });
            // create a one-time event to close when a user clicks anywhere outside
            /*$(document).one('touchstart click', function () {
                slideoutMenu.toggleClass("open");
                slideoutMenu.animate({
                    right: -slideoutMenuWidth
                }, 250);
            });*/
        }
        else {
            // slide menu close
            slideoutMenu.animate({
                right: -slideoutMenuWidth
            }, 250);
        }
    }, 'click #fichiers' (event, template) {
        event.preventDefault();
        event.stopPropagation();
        // hide the dropdown
        $('.dropdown').removeClass('open');
        // create menu variables
        var slideoutMenu = $('.fichiers');
        var slideoutMenuWidth = $('.fichiers').width();
        // toggle open class
        slideoutMenu.toggleClass("open");
        // slide menu Open
        if (slideoutMenu.hasClass("open")) {
            slideoutMenu.animate({
                right: "0px"
            });
            // create a one-time event to close when a user clicks anywhere outside
            /*$(document).one('touchstart click', function () {
                slideoutMenu.toggleClass("open");
                slideoutMenu.animate({
                    right: -slideoutMenuWidth
                }, 250);
            });*/
        }
        else {
            // slide menu close
            slideoutMenu.animate({
                right: -slideoutMenuWidth
            }, 250);
        }
    }
});