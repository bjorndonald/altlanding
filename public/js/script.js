$(function () {
  $(document).scroll(function () {
    var $nav = $('.navbar-fixed-top')
    //var $bgB = $(".bg-background");

    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
    //$bgB.toggleClass('bg-warm-light', $(this).scrollTop() > $nav.height());
  })
})

jQuery(document).ready(function ($) {
  $('.menu-fullS').scrollTop()
  $('.mobileMenuList .mobileMenuListChild').on('click', function () {
    $(this)
      .find('ul')
      .toggleClass('mobileMenuListSubShow')
  })

  $('.navOpen').on('click', function () {
    if ($(this).attr('aria-expanded') == 'false') {
      $('.menu-overlay').css('left', '33%')
      $(this).attr('aria-expanded', 'true')
    } else if ($(this).attr('aria-expanded') == 'true') {
      $('.menu-overlay').css('left', '100%')
      $(this).attr('aria-expanded', 'false')
    }
  })

  $('.navClose').on('click', function () {
    console.log('SS')
    $('.menu-overlay').css('left', '100%')
    $('.navOpen').attr('aria-expanded', 'false')
    $('.menu-fullS').scrollTop(0)
  })

  // $('.custom-select-box').each(function () {
  //   var $this = $(this),
  //     selectOptions = $(this).children('option').length

  //   $this.addClass('hide-select')

  //   $this.wrap('<div class="select"></div>')
  //   $this.after('<div class="custom-select-bx"></div>')
  //   $('div.select').append('<div class="arrow-right"></div>')
  //   var $customSelect = $this.next('div.custom-select-bx')
  //   $customSelect.text(
  //     $this
  //       .children('option')
  //       .eq(0)
  //       .text()
  //   )

  //   var $optionlist = $('<ul />', {
  //     class: 'select-options'
  //   }).insertAfter($customSelect)

  //   for (var i = 0; i < selectOptions; i++) {
  //     $('<li />', {
  //       text: $this
  //         .children('option')
  //         .eq(i)
  //         .text(),
  //       rel: $this
  //         .children('option')
  //         .eq(i)
  //         .val()
  //     }).appendTo($optionlist)
  //   }

  //   var $optionlistItems = $optionlist.children('li')

  //   $customSelect.on('click', function (e) {
  //     e.stopPropagation()

  //     $('div.custom-select-bx.active')
  //       .not(this)
  //       .each(function () {
  //         $(this)
  //           .removeClass('active')
  //           .next('ul.select-options')

  //           .hide()
  //       })
  //     $(this)
  //       .toggleClass('active')
  //       .next('ul.select-options')

  //       .show()
  //   })

  //   $optionlistItems.click(function (e) {
  //     e.stopPropagation()
  //     $(this)
  //       .parent()
  //       .find('li')
  //       .removeClass('active')
  //     $(this).addClass('active')
  //     $customSelect.text($(this).text()).removeClass('active')
  //     $this.val($(this).attr('rel'))
  //     console.log($this.val())
  //     $optionlist.hide()
  //   })

  //   $(document).click(function () {
  //     $customSelect.removeClass('active')
  //     $optionlist.hide()
  //   })
  // })

  $('.fundingSectionThree .nav-item').on('click', function () {
    console.log('ffff')
    $(this).css('z-index', '4')
    $(this)
      .parent()

      .find('.nav-item')
      .each((i, x) => {
        if (
          $(x)
            .find('a')
            .hasClass('active')
        ) {
          $(x).css('z-index', '2')
        }
      })
  })

  // $('.mobileMenuListChild').on('click', function () {
  //   console.log('hjdhjdhdjh')
  //   // $(this)
  //   //   .find('ul')
  //   //   .css('visibility', 'visible')
  //   // $(this)
  //   //   .find('ul')
  //   //   .css('opacity', '1')
  //   // $(this)
  //   //   .find('ul')
  //   //   .css('height', '100%')
  // })

  $('.nav-switch .nav-item').on('click', function () {
    console.log('hh')
    $(this).css('z-index', '4')
    $(this)
      .parent()
      .find('.nav-item')
      .each((i, x) => {
        if (
          $(x)
            .find('a')
            .hasClass('active')
        ) {
          $(x).css('z-index', '2')
        }
      })
  })

  // $('.mobileMenuListSub a').on('click', () => {
  //   $('.menu-fullS').css('width', '0%')
  // })

  // $('.dropdown-toggle').dropdown()

  /*$(function () {
      $('[data-toggle="popover"]').popover();
    });*/

  // $('body').popover({
  //   html: true,
  //   content: function () {
  //     return $(this)
  //       .next()
  //       .html()
  //   },
  //   selector: '.has-popover',
  //   trigger: 'hover'
  // })

  // $('.btnCad85').click(function () {
  //   $('.cadText85').show()
  //   $('.cadText170').hide()
  //   $('.cadText345').hide()
  // })

  // $('.btnCad170').click(function () {
  //   $('.cadText85').hide()
  //   $('.cadText170').show()
  //   $('.cadText345').hide()
  // })

  // $('.btnCad345').click(function () {
  //   $('.cadText85').hide()
  //   $('.cadText170').hide()
  //   $('.cadText345').show()
  // })
})
