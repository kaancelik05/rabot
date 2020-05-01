(function($) {
  "use strict";
  var chatMessagesEn = [
      {
          name: "ms1",
          msg: "👋Hi, I'm Rabot. How can I help you?",
          delay: 300,
          align: "right",
          showTime: true,
          time: "19:58",
          img: "assets/img/author-image/rabotikonwhite.png"
      },
      {
          name: "ms2",
          msg: "I want to ask a question.",
          delay: 3000,
          align: "left",
          showTime: true,
          time: "19:58",
          img: "assets/img/author-image/8.png"
      },
      {
          name: "ms3",
          msg: "Of course! You can ask what you want!",
          delay: 3000,
          align: "right",
          showTime: true,
          time: "19:58",
          img: "assets/img/author-image/rabotikonwhite.png"
      },
      {
          name: "ms4",
          msg: "What's up How are you?",
          delay: 2000,
          align: "left",
          showTime: true,
          time: "19:58",
          img: "assets/img/author-image/8.png"
      },
      {
          name: "ms5",
          msg: "I'm very well, thank you! If you tell me exactly what you need, I can help you the best way. Can I get your contact information?",
          delay: 3000,
          align: "right",
          showTime: true,
          time: "19:58",
          img: "assets/img/author-image/rabotikonwhite.png"
      },
      {
          name: "ms6",
          msg: "I want to get information about your Chatbot service.",
          delay: 2000,
          align: "left",
          showTime: true,
          time: "19:58",
          img: "assets/img/author-image/8.png"
      },
      {
          name: "ms7",
          msg: "We develop need-based chatbots with artificial intelligence and natural language processing technology to assist your customers on multi-headed platforms.",
          delay: 3000,
          align: "right",
          showTime: true,
          time: "19:58",
          img: "assets/img/author-image/rabotikonwhite.png"
      },
      {
          name: "ms8",
          msg: "Are your Chatbot solutions different from other companies?",
          delay: 2000,
          align: "left",
          showTime: true,
          time: "19:58",
          img: "assets/img/author-image/8.png"
      },
      {
          name: "ms9",
          msg: "Definitely yes! When you choose us, we can offer platforms that you will not need to pay extra fees for.",
          delay: 3000,
          align: "right",
          showTime: true,
          time: "19:58",
          img: "assets/img/author-image/rabotikonwhite.png"
      },
      {
          name: "ms10",
          msg: "Thank you, I will contact you.❤️",
          delay: 4000,
          align: "left",
          showTime: true,
          time: "19:58",
          img: "assets/img/author-image/8.png"
      }
      // {
      //     name: "ms11",
      //     msg: "👋Hi​! I'm a Spacle. Let me know if you have any questions regarding our tool or set up a demo to learn more!",
      //     delay: 1000,
      //     align: "right",
      //     showTime: true,
      //     time: "19:58",
      //     img: "assets/img/author-image/8.png"
      // },
      // {
      //     name: "ms12",
      //     msg: "Ask a Question",
      //     delay: 3000,
      //     align: "left",
      //     showTime: true,
      //     time: "19:58",
      //     img: "assets/img/author-image/7.png"
      // },
      // {
      //     name: "ms13",
      //     msg: "Sure! Ask me anything!",
      //     delay: 3000,
      //     align: "right",
      //     showTime: true,
      //     time: "19:58",
      //     img: "assets/img/author-image/8.png"
      // },
      // {
      //     name: "ms14",
      //     msg: "What are you doing?",
      //     delay: 2000,
      //     align: "left",
      //     showTime: true,
      //     time: "19:58",
      //     img: "assets/img/author-image/7.png"
      // },
      // {
      //     name: "ms15",
      //     msg: "I'm great! I would love to get to better understand how you're doing and your needs, so I can best tell you how I can help you. Let me get some contact details.",
      //     delay: 3000,
      //     align: "right",
      //     showTime: true,
      //     time: "19:58",
      //     img: "assets/img/author-image/8.png"
      // },
      // {
      //     name: "ms16",
      //     msg: "Could you describe EnvyTheme in one sentence?",
      //     delay: 2000,
      //     align: "left",
      //     showTime: true,
      //     time: "19:58",
      //     img: "assets/img/author-image/7.png"
      // },
      // {
      //     name: "ms17",
      //     msg: "EnvyTheme.com | Premium High-Quality Items Design+Dev! Buy all exciting premium templates and themes from EnvyTheme!",
      //     delay: 3000,
      //     align: "right",
      //     showTime: true,
      //     time: "19:58",
      //     img: "assets/img/author-image/8.png"
      // },
      // {
      //     name: "ms18",
      //     msg: "What makes you different from other learning platforms?",
      //     delay: 2000,
      //     align: "left",
      //     showTime: true,
      //     time: "19:58",
      //     img: "assets/img/author-image/7.png"
      // },
      // {
      //     name: "ms19",
      //     msg: "The best Innovative Chatbot and automations are here to expand.",
      //     delay: 3000,
      //     align: "right",
      //     showTime: true,
      //     time: "19:58",
      //     img: "assets/img/author-image/8.png"
      // },
      // {
      //     name: "ms20",
      //     msg: "Great, Thank You!❤️",
      //     delay: 4000,
      //     align: "left",
      //     showTime: true,
      //     time: "19:58",
      //     img: "assets/img/author-image/7.png"
      // },
      // {
      //     name: "ms21",
      //     msg: "EnvyTheme.com | Premium High-Quality Items Design+Dev! Buy all exciting premium templates and themes from EnvyTheme! EnvyTheme.com | Premium High-Quality Items Design+Dev! Great, Thank You!❤️",
      //     delay: 3000,
      //     align: "right",
      //     showTime: true,
      //     time: "19:58",
      //     img: "assets/img/author-image/8.png"
      // },
  ];
  var chatDelay = 0;
  var chatDelay2, chatDelay3, scrollDelay, chatTimeString, msgname, msginner, spinner;

  function onRowAdded() {
      $('.chat-container').animate({
          scrollTop: $('.chat-container').prop('scrollHeight')
      });
  };
  $.each(chatMessagesEn, function(index, obj) {
      chatDelay = chatDelay + 1000;
      chatDelay2 = chatDelay + obj.delay;
      chatDelay3 = chatDelay2 + 10;
      scrollDelay = chatDelay;
      chatTimeString = " ";
      msgname = "." + obj.name;
      msginner = ".messageinner-" + obj.name;
      spinner = ".sp-" + obj.name;
      if (obj.showTime == true) {
          chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
      }
      $(".chat-message-en-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><img src='" + obj.img +"'><span class='message-text'>" + obj.msg + chatTimeString + "</span></div></li>");

      $(msgname).delay(chatDelay).fadeIn();
      $(spinner).delay(chatDelay2).hide(1);
      $(msginner).delay(chatDelay3).fadeIn();
      setTimeout(onRowAdded, chatDelay);
      setTimeout(onRowAdded, chatDelay3);
      chatDelay = chatDelay3;
  });
}(jQuery))